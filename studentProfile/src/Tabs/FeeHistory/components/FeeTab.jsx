import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import DueTab from "./DueTab";
import PaidTab from "./PaidTab"; 

const FeeTab = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Due</Tab>
        <Tab>Paid</Tab>
      </TabList>

      <TabPanels>
        <TabPanel pl={{ base: "0px", md: "1rem" }}>
          <DueTab />
        </TabPanel>
        <TabPanel pl={{ base: "0px", md: "1rem" }}>
          <PaidTab />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default FeeTab;
