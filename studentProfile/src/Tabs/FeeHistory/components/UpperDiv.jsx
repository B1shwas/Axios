import { Card, Divider, Flex, Text } from "@chakra-ui/react";

const UpperDiv = () => {
  return (
    <Flex
      justify="space-between"
      flexWrap={{ md: "wrap", sm: "wrap", base: "wrap" }}
    >
      <Text fontSize="18px" fontWeight="600" py="8px">
        Fee History
      </Text>
      <Card px="16px" py="8px" bg="#F5F5F5">
        <Flex gap="24px">
          <Flex fontSize="12px" fontWeight="semibold" gap="8px">
            <Text color="#333333" letterSpacing="1.5px" lineHeight="24px">
              DUE AMOUNT:
            </Text>
            <Text fontSize="16px" color="#EA5455">
              Rs.3000
            </Text>
          </Flex>
          <Divider orientation="vertical" borderWidth="1px" />
          <Flex fontSize="12px" fontWeight="semibold" gap="8px">
            <Text color="#333333" letterSpacing="1.5px" lineHeight="24px">
              ADVANCED:
            </Text>
            <Text fontSize="16px" color="black">
              Rs.0
            </Text>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};

export default UpperDiv;
