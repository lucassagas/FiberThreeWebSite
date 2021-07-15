import Head from 'next/head'
import { useState, useEffect } from 'react'

import { Button } from '@components/Form/Button'
import { Features } from '@components/Pages/Main/Features'

import LaptopImage from '../assets/notebook.png'
import Phone from '../assets/phone.png'
import NeoredeLogo from '../assets/neorede_logo.png'

import {
  Container,
  Content,
  Hero,
  ImageParallax,
  Customer
} from '@styles/pages/main'

export default function Home() {
  const [offSet, setOffSet] = useState<number>(0)

  function handleScroll() {
    setOffSet(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Head>
        <title>Fiber Three</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Content initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Hero>
            <section>
              <ImageParallax>
                <img className="laptop" src={LaptopImage} alt="Laptop" />
                <img
                  style={{
                    top: 0 - offSet * 0.2
                  }}
                  className="phone"
                  src={Phone}
                  alt="Phone"
                />
              </ImageParallax>
            </section>
            <section>
              <span>
                <h1>Fiber Three</h1>
                <p>
                  Sistema de gerenciamento massivo de rede <br /> para
                  provedores
                </p>

                <Button>Solicitar demonstração</Button>
              </span>
            </section>
          </Hero>

          <Customer>
            <div>
              <span>''</span>
              <p>
                Atendemos o segundo maior <br /> provedor de Santa Catarina
              </p>
            </div>

            <img src={NeoredeLogo} alt="Logo Neorede" />
          </Customer>
        </Content>
        <Features />
      </Container>
    </>
  )
}
