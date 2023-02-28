import dayjs from 'dayjs'
import { NextApiRequest, NextApiResponse } from 'next'
import { google } from 'googleapis'
import { z } from 'zod'
import { prisma } from '../../../../lib/prisma'
import { getGoogleOAuthToken } from '../../../../lib/google'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const username = String(req.query.username)

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (!user) {
    return res.status(400).json({ message: 'User does not exists' })
  }

  const createSchedulingBody = z.object({
    name: z.string(),
    email: z.string().email(),
    comments: z.string(),
    date: z.string().datetime(),
  })

  const { name, email, comments, date } = createSchedulingBody.parse(req.body)

  const schedulingDate = dayjs(date).startOf('hour')

  if (schedulingDate.isBefore(new Date())) {
    return res.status(400).json({ message: 'Date in the past' })
  }

  const conflictingScheduling = await prisma.scheduling.findFirst({
    where: {
      user_id: user.id,
      date: schedulingDate.toDate(),
    },
  })

  if (conflictingScheduling) {
    return res.status(400).json({
      message: 'Not allowed book another scheduling in same time',
    })
  }

  const scheduling = await prisma.scheduling.create({
    data: {
      date: schedulingDate.toDate(),
      name,
      email,
      comments,
      user_id: user.id,
    },
  })

  const calendar = google.calendar({
    version: 'v3',
    auth: await getGoogleOAuthToken(user.id),
  })

  await calendar.events.insert({
    calendarId: 'primary',
    conferenceDataVersion: 1,
    requestBody: {
      summary: `Ignite Call: ${name}`,
      description: comments,
      start: {
        dateTime: schedulingDate.format(),
      },
      end: {
        dateTime: schedulingDate.add(1, 'hour').format(),
      },
      attendees: [{ email, displayName: name }],
      conferenceData: {
        createRequest: {
          requestId: scheduling.id,
          conferenceSolutionKey: {
            type: 'hangoutsMeet',
          },
        },
      },
    },
  })

  return res.status(201).end()
}
