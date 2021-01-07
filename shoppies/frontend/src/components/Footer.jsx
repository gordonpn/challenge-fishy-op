import { Flex } from "@chakra-ui/react";
import React from "react";
import styled from "@emotion/styled";
import { StyledText } from "./Core/Text";

const StickyBottom = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  width: 100%;
`;

const Footer = () => (
  <StickyBottom>
    <Flex justifyContent="center">
      <StyledText>Gordon Pham-Nguyen &copy; 2020</StyledText>
    </Flex>
  </StickyBottom>
);

export default Footer;
