import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const Content = styled(motion.div)`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`

export const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;

  margin-top: 7rem;

  @media (max-width: 600px) {
    flex-direction: column;
    margin-top: 2rem;
  }

  > section {
    width: 100%;

    position: relative;
    display: flex;

    flex-direction: column;

    + section {
      align-items: center;
    }

    > img {
      z-index: 2;
      width: 100%;
      margin-left: 100px;
      margin-top: 20px;
    }

    @media (max-width: 955px) {
      > div {
        width: 80%;
      }
      > img {
        width: 80%;
        margin-left: 60px;
      }
    }

    > span {
      > h1 {
        font-size: 4rem;

        @media (max-width: 600px) {
          margin-top: 2rem;
        }
      }

      > p {
        font-size: 1.2rem;

        margin: ${({ theme }) => theme.spacing.default} 0;
      }

      > button {
        width: 253px;
        margin-top: 10px;
      }
    }
  }
`

export const ImageParallax = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  height: 100%;

  position: relative;

  .laptop {
    width: 100%;
    margin-top: -50px;
    margin-left: 110px;
  }

  .phone {
    width: 40%;
    position: absolute;
    top: 0;
    left: 40%;

    @media (max-width: 1140px) {
      left: 45%;
    }
  }

  @media (max-width: 955px) {
    .laptop {
      margin-top: -20px;
      margin-bottom: -40px;
      margin-left: 50px;
    }
    .phone {
      left: 40%;
    }
  }

  @media (max-width: 700px) {
    .phone {
      left: 45%;
    }
  }

  @media (max-width: 600px) {
    .phone {
      left: 40%;
    }
  }
`

export const Customer = styled.section`
  max-width: 744px;
  width: 100%;

  background: ${({ theme }) => theme.colors.gray900};

  margin: 5rem auto 0 auto;

  padding: ${({ theme }) => theme.spacing.large};

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 16px 16px 15px rgba(0, 0, 0, 0.15);

  > div {
    display: flex;
  }

  @media (max-width: 744px) {
    padding: 2rem;
    max-width: 600px;
  }

  @media (max-width: 600px) {
    max-width: 360px;

    > img {
      width: 130px;
    }
  }
`
