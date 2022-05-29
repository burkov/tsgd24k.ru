import React, { FC, ReactNode } from "react";
import NavBar from "./navbar";
import {
  ChakraProvider,
  Container,
  extendTheme,
  Heading,
} from "@chakra-ui/react";
import Footer from "./footer";
//@ts-ignore
import * as styles from "./index.module.css";

import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/700.css";
import { Helmet } from "react-helmet";

const theme = extendTheme({
  colors: {
    primary: "cyan",
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
});

const Layout: FC<{ children?: ReactNode; heading: string }> = ({
  children,
  heading,
}) => {
  return (
    <ChakraProvider theme={theme}>
      <Helmet title={heading} defer={false} />
      <nav className={styles.nav}>
        <NavBar />
      </nav>
      <main>
        <Container maxW="8xl">
          <Heading style={{ marginBottom: "24px", marginTop: "12px" }}>
            {heading}
          </Heading>
          <>{children}</>
        </Container>
      </main>
      <Footer />
    </ChakraProvider>
  );
};

export default Layout;
