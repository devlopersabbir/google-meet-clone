import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface IModalsProps {
  isOpen: any;
  onClose: any;
}

const Modals: React.FC<IModalsProps> = ({ onClose, isOpen }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
            tempore.
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Modals;
