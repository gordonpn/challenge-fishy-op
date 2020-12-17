import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import React from "react";
import Head from "next/head";

import theme from "../src/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>Shopify Challenge 2021</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
