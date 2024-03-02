import { Flex, Stack } from "@chakra-ui/react";
import InformationField from "./components/InformationField";
import ChartBar from "./components/Chart";
import ParentField from "./components/ParentField";

const BasicInformation = () => {
  return (
    <Stack gap="24px">
      <Flex
        gap="12px"
        flexDir={{ xl: "row", md: "column", sm: "column", base: "column" }}
      >
        <InformationField />
        <ChartBar />
      </Flex>
      <ParentField />
    </Stack>
  );
};

export default BasicInformation;
