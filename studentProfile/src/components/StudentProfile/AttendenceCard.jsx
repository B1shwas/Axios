import {
  Card,
  Divider,
  Flex,
  Stack,
  Switch,
  Tag,
  Text,
} from "@chakra-ui/react";

const AttendenceCard = () => {
  return (
    <Card variant="outline" borderWidth="1px" px="16px" py="12px">
      <Stack>
        <Flex gap="12px">
          <Text fontSize="16px" fontWeight="xl">
            Student’s Status
          </Text>
          <Tag
            color="white"
            bg="#7E8AC7"
            fontSize="10px"
            borderRadius="5px
          "
            letterSpacing="1px"
          >
            TODAY
          </Tag>
        </Flex>
        <Divider w="300px" borderWidth="1px" color="#D9D9D9" my="12px" />
        <Stack>
          <Text
            letterSpacing="1px"
            fontSize="12px"
            fontWeight="600"
            color="#333333"
          >
            Attendence
          </Text>
          <Flex gap="12px" fontSize="20px" fontWeight="600">
            <Text>Present</Text>
            <Switch size="lg" colorScheme="red" />
            <Text>Absent</Text>
          </Flex>
        </Stack>
      </Stack>
    </Card>
  );
};

export default AttendenceCard;
