import MainContainer from "@/layouts/container";
import Hero from "@/components/home/hero";
import Blogs from "@/components/home/blogs";
import Snippets from "@/components/home/snippets";
import Video from "@/components/home/videos";
import { gql } from "@apollo/client";
import client from "@/utils/query/client";

const HOME_QUERY = gql`
  query MyQuery {
    posts(last: 3) {
      id
      publishedAt
      slug
      title
      date
      content
      description
    }
    snippets: snippets(last: 6) {
      id
      slug
      title
      description
    }
  }
`;

export default function Home({ posts, snippets }) {
  return (
    <MainContainer>
      <Hero />
      <Blogs posts={posts} />
      <Snippets snippets={snippets} />
      <Video />
    </MainContainer>
  );
}
export async function getStaticProps() {
  const { data } = await client.query({
    query: HOME_QUERY,
  });
  return {
    props: {
      ...data,
    },
  };
}
