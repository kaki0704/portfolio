import { ExternalLink } from "lucide-react";
import { useState } from "react";
export function About() {
  const [selectedCompany, setSelectedCompany] = useState(0);
  const experiences = [
    {
      id: 0,
      company: "株式会社Quastella",
      period: "2025年8月 - 現在",
      title: "エンジニアリングマネージャー",
      description: "AI細胞品質管理システム『Cytometa』開発および技術組織マネジメント",
      responsibilities: [
        "プレイングマネージャーとして、開発（70%）とエンジニアリングマネジメント（30%）の両面を担当",
        "『Cytometa』コア機能の設計、実装、コードレビュー（Go, Remix）",
        "コーポレートサイトの設計、実装（Next.js）",
        "インフラ構築・運用、開発環境の整備（AWS, GCP, GitHub Actions）",
        "プロダクト要件に応じた技術選定と導入の意思決定",
        "採用計画策定、面接、オンボーディングの実施",
        "チームメンバーとの1on1を通じた目標設定、評価、キャリア支援",
      ],
      technologies: ["Remix", "Next.js", "Go", "TypeScript", "MySQL", "AWS", "GCP"],
      url: null,
    },
    {
      id: 1,
      company: "株式会社カオナビ",
      period: "2025年3月 - 2025年7月",
      title: "エンジニア",
      description: "労務管理アプリ「ロウムメイト」の開発",
      responsibilities: [
        "プロダクト間の外部API連携に関わる仕様調整、設計、実装",
        "システム間の安定した連携機能の開発",
        "データ整合性を保つAPI設計と実装",
      ],
      technologies: ["Go", "React"],
      url: "https://example.com",
    },
    {
      id: 2,
      company: "シェアフル株式会社",
      period: "2023年12月 - 2025年2月",
      title: "チームリーダー",
      description: "スキマバイトアプリ「シェアフル」の開発",
      responsibilities: [
        "フロントエンドとバックエンド両方の設計、実装",
        "チームメンバーのタスク管理、進捗管理",
        "コードレビューを通じた品質と技術力の向上",
        "新技術の導入検討、技術選定",
      ],
      technologies: ["Go", "Nuxt.js", "React Native"],
      url: "https://example.com",
    },
    {
      id: 3,
      company: "株式会社FromTo",
      period: "2023年5月 - 2023年11月",
      title: "リードエンジニア",
      description: "プロジェクトマネジメントとチーム体制構築",
      responsibilities: [
        "プロジェクトマネジメント、プロダクトロードマップの作成",
        "スクラムを導入し、チームとしての成果を重視する開発体制を構築",
        "コードレビュー、デザイナーとのUI/UX調整",
      ],
      technologies: ["Ruby on Rails", "Next.js"],
      url: null,
    },
    {
      id: 4,
      company: "株式会社ワークスタイルラボ",
      period: "2021年8月 - 2023年4月",
      title: "エンジニア",
      description: "フロントエンドチームのマネジメントおよび実装",
      responsibilities: [
        "フロントエンドチームのマネジメントおよび実装",
        "フロントエンド側の技術選定",
        "Nuxt2からNuxt3への移行プロジェクトリード",
        "E2Eテスト(Cypress)導入、ストア(Pinia)実装",
        "バックエンド関連の実装（Go, SalesforceとのAPI連携）",
      ],
      technologies: ["Nuxt.js", "Vue.js", "Go", "Cypress", "Pinia", "Terraform"],
      url: null,
    },
    {
      id: 5,
      company: "シングラー株式会社",
      period: "2019年7月 - 2021年8月",
      title: "エンジニア",
      description: "スクラム導入とプロダクト連携システム開発",
      responsibilities: [
        "スクラム導入などのプロジェクトマネジメント",
        "親会社プロダクト(doda)との連携（アーキテクチャ策定、API仕様書定義、スケジュール調整など）",
        "フロントエンド・バックエンド実装",
        "RSpecによる単体テスト実装",
      ],
      technologies: ["Vue.js", "Ruby on Rails", "RSpec", "Terraform"],
      url: null,
    },
  ];
  const currentExperience = experiences[selectedCompany];
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 animate-fadeIn">
          <h1 className="mb-4">経歴</h1>
          <p className="text-muted-foreground max-w-2xl">
            2019年にエンジニアとしてキャリアをスタートし、フロントエンドからバックエンド、インフラ、そしてマネジメントまで幅広い技術領域を経験してきました。
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-80 flex-shrink-0">
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible space-x-2 lg:space-x-0 lg:space-y-2 pb-2 lg:pb-0">
              {experiences.map((exp, index) => (
                <button
                  type="button"
                  key={exp.id}
                  onClick={() => setSelectedCompany(index)}
                  className={`px-4 py-3 text-left rounded-lg transition-all duration-200 flex-shrink-0 lg:w-full ${
                    selectedCompany === index
                      ? "bg-muted text-primary border-l-2 border-primary"
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  }`}
                >
                  <div className="font-medium">{exp.company.replace("株式会社", "")}</div>
                  <div className="caption text-muted-foreground mt-1">{exp.period}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <div key={selectedCompany} className="space-y-6 animate-fadeIn">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h2>
                    {currentExperience.title} @ {currentExperience.company}
                  </h2>
                  {currentExperience.url && (
                    <a
                      href={currentExperience.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
                <div className="text-muted-foreground mb-4">{currentExperience.period}</div>
                <p className="text-muted-foreground mb-6">{currentExperience.description}</p>
              </div>

              <div>
                <h4 className="mb-4">主な担当業務</h4>
                <ul className="space-y-3">
                  {currentExperience.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-4">使用技術</h4>
                <div className="flex flex-wrap gap-2">
                  {currentExperience.technologies.map((tech, _index) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-lg border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
