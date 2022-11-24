import {
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  Modal,
} from "@chakra-ui/react";
import React from "react";

interface IModalProps {
  isOpen: any;
  onClose: any;
}

const Modals: React.FC<IModalProps> = ({ isOpen, onClose }) => {
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
