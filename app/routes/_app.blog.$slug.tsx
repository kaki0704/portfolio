import { ArrowLeft, Calendar, Clock, Tag, User } from "lucide-react";
import type { LoaderFunctionArgs, MetaFunction } from "react-router";
import { useLoaderData, useNavigate } from "react-router";

const blogPosts = {
  "nextjs-app-router-introduction": {
    id: "nextjs-app-router-introduction",
    title: "Next.js App Routerの実装パターンと最適化テクニック",
    excerpt:
      "Next.js 13で導入されたApp Routerの実践的な使用方法と、パフォーマンス最適化のベストプラクティスを解説します。",
    content: `
      <h2>はじめに</h2>
      <p>Next.js 13で導入されたApp Routerは、Reactアプリケーションの開発方法を大きく変えました。この記事では、実際のプロジェクトで使用してきた経験から、App Routerの効果的な実装パターンと最適化テクニックを共有します。</p>
      <h2>App Routerの基本概念</h2>
      <p>App Routerは、ファイルシステムベースのルーティングを提供し、Server ComponentsとClient Componentsを明確に分離します。これにより、パフォーマンスの向上とコードの保守性が大幅に改善されます。</p>
      <h3>ディレクトリ構造</h3>
      <pre><code class="language-bash">
app/
├── layout.tsx      # ルートレイアウト
├── page.tsx        # ホームページ
├── blog/
│   ├── layout.tsx  # ブログセクションのレイアウト
│   ├── page.tsx    # ブログ一覧
│   └── [slug]/
│       └── page.tsx # ブログ詳細ページ
      </code></pre>
      <h2>Server Componentsの活用</h2>
      <p>Server Componentsを使用することで、クライアントに送信するJavaScriptの量を大幅に削減できます。データフェッチングをサーバー側で行い、HTMLとして配信することで、初期表示速度が向上します。</p>
      <pre><code class="language-typescript">
async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await fetchBlogPost(params.slug);
  return (
    &lt;article&gt;
      &lt;h1&gt;{post.title}&lt;/h1&gt;
      &lt;div dangerouslySetInnerHTML={{ __html: post.content }} /&gt;
    &lt;/article&gt;
  );
}
      </code></pre>
      <h2>Loading UIとError Handling</h2>
      <p>App Routerでは、loading.tsxとerror.tsxファイルを使用して、ローディング状態とエラー処理を簡単に実装できます。</p>
      <h3>Suspenseの活用</h3>
      <p>React Suspenseと組み合わせることで、部分的なローディング状態を実現し、より良いユーザー体験を提供できます。</p>
      <h2>パフォーマンス最適化のテクニック</h2>
      <ul>
        <li><strong>Partial Prerendering</strong>: 静的な部分と動的な部分を分離してレンダリング</li>
        <li><strong>Parallel Routes</strong>: 複数のページセクションを並列でレンダリング</li>
        <li><strong>Route Groups</strong>: URLに影響を与えずにルートを整理</li>
        <li><strong>Intercepting Routes</strong>: モーダルなどのインタラクティブなUI実装</li>
      </ul>
      <h2>実装例：ブログサイトの構築</h2>
      <p>実際のブログサイトを例に、App Routerを使用した実装を見てみましょう。</p>
      <pre><code class="language-typescript">
import { Suspense } from 'react';
import BlogList from './BlogList';
import LoadingSkeleton from './LoadingSkeleton';
export default function BlogPage() {
  return (
    &lt;div&gt;
      &lt;h1&gt;Blog&lt;/h1&gt;
      &lt;Suspense fallback={&lt;LoadingSkeleton /&gt;}&gt;
        &lt;BlogList /&gt;
      &lt;/Suspense&gt;
    &lt;/div&gt;
  );
}
      </code></pre>
      <h2>メタデータの管理</h2>
      <p>App Routerでは、generateMetadata関数を使用して動的にメタデータを生成できます。これはSEOにとって非常に重要です。</p>
      <pre><code class="language-typescript">
export async function generateMetadata({ params }: Props) {
  const post = await fetchBlogPost(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.ogImage],
    },
  };
}
      </code></pre>
      <h2>まとめ</h2>
      <p>Next.js App Routerは、モダンなWebアプリケーション開発において強力なツールです。Server Componentsの活用、適切なキャッシング戦略、そして段階的な静的生成を組み合わせることで、高速で保守性の高いアプリケーションを構築できます。</p>
      <p>今後も新しい機能が追加される予定なので、公式ドキュメントを定期的にチェックし、最新のベストプラクティスを取り入れていくことが重要です。</p>
    `,
    author: "Yuki Yamada",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Frontend",
    tags: ["Next.js", "React", "App Router", "Performance"],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
  },
  "microservices-design-patterns": {
    id: "microservices-design-patterns",
    title: "マイクロサービス設計パターンの実践ガイド",
    excerpt:
      "実際のプロジェクトで活用できるマイクロサービスの設計パターンと、その実装における注意点を詳しく解説します。",
    content: `
      <h2>はじめに</h2>
      <p>マイクロサービスアーキテクチャは、大規模なアプリケーションを小さな独立したサービスに分割することで、開発の柔軟性とスケーラビリティを向上させます。この記事では、実践で使えるマイクロサービスの設計パターンを紹介します。</p>
      <h2>主要な設計パターン</h2>
      <h3>1. API Gateway Pattern</h3>
      <p>API Gatewayは、クライアントとマイクロサービス間のエントリーポイントとして機能します。認証、ルーティング、レート制限などの横断的関心事を一元管理できます。</p>
      <h3>2. Service Discovery Pattern</h3>
      <p>動的にサービスインスタンスを発見し、負荷分散を実現するパターンです。Consul、Eureka、Kubernetesなどのツールを活用します。</p>
      <h3>3. Circuit Breaker Pattern</h3>
      <p>サービス間の通信において、障害の連鎖を防ぐためのパターンです。一定の失敗率を超えた場合、自動的に通信を遮断し、システム全体の安定性を保ちます。</p>
      <h2>実装のベストプラクティス</h2>
      <ul>
        <li>サービス間の疎結合を維持する</li>
        <li>適切なサービス境界の設定</li>
        <li>イベント駆動アーキテクチャの活用</li>
        <li>分散トレーシングの実装</li>
      </ul>
      <h2>まとめ</h2>
      <p>マイクロサービスアーキテクチャは強力ですが、複雑性も増します。適切な設計パターンを選択し、チームの成熟度に合わせて段階的に導入することが成功の鍵となります。</p>
    `,
    author: "Yuki Yamada",
    date: "2024-01-10",
    readTime: "10 min read",
    category: "Architecture",
    tags: ["Microservices", "Design Patterns", "Backend"],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
  },
  "team-productivity-improvement": {
    id: "team-productivity-improvement",
    title: "チーム生産性を2倍にした開発プロセス改革",
    excerpt: "実際のチームで実践した、開発プロセスの改善施策とその成果について詳しく解説します。",
    content: `
      <h2>背景</h2>
      <p>私たちのチームは、急速な成長に伴い、開発プロセスの非効率性が顕在化していました。この記事では、6ヶ月間で実施した改善施策とその成果を共有します。</p>
      <h2>実施した施策</h2>
      <h3>1. CI/CDパイプラインの最適化</h3>
      <p>ビルド時間を70%削減し、デプロイ頻度を週1回から日5回に増加させました。</p>
      <h3>2. コードレビュープロセスの改善</h3>
      <p>自動レビューツールの導入と、レビューガイドラインの策定により、レビュー時間を50%削減しました。</p>
      <h3>3. ドキュメント文化の確立</h3>
      <p>ADR（Architecture Decision Records）の導入により、意思決定の透明性が向上しました。</p>
      <h2>成果</h2>
      <ul>
        <li>リリースサイクルが2週間から1週間に短縮</li>
        <li>バグ発生率が40%減少</li>
        <li>チームの満足度スコアが30%向上</li>
      </ul>
      <h2>まとめ</h2>
      <p>継続的な改善と、チーム全体での取り組みが重要です。小さな改善を積み重ねることで、大きな成果につながります。</p>
    `,
    author: "Yuki Yamada",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Management",
    tags: ["Team Management", "Productivity", "Process"],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
  },
};
export async function loader({ params }: LoaderFunctionArgs) {
  const slug = params.slug;
  if (!slug || !blogPosts[slug as keyof typeof blogPosts]) {
    throw new Response("Not Found", { status: 404 });
  }
  const post = blogPosts[slug as keyof typeof blogPosts];
  const relatedPosts = Object.values(blogPosts)
    .filter((p) => p.id !== post.id)
    .slice(0, 3)
    .map((p) => ({
      id: p.id,
      title: p.title,
      excerpt: p.excerpt,
      date: p.date,
      category: p.category,
    }));
  return { post, relatedPosts };
}
export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return [{ title: "Blog Post Not Found" }];
  return [
    { title: `${data.post.title} - Yuki Yamada Blog` },
    { name: "description", content: data.post.excerpt },
    { property: "og:title", content: data.post.title },
    { property: "og:description", content: data.post.excerpt },
    { property: "og:image", content: data.post.image },
    { property: "og:type", content: "article" },
    { property: "article:author", content: data.post.author },
    { property: "article:published_time", content: data.post.date },
    { property: "article:tag", content: data.post.tags.join(", ") },
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
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          <h1 className="mb-6">{post.title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pb-8 border-b border-border">
            <div className="flex items-center space-x-2">
              <User size={16} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={16} />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {post.image && (
          <div className="mb-12 animate-fadeIn">
            <img src={post.image} alt={post.title} className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        )}

        <div
          className="prose prose-lg max-w-none animate-fadeIn
            prose-headings:text-foreground
            prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground prose-strong:font-semibold
            prose-ul:text-muted-foreground prose-ul:my-6 prose-ul:ml-6
            prose-li:mb-2
            prose-pre:bg-muted prose-pre:text-foreground prose-pre:rounded-lg prose-pre:p-4
            prose-code:text-primary prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded
            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 pt-8 border-t border-border animate-fadeIn">
          <div className="flex items-center space-x-2 mb-4">
            <Tag size={20} className="text-muted-foreground" />
            <span className="text-muted-foreground">Tags:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-muted text-muted-foreground rounded-lg text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 p-6 bg-muted rounded-lg animate-fadeIn">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
              <User className="text-primary" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-2">{post.author}</h3>
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
                    <div className="mb-3">
                      <span className="text-xs text-primary font-medium">
                        {relatedPost.category}
                      </span>
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                      {relatedPost.excerpt}
                    </p>
                    <time className="text-xs text-muted-foreground">
                      {new Date(relatedPost.date).toLocaleDateString("ja-JP")}
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
