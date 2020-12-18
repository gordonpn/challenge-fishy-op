import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import styled from "@emotion/styled";

const Title = styled(Heading)`
  font-family: "Bree Serif", serif;
`;

const Hero = () => (
  <Container centerContent paddingY="1rem">
    <Flex justifyContent="center" direction="column">
      <Title align="center">The Shoppies</Title>
      <Title align="center" size="md" paddingTop="0.1in">
        Movie awards for entrepreneurs
      </Title>
      <Text align="center" paddingTop="0.1in">
        This is your chance to nominate five of your favourite movies!
      </Text>
    </Flex>
  </Container>
);

export default Hero;
