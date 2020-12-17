import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function MovieItem({ movie, button }) {
  return (
    <Box align="center" d="flex" flexDirection="column" maxWidth="300px">
      <Flex>
        <Image
          borderRadius="md"
          src={movie.Poster}
          alt={movie.Title}
          fallbackSrc="https://via.placeholder.com/150x200?text=No+Poster"
          round="lg"
        />
      </Flex>
      <Flex flexGrow={1} justifyContent="center">
        <Text align="center">
          {movie.Title} ({movie.Year})
        </Text>
      </Flex>
      <Flex justifyContent="center">{button}</Flex>
    </Box>
  );
}
