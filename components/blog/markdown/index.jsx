import { Box } from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";
import useMarkdownTheme from "@/components/blog/markdown/theme";
import { useEffect } from "react";
const BlogContent = ({ data }) => {
  const { theme } = useMarkdownTheme();

  return (
    <Box w={["100%", "70%"]} mx="auto" p="4">
      <ReactMarkdown
        components={ChakraUIRenderer(theme)}
        children={data?.content}
        skipHtml
      />
    </Box>
  );
};
export default BlogContent;
