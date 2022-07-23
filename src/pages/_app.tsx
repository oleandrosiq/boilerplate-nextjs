// External Libraries
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

// Styles
import { defaultTheme } from '../styles/themes/default'
import { GlobalStyles } from '../styles/GlobalStyle'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}