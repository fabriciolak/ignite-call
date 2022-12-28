import { Heading, styled, Text } from '@ignite-ui/react'

export const Background = styled('div', {
  // display: 'none',
  position: 'absolute',
  zIndex: '-1',
  marginRight: 730,
  width: '1208px',
  height: '681px',
  overflow: 'hidden',

  '@media (min-width: 1440px)': {
    marginRight: 530,
  },

  '@media (max-width: 1280px)': {
    margin: '0 auto',

    width: '100%',
    height: 'auto',
  },
})

export const Container = styled('div', {
  maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 'auto',
  gap: 96,

  '@media (min-width: 1440px)': {
    margin: '0 auto',
  },

  '@media (max-width: 1280px)': {
    flexDirection: 'column',
    width: '100%',
    overflow: 'hidden',
    padding: '2rem',
  },
})

export const Hero = styled('div', {
  maxWidth: 480,
  marginLeft: 120,

  [`> ${Text}`]: {
    marginTop: '$2',
  },

  '@media (max-width: 1280px)': {
    margin: '0 auto',
  },

  '@media (max-width: 912px)': {
    img: {
      display: 'none',
    },
  },

  '@media (max-width: 580px)': {
    [`> ${Text}`]: {
      fontSize: '$md',
    },
    [`> ${Heading}`]: {
      fontSize: '$5xl',
    },
  },
})

export const Preview = styled('div', {
  overflow: 'hidden',

  '@media (min-width: 1440px)': {
    overflow: 'visible',
  },

  '@media (max-width: 1280px)': {
    width: '100%',
    margin: '0 auto',
  },

  '@media (max-width: 912px)': {
    img: {
      display: 'none',
    },
  },
})
