
import { remarkData } from "../RemarkData";
import { Box, Table, Tag, Tbody, Th, Thead, Tr, Td } from "@chakra-ui/react";

const RemarksTable = () => {
  return (
    <Box borderWidth="1px" borderRadius="md" overflow="hidden">
      <Table variant="simple">
        <Thead bg="#f5f5f6">
          <Tr>
            <Th borderBottomWidth="1px" borderRightWidth="1px">
              Teacher Name
            </Th>
            <Th borderBottomWidth="1px" borderRightWidth="1px">
              Remarks
            </Th>
            <Th borderBottomWidth="1px" borderRightWidth="1px">
              Remark Type
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {remarkData.map((remark, index) => {
            return (
              <Tr key={index}>
                <Td borderBottomWidth="1px" borderRightWidth="1px">
                  {remark.name}
                </Td>
                <Td borderBottomWidth="1px" borderRightWidth="1px">
                  {remark.remark}
                </Td>
                <Td borderBottomWidth="1px" borderRightWidth="1px">
                  <Tag
                    px="12px"
                    py="4px"
                    fontSize="12px"
                    color="#006B56"
                    fontWeight="bold"
                    bg="#b9e8de"
                  >
                    {remark.type}
                  </Tag>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
};

export default RemarksTable;
