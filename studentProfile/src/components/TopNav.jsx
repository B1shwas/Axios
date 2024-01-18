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
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import React from "react";

const TopNav = () => {
  return (
    <Flex h="84px" w="1180px">
      <Flex
        marginTop="16px"
        marginLeft="34px"
        justify="space-between"
        w="1103px"
        h="54px"
      >
        <Input w="434px" h="52px" variant="filled" placeholder="Search..." />
        <Flex alignItems="center" gap="14px">
          <Img src="/admin1.png" alt="Admin" />
          <Popover>
            <PopoverTrigger>
              <Flex alignItems="center" gap="8px">
                <Text letterSpacing="2px" cursor="pointer" fontSize="18px" userSelect="none" fontFamily="Jost">
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
                  <Button variant="outline">
                    Logout
                  </Button>
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
