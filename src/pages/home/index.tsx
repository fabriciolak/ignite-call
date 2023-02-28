import Image from 'next/image'

import { Heading, Text } from '@ignite-ui/react'

import { Container, Hero, Preview, Background } from './styles'
import previewImage from '../../assets/app-preview.png'
import backgroundImage from '../../assets/background-home.svg'
import { ClaimUsernameForm } from './components/ClaimUsernameform'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Descomplique sua agenda | Ignite Call"
        description="Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre."
      />

      <Container>
        <Background>
          <Image src={backgroundImage} alt="Background pattern" height={681} />
        </Background>
        <Hero>
          <Heading size="4xl">Agendamento descomplicado</Heading>
          <Text size="xl">
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>

          <ClaimUsernameForm />
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
    </>
  )
}
