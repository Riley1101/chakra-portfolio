import MainContainer from "@/layouts/container";
import Meta from "@/components/blog/meta";
import { gql } from "@apollo/client";
import client from "@/utils/query/client";
import BlogContent from "@/components/blog/markdown";
const BlogDetail = ({ data }) => {
  return (
    <MainContainer>
      <Meta data={data} />
      <BlogContent data={data} />
    </MainContainer>
  );
};

export default BlogDetail;
const ALL_POSTS = gql`
  query ALL_POSTS {
    posts {
      id
      slug
    }
  }
`;
const POST_DETAIL_QUERY = gql`
  query SPECIFIC_QUERT($slug: String) {
    post(where: { slug: $slug }) {
      id
      title
      description
      content
      toc
      slug
      publishedAt
      coverImage {
        url
      }
      categories {
        name
        id
      }
    }
  }
`;
export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: POST_DETAIL_QUERY,
    variables: {
      slug: params.slug,
    },
  });
  return {
    props: {
      data: data.post,
    },
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: ALL_POSTS,
  });

  let paths = data.posts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
}
