import {
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  BiComment,
  BiInfoCircle,
  BiMicrophone,
  BiMicrophoneOff,
  BiVideo,
  BiVideoOff,
} from "react-icons/bi";
import { FaInfo } from "react-icons/fa";
import {
  MdCallEnd,
  MdPeople,
  MdScreenShare,
  MdSecurity,
  MdStopScreenShare,
} from "react-icons/md";
import Controll from "./Controll/Controll";
import Message from "../../Message/Message";

const Footer: React.FC = () => {
  const [mic, setMic] = useState(false);
  const [video, setVideo] = useState(true);
  const [screen, setScreen] = useState(false);
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Flex
        justify={{ base: "center", md: "space-between" }}
        flexDir="row"
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        py="3"
        px="5"
      >
        <HStack display={{ base: "none", md: "unset" }}>
          <Text>05: 17</Text>
          <Text> - bcv-mgha-yky</Text>
        </HStack>
        <HStack spacing={4}>
          <Controll
            iconIs={true}
            onIcon={BiMicrophone}
            ofIcon={BiMicrophoneOff}
          />
          <Controll iconIs={false} onIcon={BiVideo} ofIcon={BiVideoOff} />
          <Controll
            iconIs={false}
            onIcon={MdScreenShare}
            ofIcon={MdStopScreenShare}
          />
          <Button type="button" bg="red" p="2" rounded="full" cursor="pointer">
            <Icon as={MdCallEnd} fontSize="3xl" />
          </Button>
        </HStack>
        <HStack spacing={4} display={{ base: "none", md: "unset" }}>
          <Icon
            as={BiInfoCircle}
            fontSize="2xl"
            cursor="pointer"
            _hover={{ color: "blue.200" }}
          />
          <Icon
            as={MdPeople}
            fontSize="2xl"
            cursor="pointer"
            _hover={{ color: "blue.200" }}
          />
          <Icon
            onClick={() => setOpen(true)}
            as={BiComment}
            fontSize="2xl"
            cursor="pointer"
            _hover={{ color: "blue.200" }}
          />
          <Icon
            as={MdSecurity}
            fontSize="2xl"
            cursor="pointer"
            _hover={{ color: "blue.200" }}
          />
        </HStack>
      </Flex>
      <Message handleClose={handleClose} open={open} />
    </>
  );
};

export default Footer;
