import { Box, Button, Flex, Heading, Icon, IconButton } from "@chakra-ui/react";
import React from "react";
import { FaGoogle, FaQuestion } from "react-icons/fa";
import styled from "@emotion/styled";

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
      <IconButton
        _focus={{}}
        colorScheme="teal"
        icon={<FaQuestion />}
        marginRight="1rem"
      />
      <Button
        _focus={{}}
        colorScheme="teal"
        leftIcon={<Icon as={FaGoogle} />}
        variant="solid"
      >
        Log in
      </Button>
    </Flex>
  </Box>
);

export default TopBar;
