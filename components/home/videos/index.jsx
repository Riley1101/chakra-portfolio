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
  Grid,
  GridItem,
  IconButton,
  AspectRatio,
} from "@chakra-ui/react";
import Image from "next/image";
import { FiPlayCircle } from "react-icons/fi";
const Videos = () => {
  let cardBorder = useColorModeValue("gray.100", "gray.700");
  let cardBg = useColorModeValue("blue.50", "gray.900");
  return (
    <Box p="4" my="8" alignItems={"flex-start"}>
      <VStack alignItems={"flex-start"} spacing=".2em" my="7">
        <Heading as="h2" fontSize={["2xl", "4xl"]}>
          My Latest Videos
        </Heading>
        <Text fontSize={["xl", "3xl"]} fontWeight="bold" color={"gray.500"}>
          I love creating contents about web development.
        </Text>
      </VStack>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
        gap={[4, 7]}
        spacing={3}
        w="full"
        alignItems={"flex-start"}
      >
        {[1, 2, 3].map((ele) => (
          <GridItem key={ele}>
            <VStack
              backgroundColor={cardBg}
              borderRadius={"3em"}
              transition={"all 200ms ease"}
              _hover={{
                borderBottomRadius: "1.5em",
              }}
              alignItems={"flex-start"}
              key={ele}
              cursor={"pointer"}
              w="full"
              spacing="0em"
            >
              <Box position={"relative"} w="full">
                <AspectRatio
                  transition="all 250ms ease"
                  position={"relative"}
                  ratio={16 / 9}
                  maxH={["200px"]}
                  borderRadius={"2em"}
                  overflow="hidden"
                >
                  <Image
                    src="/static/general/thumbnail.png"
                    alt="yt thubmnail"
                    layout="fill"
                    objectFit="cover"
                  ></Image>
                </AspectRatio>
                <Box
                  w="full"
                  top="0"
                  transition="all 250ms ease"
                  borderRadius={"2em"}
                  left="0"
                  h="full"
                  _hover={{
                    backgroundColor: "rgba(0,0,0,0.1)",
                    backdropFilter: "blur(0px)",
                  }}
                  backgroundColor="rgba(0,0,0,0.2)"
                  backdropFilter={"blur(5px)"}
                  position={"absolute"}
                  display="grid"
                  placeItems={"center"}
                >
                  {/* <IconButton
                    aria-label="Search database"
                    backgroundColor="blue.500"
                    rounded="full"
                    icon={<ChevronRightIcon w="8" h="8" />}
                  /> */}
                </Box>
              </Box>
              <Box p="8" pt="6" borderBottomRadius={"3em"}>
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
          rightIcon={<FiPlayCircle />}
          variant="outline"
        >
          More videos
        </Button>
      </Box>
    </Box>
  );
};
export default Videos;
