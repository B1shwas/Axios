import { Box, Card } from "@chakra-ui/react";
import React from "react";
import StudentProfile from "./StudentProfile/StudentProfile";

const Description = () => {
  return (
    <Box
      flexGrow="1"
      backgroundColor="#f4f4fd"
      w={{
        xl: "calc(100vw - 260px)",
        lg: "100vw",
        md: "100vw",
        sm: "100vw",
        base: "100vw",
      }}
      overflowX="hidden"
      overflowY="scroll"
      h="calc(100vh - 84px)"
      pr="10px"
    >
      <Card
        maxW="1103px"
        maxH="2000px"
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
