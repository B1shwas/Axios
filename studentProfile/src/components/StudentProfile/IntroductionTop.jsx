import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { IoArrowBackSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import CustomButton from "../Reusable Button/CustomButton";

const IntroductionTop = () => {
  return (
    <>
      <Flex
        position={{
          xl: "absolute",
          lg: "absolute",
        }}
        w="1071px"
        justify={{
          xl: "center",
          lg: "center",
        }}
        mt="1px"
      >
        <Text fontSize="16px" fontWeight="semibold" mt="5px">
          Student's Profile
        </Text>
      </Flex>
      <Flex justify="space-between">
        <CustomButton
          textColor="#337AB7"
          label="Back"
          icon={IoArrowBackSharp}
          bg="#f1f1f1"
        />
        <Flex gap="16px">
          <CustomButton
            textColor="white"
            label="View Report"
            icon={IoIosEye}
            bg="#f79d3c"
            hoverBg="#E6891F"
          />
          <CustomButton
            textColor="white"
            label="Edit"
            icon={FaEdit}
            bg="#7e8ac7"
            hoverBg="#5C649B"
          />
        </Flex>
      </Flex>
    </>
  );
};

export default IntroductionTop;
