import { Flex, Stack } from "@chakra-ui/react";
import IntroductionTop from "./IntroductionTop";
import StudentImageDiv from "./StudentImageDiv";
import AttendenceCard from "./AttendenceCard";
import TabComponent from "../../Tabs/TabComponent";
const Introduction = () => {
  return (
    <>
      <Stack gap="24px">
        <Stack gap="16px">
          <IntroductionTop />
          <Flex justify="space-between">
            <StudentImageDiv />
            <AttendenceCard />
          </Flex>
        </Stack>
        <TabComponent />
      </Stack>
    </>
  );
};

export default Introduction;
