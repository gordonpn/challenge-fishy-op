import {
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaQuestion } from "react-icons/fa";

export default function MoreInfo() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        _focus={{}}
        colorScheme="teal"
        icon={<FaQuestion />}
        marginRight="1rem"
        onClick={onOpen}
      />
      <Modal isCentered isOpen={isOpen} motionPreset="scale" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader align="center">What is this project?</ModalHeader>
          <ModalCloseButton _focus={{}} />
          <ModalBody>An image repository</ModalBody>
          <ModalFooter>
            <Button onClick={onClose} _focus={{}}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
