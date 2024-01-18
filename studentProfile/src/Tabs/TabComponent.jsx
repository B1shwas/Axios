import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import BasicInformation from "./BasicInformation/BasicInformation";

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
      <TabList>
        <Tab _selected={selectedTabStyles}>Basic Information</Tab>
        <Tab _selected={selectedTabStyles}>Marks</Tab>
        <Tab _selected={selectedTabStyles}>Fee History</Tab>
        <Tab _selected={selectedTabStyles}>Remarks</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <BasicInformation/>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabComponent;
