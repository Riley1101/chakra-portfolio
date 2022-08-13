import {
  Box,
  Heading,
  HStack,
  IconButton,
  Kbd,
  Text,
  Modal,
  ModalBody,
  InputGroup,
  Input,
  InputRightElement,
  ModalOverlay,
  ModalContent,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { connectStateResults } from "react-instantsearch-dom";

function Hits({ searchState, searchResults }) {
  const validQuery = searchState.query?.length >= 3; // 3 is the minimum query length
  return (
    <>
      <h1>Hints</h1>
      {/* {validQuery && (
        <p className="px-2 text-neutral">
          Search results for {searchState.query}{" "}
        </p>
      )}

      {searchResults?.hits.length === 0 && validQuery && (
        <p>
          No data found with the term {searchState.query} contact the web admin
          after you get the actual data for futher update
        </p>
      )}
      {searchResults?.hits.length > 0 && validQuery && (
        <div className="grid gap-2 md:grid-cols-2 p-2 ">
          {searchResults.hits.map((hit) => (
            <ResultInfo data={hit} key={hit.objectID} />
          ))}
        </div>
      )} */}
    </>
  );
}

export default connectStateResults(Hits);
