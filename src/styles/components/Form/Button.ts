import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    border: 0;

    padding: 0.5rem;

    text-transform: capitalize;

    &:hover {
      background: ${theme.colors.tertiary};
    }
  `}
`
