import { dark } from '@styles/themes'
import React, { ReactNode, useState } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  const [theme] = useState<DefaultTheme>(dark)
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
