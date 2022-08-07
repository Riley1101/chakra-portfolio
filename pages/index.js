import MainContainer from "@/layouts/container";
import Hero from "@/components/home/hero";
import Blogs from "@/components/home/blogs";
import Snippets from "@/components/home/snippets";
import Video from "@/components/home/videos";
export default function Home() {
  return (
    <MainContainer>
      <Hero />
      <Blogs />
      <Snippets />
      <Video />
    </MainContainer>
  );
}
