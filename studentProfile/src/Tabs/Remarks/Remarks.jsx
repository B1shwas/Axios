import { Stack, Text } from "@chakra-ui/react";
import RemarksTable from "./components/RemarksTable";

const Remarks = () => {
  return (
    <Stack gap="12px">
      <Text fontSize="18px" fontWeight="600">
        Remarks
      </Text>
      <RemarksTable/>
    </Stack>
  );
};

export default Remarks;
