import { Stack } from "@chakra-ui/react";
import React from "react";
import UpperDiv from "./components/UpperDiv";
import FeeTab from "./components/FeeTab";

const FeeHistory = () => {
  return (
    <Stack gap="12px">
      <UpperDiv />
      <FeeTab/>
    </Stack>
  );
};

export default FeeHistory;
