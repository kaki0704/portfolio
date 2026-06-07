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
      status: "Design system",
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
      status: "Web app",
    },
  ];

  return (
    <section className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-3xl animate-fadeIn">
          <p className="eyebrow mb-5">Selected work</p>
          <h1 className="mb-6">Works</h1>
          <p className="max-w-2xl text-muted-foreground">
            個人で開発したプロジェクトの一覧です。新しい技術の習得と実践的なアプリケーション開発に取り組んでいます。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          {projects.map((project) => (
            <div key={project.id} className="group animate-fadeIn">
              <Card className="h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[rgb(var(--primary))]/45">
                {project.thumbnail && (
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[rgb(var(--muted))]">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.035]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/75 via-white/10 to-transparent" />
                    <div className="absolute left-4 top-4 rounded-md border border-border/70 bg-background/70 px-3 py-1 text-xs font-bold text-[rgb(var(--primary))] backdrop-blur">
                      {project.status}
                    </div>
                  </div>
                )}

                <CardContent className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-fit rounded-lg bg-[rgb(var(--primary))]/10 p-2 ring-1 ring-[rgb(var(--primary))]/25">
                        <Folder className="h-5 w-5 text-[rgb(var(--primary))]" />
                      </div>
                      <h3 className="transition-colors group-hover:text-[rgb(var(--primary))]">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex space-x-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-button p-2 text-[rgb(var(--muted-foreground))] transition-colors hover:bg-muted hover:text-[rgb(var(--primary))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70"
                          aria-label={`${project.title} GitHub`}
                        >
                          <GithubFillIcon size={20} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-button p-2 text-[rgb(var(--muted-foreground))] transition-colors hover:bg-muted hover:text-[rgb(var(--primary))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70"
                          aria-label={`${project.title} demo`}
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="mb-6 text-sm leading-7 text-[rgb(var(--muted-foreground))]">
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
    </section>
  );
}
