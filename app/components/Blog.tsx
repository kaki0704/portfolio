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
    // HTMLタグを除去してプレーンテキストに変換
    const plainText = content.replace(/<[^>]*>/g, "");
    // 最初の150文字を取得
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
                className="block w-full text-left border-b border-border pb-8 transition-colors hover:border-primary/30"
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

        <div className="text-center mt-16 pt-16 border-t border-border animate-fadeIn">
          <p className="text-muted-foreground mb-4">技術ブログは継続的に更新していく予定です。</p>
          <a
            href="mailto:yuki.yamada@example.com"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
          >
            <span>お問い合わせ</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
