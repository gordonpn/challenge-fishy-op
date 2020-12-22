import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import "../styles/globals.css";
import Head from "next/head";
import theme from "../src/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>Image Repository</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
