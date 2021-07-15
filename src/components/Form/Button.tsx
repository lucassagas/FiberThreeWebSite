import { ButtonHTMLAttributes, ReactNode } from 'react'

import { StyledButton } from '@styles/components/Form/Button'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Button({ children, type }: ButtonProps) {
  return <StyledButton type={type || 'button'}>{children}</StyledButton>
}
