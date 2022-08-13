import "@algolia/autocomplete-theme-classic/dist/theme.css";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  HStack,
  IconButton,
  Kbd,
  Text,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";

import { getAlgoliaResults } from "@algolia/autocomplete-js";
import AutoComplete from "@/components/common/search/AutoComplete";

import searchClient from "@/utils/search/client";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box
      display="flex"
      w="full"
      h="5em"
      gap="4"
      p="4"
      flexDirection="row"
      alignItems={"center"}
    >
      <Link href="/">
        <Heading mr="auto" cursor={"pointer"} fontSize={"2xl"}>
          ArkarDev
        </Heading>
      </Link>
      <Modal isOpen={isOpen} onClose={onClose} size={["xs", "md"]}>
        <ModalOverlay />
        <ModalContent maxH={"400px"} overflowY="auto">
          <ModalBody>
            <AutoComplete
              openOnFocus={true}
              getSources={({ query }) => [
                {
                  sourceId: "products",
                  getItems() {
                    return getAlgoliaResults({
                      searchClient,
                      queries: [
                        {
                          indexName: "blogs",
                          query,
                        },
                        {
                          indexName: "snippets",
                          query,
                        },
                      ],
                    });
                  },
                  templates: {
                    item({ item, components }) {
                      console.log(item, components);
                      return <div hit={item} components={components} />;
                    },
                  },
                },
              ]}
            />
          </ModalBody>
        </ModalContent>
      </Modal>

      <HStack spacing={"4"}>
        <Text as="span" cursor={"pointer"} onClick={onOpen}>
          <Kbd>ctrl </Kbd> + <Kbd>K</Kbd>
        </Text>
        <IconButton
          onClick={toggleColorMode}
          aria-label="Menu"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        />
      </HStack>
    </Box>
  );
};

export default Header;

// const Product = ({ hit, components }) => {
//   return (
//     <VStack alignItems={"start"} w="full">
//       {hit.posts && (
//         <Box w="full">
//           <Text mt="4" mb="2" as="p" fontSize={"lg"} fontWeight="bold">
//             Blogs
//           </Text>
//           <VStack>
//             {hit.posts.map((post) => (
//               <Button
//                 _hover={{
//                   background: "blue.500",
//                   color: "#fff",
//                 }}
//                 py="6"
//                 size={"md"}
//                 w="full"
//                 rightIcon={<ExternalLinkIcon />}
//                 leftIcon={<ExternalLinkIcon />}
//               >
//                 <Text textAlign="left" w={"full"} fontWeight="normal">
//                   {post.title}
//                 </Text>
//               </Button>
//             ))}
//           </VStack>
//         </Box>
//       )}
//       {hit.snippets && (
//         <Box w="full">
//           <Text mt="4" mb="2" as="p" fontSize={"lg"} fontWeight="bold">
//             Snippets
//           </Text>
//           <VStack>
//             {hit.snippets.map((post) => (
//               <Button
//                 _hover={{
//                   background: "blue.500",
//                   color: "#fff",
//                 }}
//                 py="6"
//                 size={"md"}
//                 w="full"
//                 rightIcon={<ExternalLinkIcon />}
//                 leftIcon={<ExternalLinkIcon />}
//               >
//                 <Text textAlign="left" w={"full"} fontWeight="normal">
//                   {post.title}
//                 </Text>
//               </Button>
//             ))}
//           </VStack>
//         </Box>
//       )}
//     </VStack>
//   );
// };
