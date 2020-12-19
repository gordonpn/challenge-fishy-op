import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function MovieItem({ movie, button }) {
  return (
    <Box align="center" d="flex" flexDirection="column" maxWidth="300px">
      <Flex>
        <Image
          alt={movie.Title}
          borderRadius="md"
          fallbackSrc="https://via.placeholder.com/300x450?text=No+Poster"
          round="lg"
          src={movie.Poster}
          paddingBottom="0.5rem"
        />
      </Flex>
      <Flex flexGrow={1} justifyContent="center">
        <Text align="center" fontSize="1.1rem">
          {movie.Title} ({movie.Year})
        </Text>
      </Flex>
      <Flex justifyContent="center">{button}</Flex>
    </Box>
  );
}
