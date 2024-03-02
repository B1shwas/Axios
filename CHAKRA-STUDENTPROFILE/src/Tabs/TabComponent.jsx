import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import BasicInformation from "./BasicInformation/BasicInformation";
import Remarks from "./Remarks/Remarks";
import FeeHistory from "./FeeHistory/FeeHistory";
import Marks from "./Marks/Marks";

const selectedTabStyles = {
  borderRadius: "0px",
  borderLeftWidth: "4px",
  borderColor: "#E2E8F0",
  borderLeftColor: "#6A75AE",
  borderBottomColor: "white",
};

const TabComponent = () => {
  return (
    <Tabs size="md" variant="enclosed">
      <TabList
        whiteSpace={{ base: "nowrap", sm: "none" }}
      >
        <Tab
          _selected={selectedTabStyles}
          fontSize={{ base: "12px", md: "14px", lg: "16px" }}
          px={{ base: "10px", md: "16px" }}
        >
          Basic Information
        </Tab>
        <Tab
          _selected={selectedTabStyles}
          fontSize={{ base: "12px", md: "14px", lg: "16px" }}
          px={{ base: "10px", md: "16px" }}
        >
          Marks
        </Tab>
        <Tab
          _selected={selectedTabStyles}
          fontSize={{ base: "12px", md: "14px", lg: "16px" }}
          px={{ base: "10px", md: "16px" }}
        >
          Fee History
        </Tab>
        <Tab
          _selected={selectedTabStyles}
          fontSize={{ base: "12px", md: "14px", lg: "16px" }}
          px={{ base: "10px", md: "16px" }}
        >
          Remarks
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <BasicInformation />
        </TabPanel>
        <TabPanel pl={{base:"0px", md:"1rem"}}>
          <Marks />
        </TabPanel>
        <TabPanel>
          <FeeHistory />
        </TabPanel>
        <TabPanel>
          <Remarks />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabComponent;
