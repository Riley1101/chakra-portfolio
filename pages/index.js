import MainContainer from "@/layouts/container";
import Hero from "@/components/home/hero";
import Blogs from "@/components/home/blogs";
import Snippets from "@/components/home/snippets";
import Video from "@/components/home/videos";
import { gql } from "@apollo/client";
import client from "@/utils/query/client";
import server from "@/utils/server";
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

export default function Home({ posts, snippets, videos }) {
  return (
    <MainContainer>
      <Hero />
      <Blogs posts={posts} />
      <Snippets snippets={snippets} />
      <Video videos={videos} />
    </MainContainer>
  );
}
export async function getStaticProps() {
  const { data } = await client.query({
    query: HOME_QUERY,
  });
  let url = `${server}/api/playlist/PLJznl3g92X7P4T3S2lLW8Ws43KfjPCmYs`;
  let response = await fetch(url)
    .then((res) => res.json())
    .then((res) => res);

  return {
    props: {
      videos: response,
      ...data,
    },
  };
}
