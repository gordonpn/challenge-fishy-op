import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import React from "react";

import theme from "../src/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
