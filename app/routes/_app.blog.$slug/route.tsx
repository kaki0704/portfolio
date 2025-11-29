import hljs from "highlight.js";
import { marked } from "marked";
import type { LoaderFunctionArgs, MetaFunction } from "react-router";
import { getBlogDetail, getBlogList } from "~/lib/microcms.server";
import { BlogContent } from "./BlogContent";

// Configure marked
marked.setOptions({
  breaks: true,
  gfm: true,
});

function parseMarkdown(markdown: string): string {
  // Convert markdown to HTML
  const html = marked.parse(markdown) as string;

  // Apply syntax highlighting to code blocks
  return highlightCode(html);
}

function highlightCode(content: string): string {
  const codeBlockRegex = /<pre><code(?:\s+class="language-(\w+)")?>([\s\S]*?)<\/code><\/pre>/g;

  let result = content;
  const matches = Array.from(content.matchAll(codeBlockRegex));

  if (matches.length === 0) {
    return content;
  }

  for (const match of matches) {
    const [fullMatch, language = "plaintext", code] = match;
    const decodedCode = code
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");

    try {
      const highlighted = hljs.highlight(decodedCode, {
        language: language,
        ignoreIllegals: true,
      });

      const highlightedHtml = `<pre><code class="hljs language-${language}">${highlighted.value}</code></pre>`;
      result = result.replace(fullMatch, highlightedHtml);
    } catch (error) {
      console.error(`Failed to highlight code block with language: ${language}`, error);
    }
  }

  return result;
}

export async function loader({ params, context }: LoaderFunctionArgs) {
  const slug = params.slug;
  if (!slug) {
    throw new Response("Not Found", { status: 404 });
  }

  const env = context.cloudflare.env as Env;

  try {
    const post = await getBlogDetail(env, slug);
    const htmlContent = parseMarkdown(post.content);
    const { contents: allPosts } = await getBlogList(env, {
      orders: "-publishedAt",
      limit: 100,
    });

    const relatedPosts = allPosts
      .filter((p) => p.id !== post.id && p.category?.id === post.category?.id)
      .slice(0, 3);

    return { post: { ...post, content: htmlContent }, relatedPosts };
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
