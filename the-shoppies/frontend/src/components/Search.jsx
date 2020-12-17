import {
  Box,
  Input,
  SimpleGrid,
  Text,
  Image,
  Container,
  Flex,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import findMovieByName from "../api/findMovieByName";
import useDebounce from "../hooks/useDebounce";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 750);
  const { refetch, isSuccess, isLoading, isError, data, error } = useQuery(
    ["movie", debouncedSearchTerm],
    () => findMovieByName(debouncedSearchTerm),
    { enabled: false }
  );

  const handleNominate = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      refetch();
    }
  }, [debouncedSearchTerm]);

  return (
    <>
      <Container centerContent paddingBottom={["0.25in", "0.5in"]}>
        <Box
          borderWidth="2px"
          boxShadow="md"
          rounded="lg"
          width={["100%", "50vw"]}
        >
          <Input
            _focus={{}}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a movie..."
            size="lg"
            variant="filled"
          />
        </Box>
      </Container>
      <Flex justifyContent="center">
        <Box
          bg="#fdfdfd"
          borderRadius="15px"
          borderWidth="2px"
          padding={10}
          width="95vw"
        >
          <SimpleGrid minChildWidth="120px" spacing={10}>
            {isSuccess &&
              debouncedSearchTerm &&
              data.Search.map((movie) => (
                <Box align="center">
                  <Image
                    borderRadius="md"
                    src={movie.Poster}
                    alt={movie.Title}
                    fallbackSrc="https://via.placeholder.com/150x200?text=No+Poster"
                    round="lg"
                  />
                  <Text align="center">
                    {movie.Title} ({movie.Year})
                  </Text>
                  <Button
                    colorScheme="blue"
                    onClick={handleNominate}
                    value={movie.imdbID}
                    variant="ghost"
                  >
                    Nominate
                  </Button>
                </Box>
              ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </>
  );
};

export default Search;
