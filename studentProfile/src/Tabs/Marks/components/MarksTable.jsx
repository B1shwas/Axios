import {
  Flex,
  Select,
  Stack,
  Text,
  Tr,
  Box,
  Table,
  Thead,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { marksData } from "../markData";

const MarksTable = () => {
  return (
    <Stack fontSize="12px">
      <Flex justify="space-between">
        <Text fontSize={{lg:"18px", md:"16px", sm:"14px"}} fontWeight="600" py="6px">
          Subject Wise Marks
        </Text>
        <Select placeholder="Select option" w={{lg:"230px", md:"210px", sm:"200px", base:"190px"}}>
          <option value="option1">First Term</option>
          <option value="option2">Second Term</option>
        </Select>
      </Flex>
      <Box borderWidth="1px" borderRadius="md" overflow="hidden">
        <Table variant="simple">
          <Thead bg="#f5f5f6">
            <Tr>
              <Th borderBottomWidth="1px" borderRightWidth="1px">
                Month
              </Th>
              <Th borderBottomWidth="1px" borderRightWidth="1px">
                Detail
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {marksData.map((data, index) => {
              return (
                <Tr key={index}>
                  <Td borderBottomWidth="1px" borderRightWidth="1px">
                    {data.subject}
                  </Td>
                  <Td borderBottomWidth="1px" borderRightWidth="1px">
                    {data.mark}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
    </Stack>
  );
};

export default MarksTable;
