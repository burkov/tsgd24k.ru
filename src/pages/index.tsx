import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/500.css'
import '@fontsource/open-sans/700.css'

import { Button, ChakraProvider, Container, Heading } from '@chakra-ui/react'
import * as React from 'react'
// @ts-ignore
import * as styles from './index.module.css';
import { extendTheme } from '@chakra-ui/react'
import NavBar from '../components/navbar';
import Footer from '../components/footer';

const theme = extendTheme({
  colors: {
    primary: "cyan"
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Open Sans', sans-serif`
  },
})


const IndexPage = () => {
  return (
      <ChakraProvider theme={theme}>
        <nav className={styles.nav}>
          <NavBar/>
        </nav>
        <main>
          <Container>
          </Container>
        </main>
        <Footer/>
      </ChakraProvider>
  )
}

export default IndexPage
