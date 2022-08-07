import { Grid, Box, Heading, GridItem, VStack, Button } from "@chakra-ui/react";
import BlogCard from "@/components/common/card";
import { FaRegNewspaper } from "react-icons/fa";
import VideoCard from "@/components/common/video";
const SpaceGrid = () => {
  return (
    <Box p="4">
      <Box mb="8">
        <VStack alignItems={"flex-start"} spacing=".2em" my="7">
          <Heading as="h2" fontSize={["2xl", "4xl"]}>
            Popular Contents.
          </Heading>
          {/* <Text fontSize={["xl", "3xl"]} fontWeight="bold" color={"gray.500"}>
          Web development, with a focus on the React ecosystem.
        </Text> */}
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
            <BlogCard />
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
            <BlogCard />
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
            <BlogCard />
          </GridItem>
        </Grid>
      </Box>
      <Box my="8">
        <VStack alignItems={"flex-start"} spacing=".2em" my="7">
          <Heading as="h2" fontSize={["2xl", "4xl"]}>
            Blogs.
          </Heading>
          {/* <Text fontSize={["xl", "3xl"]} fontWeight="bold" color={"gray.500"}>
          Web development, with a focus on the React ecosystem.
        </Text> */}
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
            <BlogCard />
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
            <BlogCard />
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
            <BlogCard />
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
            <BlogCard />
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
            <BlogCard />
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
            rightIcon={<FaRegNewspaper />}
            variant="outline"
          >
            Load More
          </Button>
        </Box>
      </Box>
      <Box my="8">
        <VStack alignItems={"flex-start"} spacing=".2em" my="7">
          <Heading as="h2" fontSize={["2xl", "4xl"]}>
            Snippets.
          </Heading>
          {/* <Text fontSize={["xl", "3xl"]} fontWeight="bold" color={"gray.500"}>
          Web development, with a focus on the React ecosystem.
        </Text> */}
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
            <BlogCard />
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
            <BlogCard />
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
            <BlogCard />
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
            <BlogCard />
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
            <BlogCard />
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
            <BlogCard />
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
            <BlogCard />
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
            <BlogCard />
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
            rightIcon={<FaRegNewspaper />}
            variant="outline"
          >
            Load More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SpaceGrid;
