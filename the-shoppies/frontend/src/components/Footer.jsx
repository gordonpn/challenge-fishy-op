import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import styled from "@emotion/styled";

const StickyBottom = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const FooterText = styled(Text)`
  font-family: "Bree Serif", serif;
`;

const Footer = () => (
  <StickyBottom>
    <Flex justifyContent="center">
      <FooterText>Gordon Pham-Nguyen &copy; 2020</FooterText>
    </Flex>
  </StickyBottom>
);

export default Footer;
