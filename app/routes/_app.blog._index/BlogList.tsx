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
    <div className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 animate-fadeIn">
          <h1 className="mb-4">Blog</h1>
          <p className="text-muted-foreground">
            技術的な学びや経験、チーム開発での気づきなどを発信しています。
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="block group animate-fadeIn">
              <Card className="transition-all duration-300 hover:border-[rgb(var(--primary))]/30 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div>
                      <h2 className="mb-3 group-hover:text-[rgb(var(--primary))] transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-[rgb(var(--muted-foreground))] mb-4 line-clamp-2">
                        {getExcerpt(post.content)}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[rgb(var(--muted-foreground))]">
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
    </div>
  );
}
