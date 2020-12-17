import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import styled from "@emotion/styled";

const Title = styled(Heading)`
  font-family: "Bree Serif", serif;
`;

const Hero = () => (
  <Flex
    justifyContent="center"
    paddingBottom={["0.25in", "0.5in"]}
    direction="column"
  >
    <Title align="center">The Shoppies</Title>
    <Title align="center" size="md" paddingTop="0.1in">
      Movies awards for entrepreneurs
    </Title>
  </Flex>
);

export default Hero;
