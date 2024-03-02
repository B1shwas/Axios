import {
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { Button, Flex, Icon, Img, Input, Text } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import React from "react";
import SideDrawer from "./SideDrawer";
import { FaSearch } from "react-icons/fa";
import { IoChevronDownCircleOutline } from "react-icons/io5";

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
        w="1103px"
        flexDir={{ base: "column", lg: "row" }}
        justify={{ base: "center", lg: "space-between" }}
      >
        <Flex gap="20px">
          <Icon
            as={GiHamburgerMenu}
            onClick={onOpen}
            display={{
              lg: "block",
              xl: "none",
            }}
            fontSize="20px"
            marginTop={{ lg: "13px" }}
          />
          <SideDrawer onClose={onClose} isOpen={isOpen} />
          <InputGroup h="52px">
            <InputLeftElement
              h={{ base: "30px", sm: "35px", md: "40px", lg: "52px" }}
              pointerEvents="none"
              children={<FaSearch color="#939eaf" />}
            />
            <Input
              w={{
                xl: "434px",
                lg: "390px",
                md: "70vw",
                sm: "70vw",
                base: "70vw",
              }}
              h={{ base: "30px", sm: "35px", md: "40px", lg: "52px" }}
              variant="filled"
              placeholder="Search..."
            />
          </InputGroup>
        </Flex>
        <Flex alignItems="center" gap="14px">
          <Img
            src="/admin1.png"
            alt="Admin"
            mb="10px"
            h={{ lg: "50px", md: "35px", sm: "30px", base: "27px" }}
            display={{ lg: "block", sm: "none" }}
          />
          <Menu>
            <MenuButton>
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
            </MenuButton>
            <MenuList>
              <MenuItem>Support</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TopNav;
