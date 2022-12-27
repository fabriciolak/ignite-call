import { styled } from '@ignite-ui/react'

export const Background = styled('div', {
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
