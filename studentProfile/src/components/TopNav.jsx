import { useDisclosure } from "@chakra-ui/react";
import {
  Button,
  Flex,
  Icon,
  Img,
  Input,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverTrigger,
  Portal,
  Text,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import React from "react";
import SideDrawer from "./SideDrawer";

const TopNav = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex
      h={{ lg: "84px", md: "120px" }}
      w={{
        xl: "calc(100vw - 260px)",
        lg: "100vw",
        md: "100vw",
        sm: "100vw",
        base: "100vw",
      }}
    >
      <Flex
        marginTop="16px"
        marginLeft="34px"
        justifyContent={{ lg: "space-between", md: "center" }}
        w="1103px"
        gap="10px"
        flexDir={{ lg: "row", sm: "column" }}
      >
        <Icon
          as={GiHamburgerMenu}
          onClick={onOpen}
          display={{
            lg: "block",
            xl: "none",
          }}
          fontSize="20px"
          marginTop={{ lg: "10px" }}
        />
        <SideDrawer onClose={onClose} isOpen={isOpen} />
        <Input
          w={{ xl: "434px", lg: "390px", md: "70vw", sm: "70vw", base: "70vw" }}
          h="52px"
          variant="filled"
          placeholder="Search..."
        />
        <Flex alignItems="center" gap="14px">
          <Img
            src="/admin1.png"
            alt="Admin"
            mb="10px"
            h={{ lg: "50px", md: "35px", sm: "30px", base: "27px" }}
            display={{ lg: "block", sm: "none" }}
          />
          <Popover>
            <PopoverTrigger>
              <Flex alignItems="center" gap="8px">
                <Text
                  letterSpacing="2px"
                  cursor="pointer"
                  fontSize="18px"
                  userSelect="none"
                  fontFamily="Jost"
                >
                  Admin
                </Text>
                <Icon as={MdOutlineKeyboardArrowDown} />
              </Flex>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverFooter d="flex" justifyContent="flex-end">
                  <Button variant="outline">Logout</Button>
                </PopoverFooter>
              </PopoverContent>
            </Portal>
          </Popover>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TopNav;
