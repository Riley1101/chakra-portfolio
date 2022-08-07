import {
  IconButton,
  Box,
  Text,
  Badge,
  VStack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiPlayCircle } from "react-icons/fi";
const Video = () => {
  const bg = useColorModeValue("#eff2f9", "gray.900");
  const text = useColorModeValue("#eff2f9", "#eff2f9");
  return (
    <Flex
      w="full"
      backgroundColor={bg}
      h="full"
      p={[6, 10]}
      justifyContent="flex-end"
      position={"relative"}
      backgroundImage={'url("/static/general/background.jpg")'}
      backgroundSize="cover"
    >
      <Box
        w="full"
        h="full"
        position={"absolute"}
        bg="rgba(0,0,0,0.5)"
        top={0}
        left={0}
      ></Box>

      <VStack
        alignItems={"flex-start"}
        justifyContent="flex-end"
        zIndex={10}
        color={text}
      >
        <Badge colorScheme="green">React</Badge>
        <Text as="h2" fontSize={"2xl"} fontWeight="bold">
          What are time and space complexities ?
        </Text>
        <Text as="p">
          In this article, we gonna talk a short trip to what Big O really is?
        </Text>
      </VStack>
      <IconButton
        transition={"all 250ms ease"}
        position={"absolute"}
        top="3em"
        right="3em"
        aria-label="Search database"
        borderRadius={"1em"}
        _hover={{
          borderRadius: ".5em",
        }}
        zIndex="12"
        icon={<FiPlayCircle size={"20"} />}
      />
    </Flex>
  );
};
export default Video;
