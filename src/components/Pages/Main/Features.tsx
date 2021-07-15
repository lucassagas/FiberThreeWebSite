import { useEffect } from 'react'

import { FEATURES_LIST } from '../../../constants'
import {
  MAIN_ANIMATION,
  MAIN_TEXT_ANIMATION
} from '@components/Pages/Main/Animation'

import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import {
  Container,
  DragScroll,
  AnimatedScroll,
  Card
} from '@styles/components/Pages/Main/Features'

export function Features() {
  const { ref, inView } = useInView({
    threshold: 0.3
  })

  const AnimationDragScroll = useAnimation()
  const AnimationTitle = useAnimation()

  useEffect(() => {
    if (inView) {
      AnimationDragScroll.start({
        ...MAIN_ANIMATION.visible
      })

      AnimationTitle.start({
        ...MAIN_TEXT_ANIMATION.visible
      })
    }

    if (!inView) {
      AnimationDragScroll.start({
        ...MAIN_ANIMATION.hidden
      })
      AnimationTitle.start({
        ...MAIN_TEXT_ANIMATION.hidden
      })
    }
  }, [inView])

  return (
    <Container ref={ref}>
      <motion.h1 animate={AnimationTitle}>
        Conheça Nossos Diferenciais
      </motion.h1>
      <motion.p animate={AnimationTitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida a
        <br /> leo turpis orci, fames diam lacus, ut.
      </motion.p>

      <DragScroll horizontal>
        <AnimatedScroll animate={AnimationDragScroll}>
          {Object.entries(FEATURES_LIST).map(([key, value]) => (
            <>
              <Card key={key}>
                <span>{value.icon}</span>
                <div>
                  <strong>{key}</strong>
                  <p>{value.description}</p>
                </div>
              </Card>
            </>
          ))}
        </AnimatedScroll>
      </DragScroll>
    </Container>
  )
}
