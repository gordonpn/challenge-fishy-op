import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import MovieItem from "./MovieItem";
import useNominationStore from "../../stores/useNominationStore";
import RemoveButton from "./RemoveButton";

export default function Nominations() {
  const { nominations } = useNominationStore();

  return (
    <>
      <SimpleGrid columns={[1, null, 5]} spacing={10}>
        {Array.from(nominations.values()).map((movie) => (
          <MovieItem
            button={<RemoveButton movie={movie} />}
            key={movie.imdbID}
            movie={movie}
          />
        ))}
      </SimpleGrid>
    </>
  );
}
