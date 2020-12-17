import { Button, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import useNominationStore from "../../stores/useNominationStore";

export default function NominateButton({ movie }) {
  const [rerender, setRerender] = useState(false);
  const toast = useToast();
  const { nominations, addNomination, toggleRerender } = useNominationStore();

  const handleNominate = (e, aMovie) => {
    e.preventDefault();
    addNomination(aMovie);
    toast({
      description: `${aMovie.Title} nominated!`,
      duration: 7000,
      isClosable: true,
      position: "top-right",
      status: "success",
      title: "New nomination made",
    });
    setRerender(!rerender);
    toggleRerender();
  };

  return (
    <Button
      _focus={{}}
      colorScheme="blue"
      isDisabled={nominations.has(movie.imdbID) || nominations.size >= 5}
      onClick={(e) => handleNominate(e, movie)}
      value={movie}
      variant="solid"
      marginY="10px"
    >
      Nominate
    </Button>
  );
}
