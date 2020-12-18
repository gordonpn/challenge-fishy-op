import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import styled from "@emotion/styled";

const Title = styled(Heading)`
  font-family: "Bree Serif", serif;
`;

const Hero = () => (
  <Container centerContent paddingY="3rem">
    <Flex justifyContent="center" direction="column">
      <Title align="center">The Shoppies</Title>
      <Title align="center" size="md" paddingTop="1rem">
        Movie awards for entrepreneurs
      </Title>
      <Text align="center" paddingTop="1rem">
        This is your chance to nominate five of your favourite movies!
      </Text>
    </Flex>
  </Container>
);

export default Hero;
