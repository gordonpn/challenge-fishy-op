import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import MovieItem from "./MovieItem";
import useNominationStore from "../../stores/useNominationStore";
import RemoveButton from "./RemoveButton";

export default function Nominations() {
  const { nominations } = useNominationStore();

  return (
    <>
      <SimpleGrid minChildWidth="120px" spacing={10}>
        {Array.from(nominations.values()).map((movie) => (
          <MovieItem movie={movie} button={<RemoveButton movie={movie} />} />
        ))}
      </SimpleGrid>
    </>
  );
}
