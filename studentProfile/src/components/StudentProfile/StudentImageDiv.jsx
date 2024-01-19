import { Flex, Text, Img, Stack, Icon } from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";

const StudentImageDiv = () => {
  return (
    <Flex gap="16px">
      <Img src="/studentImg.png" alt="Student Image" my="8px" />
      <Stack gap="8px" my="25px">
        <Stack gap="4px">
          <Text fontFamily="Nunito Sans" fontSize="24px" fontWeight="bold">
            Kriti Tamang
          </Text>
          <Text fontSize="16px" fontWeight="lg">
            Three ‘A’
          </Text>
        </Stack>
        <Flex gap="8px" alignItems="center">
          <Icon as={FaLocationDot} color="#999999" />
          <Text color="#666666" whiteSpace="nowrap" fontSize={{md:"16px", sm:"14px", base:"12px"}}>Banepa-8, Tindobato, Kavrepalanchowk</Text>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default StudentImageDiv;
