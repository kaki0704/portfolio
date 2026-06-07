import { ArrowLeft, Calendar, User } from "lucide-react";
import { useLoaderData, useNavigate } from "react-router";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent } from "~/components/ui/card";
import type { loader } from "./route";

export function BlogContent() {
  const { post, relatedPosts } = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  return (
    <article className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => navigate("/blog")}
          className="mb-8 flex cursor-pointer items-center space-x-2 rounded-button px-0 py-2 text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70"
        >
          <ArrowLeft size={20} />
          <span>Back to Blog</span>
        </button>

        <header className="mb-12 animate-fadeIn">
          {post.category && (
            <div className="mb-6">
              <Badge variant="default">{post.category.name}</Badge>
            </div>
          )}
          <h1 className="mb-6">{post.title}</h1>

          <div className="flex flex-wrap gap-4 border-b border-border/70 pb-8 text-sm text-muted-foreground">
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
              className="h-auto w-full rounded-card border border-border/70 shadow-[0_28px_90px_rgb(0_0_0/0.35)]"
            />
          </div>
        )}

        <div
          className="prose prose-lg max-w-none animate-fadeIn
            prose-headings:text-foreground
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground
            prose-code:not(.hljs):text-primary prose-code:not(.hljs):bg-muted prose-code:not(.hljs):px-1.5 prose-code:not(.hljs):py-0.5 prose-code:not(.hljs):rounded prose-code:before:content-none prose-code:after:content-none
            prose-blockquote:border-primary prose-blockquote:text-muted-foreground
            prose-th:bg-muted prose-th:border-border
            prose-td:border-border
            prose-hr:border-border
            prose-img:rounded-lg
            [&_pre]:my-6! [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:shadow-sm
            [&_pre_.hljs]:p-4! [&_pre_.hljs]:block"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {relatedPosts.length > 0 && (
          <div className="mt-16 animate-fadeIn">
            <h2 className="mb-8 text-2xl font-bold">関連記事</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
                  <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:border-[rgb(var(--primary))]/45">
                    <CardContent className="p-6">
                      {relatedPost.category && (
                        <div className="mb-3">
                          <Badge variant="outline">{relatedPost.category.name}</Badge>
                        </div>
                      )}
                      <h3 className="font-semibold mb-2 group-hover:text-[rgb(var(--primary))] transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-[rgb(var(--muted-foreground))] line-clamp-3 mb-4">
                        {relatedPost.content.replace(/<[^>]*>/g, "").substring(0, 100)}...
                      </p>
                      <time className="text-xs text-[rgb(var(--muted-foreground))]">
                        {new Date(
                          relatedPost.publishedAt || relatedPost.createdAt,
                        ).toLocaleDateString("ja-JP")}
                      </time>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
