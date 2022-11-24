import { Container } from "@chakra-ui/react";
import Canvar from "../Components/Stream/Canvas/Canvar";
import Footer from "../Components/Stream/Footer/Footer";
import SocketContextComponent from "../Context/Socket/Component";

const Stream = () => {
  return (
    <Container
      w="full"
      maxW="full"
      mx="auto"
      px="5"
      py="3"
      h="100vh"
      position="relative"
    >
      <SocketContextComponent>
        <Canvar />
        <Footer />
      </SocketContextComponent>
    </Container>
  );
};

export default Stream;
