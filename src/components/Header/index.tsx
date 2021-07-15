import { useState, memo } from 'react'

import Lottie from 'react-lottie'
import animationData from '../../animations/animated_logo_three.json'
import { DEFAULT_LOTTIE_ANIMATION } from '../../constants'

import Link from 'next/link'
import { Button } from '@components/Form/Button'

import { HEADER_ANIMATION } from './animation'

import { RiMenuLine } from '../../styles/icons'
import {
  Container,
  AnimationContainer,
  Li,
  MobileMenu
} from '@styles/components/Header'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleMenu() {
    setIsOpen(!isOpen)
  }
  return (
    <Container>
      <AnimationContainer
        variants={HEADER_ANIMATION}
        initial="hidden"
        animate="visible"
      >
        <div>
          <Lottie
            isClickToPauseDisabled
            options={{
              ...DEFAULT_LOTTIE_ANIMATION,
              animationData,
              loop: false
            }}
          />
        </div>
        <nav>
          <ul>
            <Li>
              <Link href="">
                <a>Fale Conosco</a>
              </Link>
            </Li>
            <Li>
              <Link href="Sobre Nós">
                <a>Sobre Nós</a>
              </Link>
            </Li>
          </ul>
          <Button>Solicitar demonstração</Button>
        </nav>

        <button type="button" onClick={toggleMenu}>
          <RiMenuLine size={24} />
        </button>
      </AnimationContainer>

      <MobileMenu isOpen={isOpen}>
        <nav>
          <ul>
            <Li>
              <Link href="">
                <a>Fale Conosco</a>
              </Link>
            </Li>
            <Li>
              <Link href="">
                <a>Sobre Nós</a>
              </Link>
            </Li>
            <Li>
              <Link href="">
                <a>Solicitar Demonstração</a>
              </Link>
            </Li>
          </ul>
        </nav>
      </MobileMenu>
    </Container>
  )
}

export default memo(Header)
