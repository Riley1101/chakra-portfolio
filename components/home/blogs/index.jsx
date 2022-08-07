import {
  Box,
  Heading,
  Stack,
  Show,
  VStack,
  Text,
  HStack,
  useColorModeValue,
  Button,
  Link,
} from "@chakra-ui/react";
import { FaRegNewspaper } from "react-icons/fa";

import { ArrowForwardIcon } from "@chakra-ui/icons";
const Blogs = () => {
  let cardBg = useColorModeValue("blue.50", "gray.900");
  return (
    <Box p="4" my={["1.5em"]} alignItems={"flex-start"}>
      <VStack alignItems={"flex-start"} spacing=".2em" my="8">
        <Heading as="h2" fontSize={["2xl", "4xl"]}>
          My Articles.
        </Heading>
        <Text fontSize={["xl", "3xl"]} fontWeight="bold" color={"gray.500"}>
          Web development, with a focus on the React ecosystem.
        </Text>
      </VStack>
      <VStack spacing={7} w="full" alignItems={"flex-start"}>
        {[1, 2, 3].map((ele) => (
          <VStack
            transition={"all 250ms ease"}
            _hover={{
              borderRadius: "1.5em",
            }}
            alignItems={"flex-start"}
            key={ele}
            bg={cardBg}
            cursor={"pointer"}
            w="full"
            p="8"
            px="9"
            borderRadius={"3em"}
            spacing=".3em"
          >
            <Text fontSize="xl" fontWeight="semibold">
              Creating An Alert System In React
            </Text>
            <HStack fontSize={"sm"} color="gray.500">
              <Text>5 min read</Text>
              <Text>-</Text>
              <Text>Jun 12 2022</Text>
            </HStack>
            <Text>How to create a reuseable alert system with React ?</Text>
          </VStack>
        ))}
      </VStack>
      <Box w="full" mt="7" display={"flex"} justifyContent="flex-end">
        <Button
          transition={"all 250ms ease"}
          rounded={"1em"}
          _hover={{
            rounded: ".5em",
          }}
          textAlign={"right"}
          rightIcon={<FaRegNewspaper />}
          variant="outline"
        >
          More articles
        </Button>
      </Box>
    </Box>
  );
};
export default Blogs;
