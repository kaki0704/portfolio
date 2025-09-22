import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router";
export function Blog() {
  const navigate = useNavigate();
  const blogPosts = [
    {
      id: "nextjs-app-router-introduction",
      title: "Next.js App Routerの実装パターンと最適化テクニック",
      description:
        "Next.js 13で導入されたApp Routerの実践的な使用方法と、パフォーマンス最適化のベストプラクティスを解説します。",
      date: "2024-01-15",
      category: "Frontend",
    },
    {
      id: "microservices-design-patterns",
      title: "マイクロサービス設計パターンの実践ガイド",
      description:
        "実際のプロジェクトで活用できるマイクロサービスの設計パターンと、その実装における注意点を詳しく解説します。",
      date: "2024-01-10",
      category: "Architecture",
    },
    {
      id: "team-productivity-improvement",
      title: "チーム生産性を2倍にした開発プロセス改革",
      description:
        "実際のチームで実践した、開発プロセスの改善施策とその成果について詳しく解説します。",
      date: "2024-01-05",
      category: "Management",
    },
  ];
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 animate-fadeIn">
          <h1 className="mb-4">Blog</h1>
          <p className="text-muted-foreground">
            技術的な知見や開発で得た学び、エンジニアリングマネジメントについての考察を発信しています。
          </p>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post) => (
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
                        {formatDate(post.date)}
                      </time>
                      <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                      <span className="caption text-muted-foreground">{post.category}</span>
                    </div>
                    <h2 className="mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground line-clamp-2">{post.description}</p>
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
