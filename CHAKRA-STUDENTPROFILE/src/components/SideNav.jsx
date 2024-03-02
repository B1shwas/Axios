import { Box, Flex, Heading, Img } from "@chakra-ui/react";
import React from "react";

const SideNav = () => {
  return (
    <Box
      minW={{ xl: "260px" }}
      h="100vh"
      background="white"
      boxShadow={{ sm: "none", xl: "lg" }}
    >
      <Flex
        gap={{
          sm: "8px",
          md: "12px",
        }}
        marginTop="27px"
        marginLeft="32px"
        h="28px"
        background="white"
      >
        <Img
          src="/logo.png"
          alt="Logo Image"
          w={{
            lg: "34px",
            md: "30px",
            sm: "28px",
            base: "26px",
          }}
          h={{
            lg: "28px",
            md: "24px",
            sm: "22px",
            base: "20px",
          }}
        />
        <Heading
          as="h1"
          letterSpacing="1px"
          color="#505050"
          fontSize={{
            lg: "24px",
            md: "22px",
            sm: "20px",
            base: "18px",
          }}
          fontFamily="Rubik"
        >
          Axios
        </Heading>
      </Flex>
    </Box>
  );
};

export default SideNav;
