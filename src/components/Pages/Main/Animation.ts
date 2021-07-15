export const MAIN_ANIMATION = {
  hidden: {
    opacity: 0,
    x: '100vw',
    transition: { type: 'spring', bounce: 0 }
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', bounce: 0 }
  }
}

export const MAIN_TEXT_ANIMATION = {
  hidden: {
    opacity: 0,
    y: 300
  },

  visible: {
    opacity: 1,
    y: 0
  }
}
