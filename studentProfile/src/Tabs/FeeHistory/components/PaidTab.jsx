import { Box, Table, Tbody, Th, Thead, Tr, Td } from "@chakra-ui/react";
import { paidData } from "../data";
const PaidTab = () => {
  return (
    <Box borderWidth="1px" borderRadius="md" overflow="scroll">
      <Table variant="simple" fontSize="12px" fontWeight="semibold">
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
          {paidData.map((data, index) => {
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

export default PaidTab;
