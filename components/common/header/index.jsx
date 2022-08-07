import {
  Box,
  Heading,
  IconButton,
  HStack,
  useColorMode,
} from "@chakra-ui/react";
import { SearchIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
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
      <Heading mr="auto" fontSize={"2xl"}>
        ArkarDev
      </Heading>
      <HStack>
        <IconButton aria-label="Menu" icon={<SearchIcon />} />
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
