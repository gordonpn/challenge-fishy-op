import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import MovieItem from "./MovieItem";
import NominateButton from "./NominateButton";

export default function Results({ results }) {
  return (
    <>
      <SimpleGrid minChildWidth="120px" spacing={10}>
        {results.map((movie) => (
          <MovieItem movie={movie} button={<NominateButton movie={movie} />} />
        ))}
      </SimpleGrid>
    </>
  );
}
