import {
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Tooltip,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";

const Background = styled.div`
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%23008080' fill-opacity='0.14'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  height: 100vh;
`;

const Title = styled(Heading)`
  font-family: "Bree Serif", serif;
`;

const Index = () => (
  <Background>
    <Container centerContent paddingTop={["0.5in", "1.5in"]}>
      <Flex justifyContent="center" paddingBottom={["0.25in", "0.5in"]}>
        <Title align="center">Gordon&apos;s Shopify Challenge Response</Title>
      </Flex>
      <Flex>
        <Stack spacing={4} direction="row" align="center">
          <Tooltip
            hasArrow
            shouldWrapChildren
            label="Available soon!"
            placement="top"
          >
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="teal"
              size="lg"
            >
              Image Repository
            </Button>
          </Tooltip>
          <Tooltip
            hasArrow
            shouldWrapChildren
            label="Available soon!"
            placement="top"
          >
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="teal"
              size="lg"
            >
              The Shoppies
            </Button>
          </Tooltip>
        </Stack>
      </Flex>
    </Container>
  </Background>
);

export default Index;
