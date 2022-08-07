import { Box } from "@chakra-ui/react";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
const MainContainer = ({ children }) => {
  return (
    <Box
      w={["100%", "85%"]}
      mx={"auto"}
      lineHeight="1.7"
      fontFamily={"'Inter', sans-serif"}
    >
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default MainContainer;
