import Image from 'next/image'

import { Heading, Text } from '@ignite-ui/react'

import { Container, Hero, Preview } from './styles'
import previewImage from '../../assets/app-preview.png'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
      </Hero>

      <Preview>
        <Image
          src={previewImage}
          alt="Calendário simbolizando a aplicação"
          height={442}
          quality={100}
          priority
        />
      </Preview>
    </Container>
  )
}
