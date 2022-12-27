import { styled } from '@ignite-ui/react'

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
    overflow: 'visible',
  },
})

export const Hero = styled('div', {
  marginLeft: 120,
})

export const Preview = styled('div', {
  overflow: 'hidden',

  '@media (min-width: 1440px)': {
    overflow: 'visible',
  },
})
