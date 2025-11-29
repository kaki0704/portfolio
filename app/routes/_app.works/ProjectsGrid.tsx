import { ExternalLink, Folder } from "lucide-react";
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent } from "~/components/ui/card";

export function ProjectsGrid() {
  const projects = [
    {
      id: 1,
      title: "fuyukaki-ui",
      description:
        "自然の温かみを持つReact UIコンポーネントライブラリ。「No Black, No Gray」の哲学に基づき、柿色や葉色などの温かみのあるアースカラーを使用。TypeScriptとTailwind CSSで構築され、アクセシビリティに配慮した13種類のコンポーネントを提供。",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Storybook"],
      thumbnail: "/images/fuyukaki-ui-screen.png",
      github: "https://github.com/kaki0704/fuyukaki-ui",
      demo: "https://fuyukaki-ui.com",
    },
    {
      id: 2,
      title: "News Gathering",
      description:
        "Nuxt 4とTypeScriptで構築されたニュース収集アプリケーション。国やカテゴリー別のニュース閲覧、記事検索、ブックマーク、コメント機能を提供。Firebase AuthenticationとFirestoreを使用したユーザー認証とデータ管理を実装。",
      tags: ["Nuxt 4", "TypeScript", "Firebase", "Pinia", "Tailwind CSS"],
      thumbnail: "/images/news-gathering-screen.png",
      github: "https://github.com/kaki0704/NewsGathering",
      demo: "https://news-gathering.work",
    },
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 animate-fadeIn">
          <h1 className="mb-4">Works</h1>
          <p className="text-muted-foreground max-w-2xl">
            個人で開発したプロジェクトの一覧です。新しい技術の習得と実践的なアプリケーション開発に取り組んでいます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group animate-fadeIn">
              <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-[rgb(var(--primary))]/30 hover:-translate-y-1">
                {project.thumbnail && (
                  <div className="relative w-full h-32 overflow-hidden bg-[rgb(var(--muted))]">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}

                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-[rgb(var(--primary))]/10 rounded-lg w-fit">
                      <Folder className="w-6 h-6 text-[rgb(var(--primary))]" />
                    </div>
                    <div className="flex space-x-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--primary))] transition-colors"
                        >
                          <GithubFillIcon size={20} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--primary))] transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="mb-3 group-hover:text-[rgb(var(--primary))] transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-sm text-[rgb(var(--muted-foreground))] mb-6 line-clamp-6">
                      {project.description}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
