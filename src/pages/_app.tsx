import { AppProps } from 'next/dist/next-server/lib/router/router'
import { Router } from 'next/router'

import GlobalStyles from '../styles/GlobalStyles'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import React from 'react'
import { AppProvider } from 'src/contexts'
import { Layout } from './_layout/default'

NProgress.configure({
  showSpinner: false
})

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})

Router.events.on('routeChangeError', () => {
  NProgress.done()
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>

      <GlobalStyles />
    </AppProvider>
  )
}

export default MyApp
