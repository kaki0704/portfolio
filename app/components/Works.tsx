import { ExternalLink, Folder, Github } from "lucide-react";
export function Works() {
  const projects = [
    {
      id: 1,
      title: "AI細胞品質管理システム『Cytometa』",
      description:
        "AI技術を活用した細胞の品質管理を行うシステムの設計・開発。プレイングマネージャーとして、コア機能の実装から技術組織のマネジメントまで幅広く担当。",
      tags: ["Remix", "Go", "MySQL", "AWS", "TypeScript"],
      github: "",
      demo: null,
    },
    {
      id: 2,
      title: "スキマバイトアプリ「シェアフル」",
      description:
        "フロントエンドとバックエンド両方の設計・実装を担当したマッチングアプリ。チームリーダーとして開発プロセスの改善とメンバーの技術力向上にも貢献。",
      tags: ["Go", "Nuxt.js", "React Native", "TypeScript"],
      github: "",
      demo: "",
    },
    {
      id: 3,
      title: "プロダクト間API連携システム",
      description:
        "労務管理アプリ「ロウムメイト」での外部API連携機能の開発。プロダクト間の仕様調整から安全なAPI設計・実装まで一貫して担当。",
      tags: ["Go", "React", "API設計", "システム連携"],
      github: "",
      demo: null,
    },
    {
      id: 4,
      title: "フロントエンド技術移行プロジェクト",
      description:
        "Nuxt2からNuxt3への大規模移行プロジェクトをリード。E2Eテスト環境の整備とストア管理の刷新により、開発体験と品質の大幅な向上を実現。",
      tags: ["Nuxt.js", "Vue.js", "Cypress", "Pinia", "TypeScript"],
      github: "",
      demo: null,
    },
    {
      id: 5,
      title: "doda連携システム開発",
      description:
        "親会社プロダクトとの大規模システム連携プロジェクト。アーキテクチャ策定、API仕様定義、スクラム導入を通じてプロジェクトを成功に導く。",
      tags: ["Vue.js", "Ruby on Rails", "API設計", "スクラム"],
      github: "",
      demo: null,
    },
    {
      id: 6,
      title: "コーポレートサイト開発",
      description:
        "QuastellaのコーポレートサイトをNext.jsで設計・実装。モダンなデザインとパフォーマンスを重視したレスポンシブサイトを構築。",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      github: "",
      demo: null,
    },
  ];
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 animate-fadeIn">
          <h1 className="mb-4">Works</h1>
          <p className="text-muted-foreground max-w-2xl">
            これまでに携わった主要なプロジェクトの一覧です。技術的な課題解決とビジネスへの貢献を重視して取り組んでいます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, _index) => (
            <div key={project.id} className="group animate-fadeIn">
              <div className="bg-card border border-border rounded-card p-6 h-full flex flex-col transition-all duration-300 hover:border-primary/30 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg w-fit">
                    <Folder className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-4">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="caption text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 pt-16 border-t border-border animate-fadeIn">
          <p className="text-muted-foreground mb-4">
            その他の実績やプロジェクトの詳細については、お気軽にお問い合わせください。
          </p>
          <a
            href="mailto:yuki.yamada@example.com"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
          >
            <span>お問い合わせ</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
