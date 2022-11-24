import { Icon } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

interface IControllProps {
  iconIs: boolean;
  ofIcon: IconType;
  onIcon: IconType;
}
const Controll: React.FC<IControllProps> = ({ iconIs, ofIcon, onIcon }) => {
  return (
    <>
      {iconIs ? (
        <Icon
          as={onIcon}
          fontSize="4xl"
          bg="whiteAlpha.300"
          p="2"
          rounded="full"
          cursor="pointer"
        />
      ) : (
        <Icon
          as={ofIcon}
          fontSize="4xl"
          bg="red"
          p="2"
          rounded="full"
          cursor="pointer"
        />
      )}
    </>
  );
};

export default Controll;
