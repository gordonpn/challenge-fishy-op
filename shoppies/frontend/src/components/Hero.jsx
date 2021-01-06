import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import styled from "@emotion/styled";

const Title = styled(Heading)`
  font-family: "Nunito", sans-serif;
`;

const Hero = () => (
  <Container centerContent paddingY="3rem">
    <Flex justifyContent="center" direction="column">
      <Title align="center" size="2xl">
        The Shoppies
      </Title>
      <Title align="center" size="lg" paddingTop="1rem">
        Movie awards for entrepreneurs
      </Title>
      <Text align="center" paddingTop="1rem" fontSize="lg">
        This is your chance to nominate{" "}
        <span style={{ fontWeight: "bold" }}>five</span> of your favourite
        movies!
      </Text>
    </Flex>
  </Container>
);

export default Hero;
