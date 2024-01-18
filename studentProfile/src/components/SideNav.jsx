import { Flex, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";

const SideNav = () => {
  return (
    <Flex w="260px" h="100vh" background="white" boxShadow="lg">
      <Flex
        gap="12px"
        marginTop="27px"
        marginLeft="32px"
        h="28px"
        background="white"
      >
        <Img src="/logo.png" alt="Logo Image" w="34px" h="28px" />
        <Heading
          as="h1"
          letterSpacing="1px"
          color="#505050"
          fontSize="24px"
          fontFamily="Rubik"
        >
          Axios
        </Heading>
      </Flex>
    </Flex>
  );
};

export default SideNav;
