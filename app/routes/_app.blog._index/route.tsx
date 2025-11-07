import type { LoaderFunctionArgs, MetaFunction } from "react-router";
import { getBlogList } from "~/lib/microcms.server";
import { BlogList } from "./BlogList";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog - Yuki Yamada" },
    { name: "description", content: "Blog posts by Yuki Yamada" },
  ];
};

export async function loader({ context }: LoaderFunctionArgs) {
  const env = context.cloudflare.env as Env;
  const { contents: posts } = await getBlogList(env, {
    orders: "-publishedAt",
    limit: 100,
  });

  return { posts };
}

export default function BlogIndexRoute() {
  return <BlogList />;
}
