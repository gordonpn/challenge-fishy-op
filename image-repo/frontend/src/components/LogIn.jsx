import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { FaFacebookSquare, FaGoogle, FaTwitter } from "react-icons/fa";
import React from "react";

export default function LogIn() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button _focus={{}} colorScheme="teal" variant="solid" onClick={onOpen}>
        Log in
      </Button>
      <Modal isCentered isOpen={isOpen} motionPreset="scale" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader align="center">Log in</ModalHeader>
          <ModalCloseButton _focus={{}} />
          <ModalBody
            display="flex"
            justifyContent="center"
            flexDirection="column"
          >
            <Button
              _focus={{}}
              colorScheme="teal"
              variant="solid"
              onClick={onOpen}
              rightIcon={<FaGoogle />}
              marginY="0.5rem"
            >
              Log in with Google
            </Button>
            <Button
              _focus={{}}
              colorScheme="teal"
              variant="solid"
              onClick={onOpen}
              rightIcon={<FaTwitter />}
              marginY="0.5rem"
            >
              Log in with Twitter
            </Button>
            <Button
              _focus={{}}
              colorScheme="teal"
              variant="solid"
              onClick={onOpen}
              rightIcon={<FaFacebookSquare />}
              marginY="0.5rem"
            >
              Log in with Facebook
            </Button>
          </ModalBody>
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
