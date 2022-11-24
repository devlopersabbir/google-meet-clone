import { Container } from "@chakra-ui/react";
import React from "react";

interface ILayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <Container w="1280px" maxW="full" px={{ base: "3", md: "6" }} mx="auto">
      <main style={{ width: "100%", height: "100%" }}>{children}</main>
    </Container>
  );
};

export default Layout;
