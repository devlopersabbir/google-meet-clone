import React from "react";
import {
  Flex,
  Image,
  Text,
  HStack,
  Container,
  Popover,
  PopoverTrigger,
  Icon,
  PopoverContent,
  PopoverArrow,
  VStack,
  useDisclosure,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Portal,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
} from "@chakra-ui/react";
import { AiOutlineQuestionCircle, AiOutlineSetting } from "react-icons/ai";
import { BiCommentError } from "react-icons/bi";
import Modals from "../Topbar/SettingModal/Modal";

const Topbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container w="full" maxW="full" mx="auto" px="5" py="3">
      <Flex justify="space-between">
        <HStack spacing={2}>
          <Image src="https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png" />
          <Text as="h1" textTransform="capitalize">
            meet
          </Text>
        </HStack>
        <HStack spacing={8}>
          <Flex gap={5} align="center">
            <Text>11:14 AM - Mon, Nov 21</Text>
            <Popover>
              <PopoverTrigger>
                <Icon as={AiOutlineQuestionCircle} fontSize="2xl" />
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>Header</PopoverHeader>
                  <PopoverCloseButton />
                  <PopoverBody>
                    <Button colorScheme="blue">Button</Button>
                  </PopoverBody>
                  <PopoverFooter>This is the footer</PopoverFooter>
                </PopoverContent>
              </Portal>
            </Popover>
            <Icon as={BiCommentError} fontSize="2xl" />
            <Icon as={AiOutlineSetting} fontSize="2xl" onClick={onOpen} />
            <Modals isOpen={isOpen} onClose={onClose} />
          </Flex>
          <Menu>
            <MenuButton as="div">
              <Avatar src="" aria-label="avater" />
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Topbar;
