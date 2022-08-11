import {
  Box,
  Heading,
  IconButton,
  HStack,
  useColorMode,
  Kbd,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import NavigationModal from "@/components/common/modal";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigator = useDisclosure();
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

      <HStack spacing={"4"}>
        <NavigationModal {...navigator} />

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
