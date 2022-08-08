import {
  Grid,
  Box,
  Heading,
  GridItem,
  VStack,
  Button,
  Text,
} from "@chakra-ui/react";
import VideoCard from "@/components/common/video";
import { RiVideoLine } from "react-icons/ri";

const Videos = () => {
  return (
    <Box my="8">
      <VStack alignItems={"flex-start"} spacing=".2em" my="7">
        <Heading as="h2" fontSize={["2xl", "4xl"]}>
          Videos.
        </Heading>
        <Text fontSize={["xl", "3xl"]} fontWeight="bold" color={"gray.500"}>
          Record, talk and have fun.
        </Text>
      </VStack>
      <Grid templateColumns={["1fr", "repeat(6, 1fr)"]} gap={4}>
        <GridItem
          colSpan={[1, 3]}
          w="100%"
          minH={["auto", "320px"]}
          overflow="hidden"
          borderRadius={"3em"}
          cursor="pointer"
          transition={"all 250ms ease"}
          _hover={{
            borderRadius: "1.5em",
          }}
        >
          <VideoCard />
        </GridItem>
        <GridItem
          colSpan={[1, 3]}
          w="100%"
          minH={["auto", "320px"]}
          overflow="hidden"
          borderRadius={"3em"}
          cursor="pointer"
          transition={"all 250ms ease"}
          _hover={{
            borderRadius: "1.5em",
          }}
        >
          <VideoCard />
        </GridItem>
        <GridItem
          colSpan={[1, 2]}
          w="100%"
          minH={["auto", "320px"]}
          overflow="hidden"
          borderRadius={"3em"}
          cursor="pointer"
          transition={"all 250ms ease"}
          _hover={{
            borderRadius: "1.5em",
          }}
        >
          <VideoCard />
        </GridItem>
        <GridItem
          colSpan={[1, 2]}
          w="100%"
          minH={["auto", "320px"]}
          overflow="hidden"
          borderRadius={"3em"}
          cursor="pointer"
          transition={"all 250ms ease"}
          _hover={{
            borderRadius: "1.5em",
          }}
        >
          <VideoCard />
        </GridItem>
        <GridItem
          colSpan={[1, 2]}
          w="100%"
          minH={["auto", "320px"]}
          overflow="hidden"
          borderRadius={"3em"}
          cursor="pointer"
          transition={"all 250ms ease"}
          _hover={{
            borderRadius: "1.5em",
          }}
        >
          <VideoCard />
        </GridItem>
      </Grid>
      <Box w="full" mt="7" display={"flex"} justifyContent="flex-end">
        <Button
          transition={"all 250ms ease"}
          rounded={"1em"}
          _hover={{
            rounded: ".5em",
          }}
          textAlign={"right"}
          rightIcon={<RiVideoLine />}
          variant="outline"
        >
          Load More
        </Button>
      </Box>
    </Box>
  );
};

export default Videos;
