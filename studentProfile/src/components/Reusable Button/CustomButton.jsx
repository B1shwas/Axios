import { Button, Flex, Icon, Text } from "@chakra-ui/react";

const CustomButton = ({ bg, hoverBg, icon, label, textColor, border }) => {
  return (
    <Button
      py={{ xl: "8px", md: "7px", sm: "5px", base: "4px" }}
      px={{ xl: "20px", md: "18px", sm: "16px", base: "12px" }}
      bg={bg}
      _hover={{
        bg: hoverBg,
      }}
      border={border}
    >
      <Flex gap="8px" color={textColor}>
        <Icon as={icon} mt="2px" />
        <Text fontSize={{ xl: "16px", md: "14px", sm: "12px", base: "10px" }}>
          {label}
        </Text>
      </Flex>
    </Button>
  );
};

export default CustomButton;
