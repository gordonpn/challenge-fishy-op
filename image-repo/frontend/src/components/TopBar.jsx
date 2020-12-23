import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import styled from "@emotion/styled";
import LogIn from "./LogIn";
import MoreInfo from "./MoreInfo";

const Title = styled(Heading)`
  font-family: "Rubik", sans-serif;
`;

const TopBar = () => (
  <Box
    bg="#fdfdfd"
    boxShadow="lg"
    display="flex"
    flexDirection="row"
    justifyContent="space-between"
    paddingX="3rem"
    paddingY="2rem"
  >
    <Title>Image Repository</Title>
    <Flex>
      <MoreInfo />
      <LogIn />
    </Flex>
  </Box>
);

export default TopBar;
