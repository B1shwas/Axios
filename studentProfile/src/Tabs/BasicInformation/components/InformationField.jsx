import { Flex, Stack, Text } from "@chakra-ui/react";
import { Information } from "../Information";

const InformationField = () => {
  const arr = Information;
  return (
    <Stack gap="12px">
      <Text fontSize="18px" fontWeight="600">
        Basic Information
      </Text>
      <Stack>
        {arr.map((item, index) => {
          return (
            <Flex gap="20px" key={index}>
              <Text w="200px" color="#606b72" fontWeight="600" fontSize="14px">
                {item.title}
              </Text>
              <Text w="400px" fontSize="14px" fontWeight="600">
                {item.info}
              </Text>
            </Flex>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default InformationField;
