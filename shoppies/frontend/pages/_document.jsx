import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import React from "react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link href="http://fonts.cdnfonts.com/css/nunito" rel="stylesheet" />
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
