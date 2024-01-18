import { Button, Flex, Icon, Text } from "@chakra-ui/react";

const CustomButton = ({ bg, hoverBg, icon, label, textColor, border }) => {
  return (
    <Button
      py="8px"
      px="20px"
      bg={bg}
      _hover={{
        bg: hoverBg,
      }}
      border={border}
    >
      <Flex gap="8px" color={textColor}>
        <Icon as={icon} mt="2px" />
        <Text fontSize="16px">{label}</Text>
      </Flex>
    </Button>
  );
};

export default CustomButton;
