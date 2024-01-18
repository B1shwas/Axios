import { Box, Card } from "@chakra-ui/react";
import React from "react";
import StudentProfile from "./StudentProfile/StudentProfile";

const Description = () => {
  return (
    <Box
      flexGrow="1"
      backgroundColor="#f4f4fd"
      overflowY="scroll"
      h="calc(100vh - 84px)"
    >
      <Card
        maxW="1103px"
        maxH="1102px"
        marginLeft="34px"
        marginTop="32px"
        marginBottom="46px"
        p="16px"
      >
        <StudentProfile />
      </Card>
    </Box>
  );
};

export default Description;
