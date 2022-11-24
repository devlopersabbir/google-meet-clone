import React, { PropsWithChildren } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { BiSend } from "react-icons/bi";

interface IMessageProps {
  open: boolean;
  handleClose: () => void;
}

const Message: React.FC<IMessageProps> = ({ open, handleClose }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Drawer isOpen={open} placement="right" onClose={handleClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader fontWeight="medium">Chat-message</DrawerHeader>

        <DrawerBody>
          <Flex flexDir="column" h="100%">
            <Stack flexGrow={1} overflowY="scroll" spacing={4}>
              <Stack>
                <Flex flexDir="row" gap={3}>
                  <Text as="h2" fontWeight="bold" textTransform="uppercase">
                    you
                  </Text>
                  <Text as="p">09:33 PM</Text>
                </Flex>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni, expedita.
                </Text>
              </Stack>
              <Stack>
                <Flex flexDir="row" gap={3}>
                  <Text as="h2" fontWeight="bold" textTransform="uppercase">
                    you
                  </Text>
                  <Text as="p">09:33 PM</Text>
                </Flex>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni, expedita.
                </Text>
              </Stack>
              <Stack>
                <Flex flexDir="row" gap={3}>
                  <Text as="h2" fontWeight="bold" textTransform="uppercase">
                    you
                  </Text>
                  <Text as="p">09:33 PM</Text>
                </Flex>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni, expedita.
                </Text>
              </Stack>
            </Stack>
            <InputGroup my="3">
              <Input
                rounded="xl"
                variant={"filled"}
                placeholder="Send a message to everyone"
              />
              <InputRightElement>
                <Icon as={BiSend} fontSize="2xl" color="GrayText" />
              </InputRightElement>
            </InputGroup>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Message;
