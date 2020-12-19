import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import MovieItem from "./MovieItem";
import NominateButton from "./NominateButton";

export default function Results({ results }) {
  return (
    <>
      <SimpleGrid columns={[1, null, 5]} spacing={10}>
        {results.map((movie) => (
          <MovieItem
            button={<NominateButton movie={movie} />}
            key={movie.imdbID}
            movie={movie}
          />
        ))}
      </SimpleGrid>
    </>
  );
}
