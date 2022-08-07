import {
  Grid,
  Box,
  GridItem,
  Text,
  HStack,
  Badge,
  VStack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
const Card = () => {
  const bg = useColorModeValue("#eff2f9", "gray.900");
  return (
    <Flex
      w="full"
      backgroundColor={bg}
      h="full"
      p={[6, 10]}
      justifyContent="flex-end"
    >
      <VStack alignItems={"flex-start"} justifyContent="flex-end">
        <Badge colorScheme="green">React</Badge>
        <Text as="h2" fontSize={"2xl"} fontWeight="bold">
          What are time and space complexities ?
        </Text>
        <Text as="p">
          In this article, we gonna talk a short trip to what Big O really is?
        </Text>
      </VStack>
    </Flex>
  );
};
export default Card;
