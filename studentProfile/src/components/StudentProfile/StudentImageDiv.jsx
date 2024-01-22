import { Flex, Text, Img, Stack, Icon } from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";

const StudentImageDiv = () => {
  return (
    <Flex
      gap={{ base: "0px", sm: "24px" }}
      flexDir={{ base: "column", md: "row" }}
      margin={{base: "0 auto", md:"0px"}}
    >
      <Img
        src="/studentImg.png"
        alt="Student Image"
        my="8px"
        h={{ base: "90px", md: "100px", xl: "124px" }}
        w={{ base: "90px", md: "100px", xl: "124px" }}
        margin={{base:"0 auto", md:"none"}}
      />
      <Stack gap="8px" my={{ base: "10px",md:"0px", lg:"0px", xl:"25px" }}>
        <Stack gap="4px" textAlign={{base:"center", md:"left"}}>
          <Text fontFamily="Nunito Sans" fontSize="24px" fontWeight="bold">
            Kriti Tamang
          </Text>
          <Text fontSize="16px" fontWeight="lg">
            Three ‘A’
          </Text>
        </Stack>
        <Flex gap="8px" alignItems="center">
          <Icon as={FaLocationDot} color="#999999" />
          <Text
            color="#666666"
            whiteSpace={{ base: "normal", md: "nowrap" }}
            fontSize={{ md: "16px", sm: "14px", base: "12px" }}
          >
            Banepa-8, Tindobato, Kavrepalanchowk
          </Text>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default StudentImageDiv;
