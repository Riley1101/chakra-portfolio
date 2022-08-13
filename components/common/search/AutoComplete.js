import React from "react";
import searchClient from "@/utils/search/client";

import {
  Box,
  Text,
  VStack,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon, ExternalLinkIcon, AttachmentIcon } from "@chakra-ui/icons";
import { createAutocomplete } from "@algolia/autocomplete-core";
import { getAlgoliaResults } from "@algolia/autocomplete-preset-algolia";
function Autocomplete() {
  // (1) Create a React state.
  const [autocompleteState, setAutocompleteState] = React.useState({});
  const autocomplete = React.useMemo(
    () =>
      createAutocomplete({
        onStateChange({ state }) {
          // (2) Synchronize the Autocomplete state with the React state.
          setAutocompleteState(state);
        },

        getSources() {
          return [
            // (3) Use an Algolia index source.
            {
              sourceId: "blogs",
              getItemInputValue({ item }) {
                return item.query;
              },
              getItems({ query }) {
                return getAlgoliaResults({
                  searchClient,
                  queries: [
                    {
                      indexName: "blogs",
                      query,
                    },
                    // {
                    //   indexName: "snippets",
                    //   query,
                    // },
                  ],
                });
              },
              getItemUrl({ item }) {
                return item.url;
              },
            },
          ];
        },
      }),
    []
  );

  return (
    <Box w="full" {...autocomplete.getRootProps({})}>
      <InputGroup w="full" my="2">
        <Input
          placeholder="Search"
          type="search"
          {...autocomplete.getInputProps({})}
        />
        <InputRightElement>
          <SearchIcon />
        </InputRightElement>
      </InputGroup>
      <div>
        {autocompleteState.isOpen &&
          autocompleteState.collections.map((collection, index) => {
            const { source, items } = collection;
            console.log(source);
            return (
              <VStack alignItems={"start"} w="full" key={source.sourceId}>
                {items.map((itm) => {
                  return (
                    <Box w="100%" key={itm.__autocomplete_indexName}>
                      <Text
                        mt="4"
                        mb="2"
                        as="p"
                        fontSize={"lg"}
                        fontWeight="bold"
                      >
                        {itm.__autocomplete_indexName}
                      </Text>
                      <VStack>
                        {itm.posts.map((post) => (
                          <Box
                            cursor={"pointer"}
                            key={post.id}
                            rounded={"md"}
                            px="4"
                            _hover={{
                              background: "blue.500",
                              color: "#fff",
                            }}
                            py="4"
                            size={"md"}
                            w="full"
                            gap={2}
                            overflow="hidden"
                            textAlign="left"
                            alignItems={"center"}
                            display={"flex"}
                            flexWrap="nowrap"
                          >
                            <AttachmentIcon />
                            <Box basis="80%" flexGrow={"1"}>
                              {post.title}
                            </Box>
                            <ExternalLinkIcon />
                          </Box>
                        ))}
                      </VStack>
                    </Box>
                  );
                })}
              </VStack>
            );
          })}
      </div>
    </Box>
  );
  // ...
}
export default Autocomplete;
