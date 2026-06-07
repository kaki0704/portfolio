import { Link, useLoaderData } from "react-router";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent } from "~/components/ui/card";
import type { loader } from "./route";

function getExcerpt(content: string | undefined, maxLength = 150) {
  if (!content) return "";
  const text = content.replace(/<[^>]*>/g, "");
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
}

export function BlogList() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <section className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 animate-fadeIn">
          <p className="eyebrow mb-5">Notes</p>
          <h1 className="mb-6">Blog</h1>
          <p className="text-muted-foreground">
            技術的な学びや経験、チーム開発での気づきなどを発信しています。
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="block group animate-fadeIn">
              <Card className="transition-all duration-300 hover:-translate-y-1 hover:border-[rgb(var(--primary))]/45">
                <CardContent className="p-6 sm:p-7">
                  <div className="flex flex-col space-y-4">
                    <div>
                      <h2 className="mb-3 transition-colors group-hover:text-[rgb(var(--primary))]">
                        {post.title}
                      </h2>
                      <p className="mb-4 line-clamp-2 text-[rgb(var(--muted-foreground))]">
                        {getExcerpt(post.content)}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 border-t border-border/70 pt-4 text-sm text-[rgb(var(--muted-foreground))]">
                      <time dateTime={post.publishedAt || post.createdAt}>
                        {new Date(post.publishedAt || post.createdAt).toLocaleDateString("ja-JP", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      {post.category && <Badge variant="secondary">{post.category.name}</Badge>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
