import "./App.css";
import { Box, ChakraProvider, Flex, Stack } from "@chakra-ui/react";
import SideNav from "./components/SideNav";
import TopNav from "./components/TopNav";
import Description from "./components/Description";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <Flex>
          <Box
          display={{
            base:"none",
            xl:"block"
          }}>
            <SideNav />
          </Box>
          <Stack gap="0px">
            <TopNav />
            <Description />
          </Stack>
        </Flex>
      </ChakraProvider>
    </>
  );
};

export default App;
