import {
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";

const Background = styled.div`
  background-color: #fbf5f4;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
`;

const Title = styled(Heading)`
  font-family: "Nunito", sans-serif;
  color: #2c313a;
`;

const Footer = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const FooterText = styled(Text)`
  font-family: "Nunito", sans-serif;
  color: #2c313a;
`;

const Index = () => (
  <Background>
    <Container centerContent paddingTop={["0.5in", "1.5in"]}>
      <Flex justifyContent="center" paddingBottom={["0.25in", "0.5in"]}>
        <Title align="center">Gordon&apos;s Shopify Challenge Response</Title>
      </Flex>
      <Flex>
        <Stack spacing={4} direction={["column", "row"]} align="center">
          <Popover autoFocus={false}>
            <PopoverTrigger>
              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="navy"
                size="lg"
                _focus={{}}
              >
                Image Repository
              </Button>
            </PopoverTrigger>
            <PopoverContent _focus={{}}>
              <PopoverArrow />
              <PopoverBody>Available soon!</PopoverBody>
            </PopoverContent>
          </Popover>
          <Link href="/shoppies" textDecoration="none !important">
            <Button
              _focus={{}}
              colorScheme="navy"
              rightIcon={<ArrowForwardIcon />}
              size="lg"
            >
              The Shoppies
            </Button>
          </Link>
        </Stack>
      </Flex>
      <Footer>
        <Flex justifyContent="center">
          <FooterText>Gordon Pham-Nguyen &copy; 2020</FooterText>
        </Flex>
      </Footer>
    </Container>
  </Background>
);

export default Index;
