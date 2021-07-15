import styled from 'styled-components'
import ScrollContainer from 'react-indiana-drag-scroll'
import { motion } from 'framer-motion'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  margin: 7.8rem auto;

  > h1 {
    font-size: 2rem;
    text-align: center;
  }

  > p {
    font-size: 1rem;
    line-height: 1.2rem;
    text-align: center;

    margin-bottom: 5rem;
  }
`

export const DragScroll = styled(ScrollContainer)`
  display: flex;

  margin-left: calc(50% - 380px);

  cursor: grab;

  overflow: auto;

  @media (max-width: 740px) {
    margin-left: 8%;
  }

  @media (max-width: 440px) {
    margin-left: 0;
  }
`

export const AnimatedScroll = styled(motion.div)`
  display: flex;
`

export const Card = styled(motion.div)`
  min-width: 500px;
  max-width: 500px;
  width: 100%;
  cursor: pointer;

  margin-left: 6.5rem;

  position: relative;
  cursor: grab;

  & + div {
    margin-left: 8rem;
  }

  > span {
    width: 7rem;
    height: 7rem;

    border: solid 1px ${({ theme }) => theme.colors.border};

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;

    top: calc(50% - 3.5rem);
    left: -6rem;
    z-index: 2;

    backdrop-filter: blur(11px);

    > svg {
      width: 3.25rem;
      height: 3.25rem;
    }
  }

  > div {
    width: 100%;
    height: 100%;

    background: ${({ theme }) => theme.colors.secondary};

    padding: 2rem;

    > strong {
      font-size: 1.5rem;
    }

    + div {
      margin-left: 2rem;
    }
  }

  @media (max-width: 740px) {
    min-width: 300px;
    max-width: 300px;

    > span {
      width: 5rem;
      height: 5rem;
      top: calc(50% - 2.5rem);
      left: -4rem;

      > svg {
        width: 2.25rem;
        height: 2.25rem;
      }
    }
  }
`
