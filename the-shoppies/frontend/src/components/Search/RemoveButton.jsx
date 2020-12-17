import { Button, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import useNominationStore from "../../stores/useNominationStore";

export default function RemoveButton({ movie }) {
  const [rerender, setRerender] = useState(false);
  const toast = useToast();
  const { deleteNomination, toggleRerender } = useNominationStore();

  const handleRemove = (e, aMovie) => {
    e.preventDefault();
    deleteNomination(aMovie);
    toast({
      description: `${aMovie.Title} removed!`,
      duration: 7000,
      isClosable: true,
      position: "top-right",
      status: "warning",
      title: "Nomination removed",
    });
    setRerender(!rerender);
    toggleRerender();
  };

  return (
    <Button
      _focus={{}}
      colorScheme="red"
      onClick={(e) => handleRemove(e, movie)}
      value={movie}
      variant="solid"
      marginY="10px"
    >
      Remove
    </Button>
  );
}
