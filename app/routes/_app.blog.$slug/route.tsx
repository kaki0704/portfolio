import type { LoaderFunctionArgs, MetaFunction } from "react-router";
import { getBlogDetail, getBlogList } from "~/lib/microcms.server";
import { BlogContent } from "./BlogContent";

export async function loader({ params, context }: LoaderFunctionArgs) {
  const slug = params.slug;
  if (!slug) {
    throw new Response("Not Found", { status: 404 });
  }

  const env = context.cloudflare.env as Env;

  try {
    const post = await getBlogDetail(env, slug);

    // 関連記事を取得（同じカテゴリの記事を3件）
    const { contents: allPosts } = await getBlogList(env, {
      orders: "-publishedAt",
      limit: 100,
    });

    const relatedPosts = allPosts
      .filter((p) => p.id !== post.id && p.category?.id === post.category?.id)
      .slice(0, 3);

    return { post, relatedPosts };
  } catch (error) {
    console.error("Blog detail error:", error);
    throw new Response(
      `Blog post not found: ${error instanceof Error ? error.message : "Unknown error"}`,
      { status: 404 },
    );
  }
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return [{ title: "Blog Post Not Found" }];

  const excerpt = data.post.content.replace(/<[^>]*>/g, "").substring(0, 160);

  return [
    { title: `${data.post.title} - Yuki Yamada Blog` },
    { name: "description", content: excerpt },
    { property: "og:title", content: data.post.title },
    { property: "og:description", content: excerpt },
    { property: "og:image", content: data.post.eyecatch?.url || "" },
    { property: "og:type", content: "article" },
    { property: "article:published_time", content: data.post.publishedAt || data.post.createdAt },
  ];
};

export default function BlogPostDetail() {
  return <BlogContent />;
}
