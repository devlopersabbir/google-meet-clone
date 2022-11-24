import {
  Button,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BiCalendar, BiLink, BiPlus, BiVideo } from "react-icons/bi";
import { FaKeyboard } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../Layout";
import Modals from "./CreateLink/Modal";
import { v4 as uuid4 } from "uuid";

const Main: React.FunctionComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const createMeet = () => {
    const name = prompt("Enter your name: ");
    localStorage.setItem("name", name!);
    const id = uuid4();

    navigate(`/${id}`);
  };
  return (
    <Layout>
      <Flex
        justify="space-between"
        flexDir={{ base: "column", md: "row" }}
        w="full"
        h="80vh"
        align={"center"}
        gap={5}
        // gap={{ base: 10, sm: 30, md: 50, lg: 80 }}
      >
        <Stack w="" spacing={4} pr={{ base: 10, sm: 30, md: 50, lg: 80 }}>
          <Text
            as="h1"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="bold"
            lineHeight="shorter"
          >
            Premium video meetings. Now free for everyone.
          </Text>
          <Text as="p" fontSize="md" color="gray.300">
            We re-engineered the service we built for secure business meetings,
            Google Meet, to make it free and available for all.
          </Text>
          <Flex gap={3} flexDir={{ base: "column", md: "row" }} align="center">
            <Menu>
              <MenuButton as="div">
                <Button leftIcon={<BiVideo />} fontSize="lg" w="64">
                  New meeting
                </Button>
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Flex gap={4} onClick={onOpen}>
                    <Icon as={BiLink} fontSize="2xl" />
                    <Text>Create meeting for late</Text>
                  </Flex>
                </MenuItem>
                <Modals isOpen={isOpen} onClose={onClose} />
                <MenuItem>
                  <Flex gap={4} onClick={createMeet}>
                    <Icon as={BiPlus} fontSize="2xl" />
                    <Text>Start an instant meeting</Text>
                  </Flex>
                </MenuItem>
                <MenuItem>
                  <Flex gap={4}>
                    <Icon as={BiCalendar} fontSize="2xl" />
                    <Text>Schedule in Google Calendar</Text>
                  </Flex>
                </MenuItem>
              </MenuList>
            </Menu>

            <InputGroup w="full">
              <InputLeftElement
                pointerEvents="none"
                children={<FaKeyboard color="gray.300" />}
              />
              <Input type="email" placeholder="Enter a code or link" />
              <Button ml="2" disabled>
                Join
              </Button>
            </InputGroup>
          </Flex>
        </Stack>
        <Stack align="center" spacing={0}>
          <Image
            src="https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg"
            alt="image"
            // w={{ base: "2xl", md: "2xl", lg: "3xl" }}
            w="full"
            mb={4}
          />
          <Text as="h2" fontWeight="bold" fontSize="lg">
            Get a link you can share
          </Text>
          <Text as="p" textAlign="center" fontWeight="normal" fontSize="sm">
            Click new meeting to get a link you can send to people you want to
            meet with
          </Text>
        </Stack>
      </Flex>
    </Layout>
  );
};

export default Main;
