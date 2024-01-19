import { Box, Table, Tbody, Th, Thead, Tr, Td } from "@chakra-ui/react";
import { dueData } from "../data";
const DueTab = () => {
  return (
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
            <Th borderBottomWidth="1px" borderRightWidth="1px">
              Remark Type
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {dueData.map((data, index) => {
            return (
              <Tr key={index}>
                <Td borderBottomWidth="1px" borderRightWidth="1px">
                  {data.month}
                </Td>
                <Td borderBottomWidth="1px" borderRightWidth="1px">
                  {data.detail}
                </Td>
                <Td borderBottomWidth="1px" borderRightWidth="1px">
                  {data.amount}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
};

export default DueTab;
