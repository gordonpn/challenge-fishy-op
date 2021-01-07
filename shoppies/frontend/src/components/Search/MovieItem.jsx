import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { StyledText } from "../Core/Text";

export default function MovieItem({ movie, button }) {
  return (
    <Box align="center" d="flex" flexDirection="column" maxWidth="300px">
      <Flex>
        <motion.div whileHover={{ scale: 1.05 }}>
          <a
            href={`https://imdb.com/title/${movie.imdbID}`}
            rel="noreferrer noopener"
            target="_blank"
          >
            <Image
              alt={movie.Title}
              borderRadius="md"
              fallbackSrc="/images/no-poster-300x450.png"
              marginBottom="0.5rem"
              round="lg"
              src={movie.Poster}
            />
          </a>
        </motion.div>
      </Flex>
      <Flex flexGrow={1} justifyContent="center">
        <StyledText align="center" fontSize="1.1rem">
          {movie.Title} ({movie.Year})
        </StyledText>
      </Flex>
      <Flex justifyContent="center">{button}</Flex>
    </Box>
  );
}
