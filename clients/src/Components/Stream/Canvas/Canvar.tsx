import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import Layout from "../../Layout";

const Canvar = () => {
  return (
    <Layout>
      <Flex
        border="2px"
        borderColor="whatsapp.200"
        rounded="lg"
        // w="100%"
        h="80vh"
        mt={8}
        position="relative"
      >
        <Image
          src="https://plus.unsplash.com/premium_photo-1661483653805-3fd784db0cca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="canvar"
          w="full"
          h="full"
          objectFit="cover"
        />
        <Flex
          align="center"
          position="absolute"
          right={0}
          w="64"
          h="40"
          maxW="full"
          maxH="full"
          boxShadow={"2xl"}
          bottom={0}
          border="2px"
          borderColor="blue.400"
          rounded="md"
        >
          <Image
            src="https://images.unsplash.com/photo-1593677193813-e99785037dfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            w="full"
            h="full"
            objectFit="cover"
          />
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Canvar;
