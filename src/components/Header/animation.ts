import { DEFAULT_TRANSITION } from 'src/constants'

export const HEADER_ANIMATION = {
  hidden: {
    opacity: 0,
    y: -100,
    transition: DEFAULT_TRANSITION,
    mass: 0.1
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: DEFAULT_TRANSITION,
    mass: 0.1
  }
}
