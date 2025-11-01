import { ArrowUpRight } from "lucide-react";
import { useLoaderData, useNavigate } from "react-router";
import type { BlogPost } from "~/types/blog";

export interface BlogLoaderData {
  posts: BlogPost[];
}

export function Blog() {
  const navigate = useNavigate();
  const { posts } = useLoaderData<BlogLoaderData>();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getExcerpt = (content: string) => {
    const plainText = content.replace(/<[^>]*>/g, "");
    return plainText.substring(0, 150) + (plainText.length > 150 ? "..." : "");
  };
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 animate-fadeIn">
          <h1 className="mb-4">Blog</h1>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.id} className="group animate-fadeIn">
              <button
                type="button"
                onClick={() => navigate(`/blog/${post.id}`)}
                className="block w-full text-left border-b border-border pb-8 transition-colors hover:border-primary/30 cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <time className="caption text-muted-foreground flex-shrink-0">
                        {formatDate(post.publishedAt || post.createdAt)}
                      </time>
                      {post.category && (
                        <>
                          <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                          <span className="caption text-muted-foreground">
                            {post.category.name}
                          </span>
                        </>
                      )}
                    </div>
                    <h2 className="mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground line-clamp-2">{getExcerpt(post.content)}</p>
                  </div>
                  <ArrowUpRight
                    className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1"
                    size={20}
                  />
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
