import { Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import styled from "@emotion/styled";
import { StyledText } from "./Core/Text";

const Title = styled(Heading)`
  font-family: "Nunito", sans-serif;
  color: #2c313a;
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
      <StyledText align="center" paddingTop="1rem" fontSize="lg">
        This is your chance to nominate <span style={{ fontWeight: "bold" }}>five</span> of your
        favourite movies!
      </StyledText>
    </Flex>
  </Container>
);

export default Hero;
