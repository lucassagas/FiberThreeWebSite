import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.primary};
    padding: ${theme.spacing.default};

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

export const AnimationContainer = styled(motion.div)`
  max-width: 1440px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    width: 120px;
    height: 70px;
  }

  > nav {
    display: flex;
    align-items: center;

    > ul {
      list-style: none;
      display: flex;
    }

    > button {
      padding: 0 0.5rem;
      height: 2rem;
    }

    @media (max-width: 800px) {
      display: none;
    }
  }

  > button {
    background: inherit;
    border: 0;
    display: none;

    @media (max-width: 800px) {
      display: block;
    }
  }
`

export const Li = styled.li`
  position: relative;
  padding: 0 ${({ theme }) => theme.spacing.small};

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 3px;
    bottom: -7px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.secondary};
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  + li {
    margin: 0 ${({ theme }) => theme.spacing.large};
  }

  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 800px) {
    padding: ${({ theme }) => theme.spacing.default};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray700};
    + li {
      margin: 0;
    }
  }
`

interface MobileMenuProps {
  isOpen: boolean
}

export const MobileMenu = styled.div<MobileMenuProps>`
  position: fixed;

  width: 100%;
  height: 100%;

  ${({ isOpen }) =>
    isOpen ? 'transform: translateX(0)' : 'transform: translateX(-100%)'};

  transition: transform 0.3s;

  top: 85px;

  > nav {
    width: 100%;
    background: ${({ theme }) => theme.colors.primary};

    > ul {
      list-style: none;
      width: 100%;
    }
  }

  @media (max-width: 800px) {
    display: fixed;
  }
`
