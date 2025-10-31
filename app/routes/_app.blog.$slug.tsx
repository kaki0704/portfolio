import { ArrowLeft, Calendar, User } from "lucide-react";
import type { LoaderFunctionArgs, MetaFunction } from "react-router";
import { useLoaderData, useNavigate } from "react-router";
import { getBlogDetail, getBlogList } from "~/lib/microcms.server";
import type { BlogPost } from "~/types/blog";

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
      { status: 404 }
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
  const { post, relatedPosts } = useLoaderData<typeof loader>();
  const navigate = useNavigate();
  return (
    <article className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => navigate("/blog")}
          className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Blog</span>
        </button>

        <header className="mb-12 animate-fadeIn">
          {post.category && (
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {post.category.name}
              </span>
            </div>
          )}
          <h1 className="mb-6">{post.title}</h1>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pb-8 border-b border-border">
            <div className="flex items-center space-x-2">
              <User size={16} />
              <span>Yuki Yamada</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={16} />
              <time dateTime={post.publishedAt || post.createdAt}>
                {new Date(post.publishedAt || post.createdAt).toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
        </header>

        {post.eyecatch && (
          <div className="mb-12 animate-fadeIn">
            <img
              src={post.eyecatch.url}
              alt={post.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        )}

        <div
          className="prose prose-lg max-w-none animate-fadeIn
            prose-headings:text-foreground
            prose-h1:text-3xl prose-h1:font-bold prose-h1:mt-12 prose-h1:mb-6
            prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3
            prose-h4:text-lg prose-h4:font-semibold prose-h4:mt-6 prose-h4:mb-2
            prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6 prose-p:mt-0
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground prose-strong:font-semibold
            prose-em:text-foreground prose-em:italic
            prose-ul:text-muted-foreground prose-ul:my-6 prose-ul:ml-6 prose-ul:list-disc
            prose-ol:text-muted-foreground prose-ol:my-6 prose-ol:ml-6 prose-ol:list-decimal
            prose-li:mb-2 prose-li:text-muted-foreground
            prose-pre:bg-muted prose-pre:text-foreground prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto
            prose-code:text-primary prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-muted-foreground
            prose-hr:border-border prose-hr:my-8
            prose-table:border-collapse prose-table:w-full
            prose-th:border prose-th:border-border prose-th:p-2 prose-th:bg-muted
            prose-td:border prose-td:border-border prose-td:p-2
            prose-img:rounded-lg prose-img:shadow-md
            [&_p:empty]:min-h-[1.5em]
            [&_br]:block [&_br]:my-2"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 p-6 bg-muted rounded-lg animate-fadeIn">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
              <User className="text-primary" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-2">Yuki Yamada</h3>
              <p className="text-muted-foreground">
                ビジネスを加速させる、境界を越えるエンジニアリング。
                10年以上の経験を持つフルスタックエンジニアとして、
                スタートアップから大企業まで幅広いプロジェクトをリードしてきました。
              </p>
            </div>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-16 animate-fadeIn">
            <h2 className="text-2xl font-bold mb-8">関連記事</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.id}
                  className="group cursor-pointer"
                  onClick={() => navigate(`/blog/${relatedPost.id}`)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      navigate(`/blog/${relatedPost.id}`);
                    }
                  }}
                >
                  <div className="bg-card border border-border rounded-lg p-6 h-full transition-all duration-300 hover:border-primary/30 hover:-translate-y-1">
                    {relatedPost.category && (
                      <div className="mb-3">
                        <span className="text-xs text-primary font-medium">
                          {relatedPost.category.name}
                        </span>
                      </div>
                    )}
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                      {relatedPost.content.replace(/<[^>]*>/g, "").substring(0, 100)}...
                    </p>
                    <time className="text-xs text-muted-foreground">
                      {new Date(relatedPost.publishedAt || relatedPost.createdAt).toLocaleDateString(
                        "ja-JP"
                      )}
                    </time>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
