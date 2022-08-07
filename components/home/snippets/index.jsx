import {
  Box,
  Heading,
  Stack,
  Show,
  VStack,
  Text,
  HStack,
  IconButton,
  useColorModeValue,
  Button,
  Link,
  Grid,
  GridItem,
  AspectRatio,
} from "@chakra-ui/react";
import Image from "next/image";
import { FiTerminal } from "react-icons/fi";
import { HiOutlineCode } from "react-icons/hi";
const Snippets = () => {
  let cardBg = useColorModeValue("blue.50", "gray.900");
  return (
    <Box p="4" alignItems={"flex-start"} my="8">
      <VStack alignItems={"flex-start"} spacing=".2em" my="7">
        <Heading as="h2" fontSize={["2xl", "4xl"]}>
          Code Snippets
        </Heading>
        <Text fontSize={["xl", "3xl"]} fontWeight="bold" color={"gray.500"}>
          Some of the snippets I stumble along my journey
        </Text>
      </VStack>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
        gap={[2, 7]}
        spacing={3}
        w="full"
        alignItems={"flex-start"}
      >
        {[1, 2, 3, 4, 5, 6].map((ele) => (
          <GridItem key={ele}>
            <VStack
              borderRadius={"3em"}
              backgroundColor={cardBg}
              transition={"all 200ms ease"}
              _hover={{
                borderRadius: "1.5em",
              }}
              alignItems={"flex-start"}
              key={ele}
              cursor={"pointer"}
              w="full"
              spacing="0em"
            >
              <Box p="8" borderBottomRadius={"3em"}>
                <IconButton
                  background={useColorModeValue("#fff", "gray.800")}
                  mb="2"
                  rounded={"1.3rem"}
                  aria-label="Code"
                  icon={<FiTerminal />}
                />
                <Text as="h2" fontSize={"xl"} fontWeight="bold">
                  Next.js In 2022 !
                </Text>
                <Text as="p" color={"gray.500"}>
                  How to create a new Next JS app, install and setup Chakra UI.
                </Text>
              </Box>
            </VStack>
          </GridItem>
        ))}
      </Grid>
      <Box w="full" mt="7" display={"flex"} justifyContent="flex-end">
        <Button
          transition={"all 250ms ease"}
          rounded={"1em"}
          _hover={{
            rounded: ".5em",
          }}
          textAlign={"right"}
          rightIcon={<HiOutlineCode />}
          variant="outline"
        >
          More codes
        </Button>
      </Box>
    </Box>
  );
};
export default Snippets;
