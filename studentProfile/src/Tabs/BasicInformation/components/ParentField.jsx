import {
  Flex,
  Stack,
  Text,
  Tr,
  Th,
  Td,
  Tbody,
  Thead,
  Table,
  Box,
  Icon,
  Img,
} from "@chakra-ui/react";
import CustomButton from "../../../components/Reusable Button/CustomButton";
import { MdPersonAddAlt1 } from "react-icons/md";
import { IoAdd } from "react-icons/io5";

const ParentField = () => {
  return (
    <Stack gap="12px">
      <Flex justify="space-between" flexDir={{ base: "column", sm: "row" }}>
        <Text fontSize="18px" fontWeight="600" mt="5px">
          Parents
        </Text>
        <Flex gap="16px">
          <CustomButton
            bg="white"
            textColor="#7E8AC7"
            label="Add Parent"
            icon={IoAdd}
            border="1px solid #7E8AC7"
          />
          <CustomButton
            bg="#7E8AC7"
            icon={MdPersonAddAlt1}
            label="Register Parent"
            textColor="white"
            hoverBg="#788ab9"
          />
        </Flex>
      </Flex>
      <Box borderWidth="1px" borderRadius="md" overflow="scroll">
        <Table variant="simple" fontWeight="semibold" fontSize="12px">
          <Thead bg="#f5f5f6">
            <Tr>
              <Th borderBottomWidth="1px" borderRightWidth="1px">
                Parent Name
              </Th>
              <Th borderBottomWidth="1px" borderRightWidth="1px">
                Parent Number
              </Th>
              <Th borderBottomWidth="1px" borderRightWidth="1px">
                Parent PIN
              </Th>
              <Th borderBottomWidth="1px" borderRightWidth="1px">
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td borderBottomWidth="1px" borderRightWidth="1px">
                Leslie Alexander
              </Td>
              <Td borderBottomWidth="1px" borderRightWidth="1px">
                +977-9841123456
              </Td>
              <Td borderBottomWidth="1px" borderRightWidth="1px">
                123456
              </Td>
              <Td borderBottomWidth="1px">
                <Icon
                  as={Img}
                  src="/delete.png"
                  bg="#ED5565"
                  p="6px"
                  boxSize="22px"
                  borderRadius="4px"
                />
              </Td>
            </Tr>
            <Tr>
              <Td borderBottomWidth="1px" borderRightWidth="1px">
                Ronald Richards
              </Td>
              <Td borderBottomWidth="1px" borderRightWidth="1px">
                +977-9841987654
              </Td>
              <Td borderBottomWidth="1px" borderRightWidth="1px">
                872839
              </Td>
              <Td borderBottomWidth="1px">
                <Icon
                  as={Img}
                  src="/delete.png"
                  bg="#ED5565"
                  p="6px"
                  boxSize="22px"
                  borderRadius="4px"
                />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Stack>
  );
};

export default ParentField;
