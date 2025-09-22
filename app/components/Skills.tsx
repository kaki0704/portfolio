import { Progress } from "./ui/progress";
export function Skills() {
  const skillCategories = [
    {
      title: "Expert (Lv.3)",
      description: "業務で積極的に活用し、チームリード・技術選定ができるレベル",
      skills: [
        { name: "Go", level: 90, icon: "🐹" },
        { name: "TypeScript", level: 85, icon: "🔷" },
        { name: "Vue.js", level: 90, icon: "💚" },
        { name: "React", level: 85, icon: "⚛️" },
        { name: "Nuxt.js", level: 88, icon: "💚" },
        { name: "Git", level: 95, icon: "🔀" },
      ],
    },
    {
      title: "Proficient (Lv.2)",
      description: "業務で使用経験があり、設計・実装が可能なレベル",
      skills: [
        { name: "Ruby on Rails", level: 75, icon: "🚂" },
        { name: "Next.js", level: 80, icon: "▲" },
        { name: "Remix", level: 75, icon: "🎵" },
        { name: "React Native", level: 70, icon: "📱" },
        { name: "AWS", level: 75, icon: "☁️" },
        { name: "GCP", level: 65, icon: "☁️" },
        { name: "MySQL", level: 75, icon: "🗄️" },
        { name: "Terraform", level: 70, icon: "🏗️" },
      ],
    },
    {
      title: "Learning (Lv.1)",
      description: "学習中または軽い実装経験があるレベル",
      skills: [
        { name: "Python", level: 60, icon: "🐍" },
        { name: "Docker", level: 65, icon: "🐳" },
        { name: "Playwright", level: 55, icon: "🎭" },
        { name: "Cypress", level: 70, icon: "🌲" },
        { name: "GitHub Actions", level: 75, icon: "⚙️" },
        { name: "Sentry", level: 60, icon: "👁️" },
      ],
    },
  ];
  const softSkills = [
    {
      name: "エンジニアリングマネジメント",
      description: "採用、1on1、チーム目標設定、技術組織運営",
      level: 90,
    },
    {
      name: "プロジェクトマネジメント",
      description: "スクラム導入、タスク管理、進捗管理、技術選定",
      level: 88,
    },
    {
      name: "アーキテクチャ設計",
      description: "システム連携、API設計、技術仕様策定",
      level: 85,
    },
    {
      name: "チームリーダーシップ",
      description: "コードレビュー、技術指導、品質向上、新技術導入",
      level: 87,
    },
  ];
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="mb-6">Skills</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            これまでの経験で身につけた技術スキルとソフトスキルをレベル別にご紹介します。
          </p>
        </div>

        <div className="space-y-12 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-card p-6 rounded-card border border-border animate-fadeIn"
            >
              <div className="mb-6">
                <h3 className="mb-2">{category.title}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3 animate-fadeIn">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{skill.icon}</span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <div className="space-y-1">
                      <Progress value={skill.level} className="h-2" />
                      <div className="flex justify-between">
                        <span className="caption text-muted-foreground">Level</span>
                        <span className="caption text-primary">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card p-6 rounded-card border border-border animate-fadeIn">
          <div className="mb-6">
            <h3 className="mb-2">ソフトスキル</h3>
            <p className="text-muted-foreground">
              技術力だけでなく、チームやビジネスに貢献するためのソフトスキルも重視しています。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {softSkills.map((skill, index) => (
              <div key={index} className="space-y-4 animate-fadeIn">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4>{skill.name}</h4>
                    <span className="caption text-primary">{skill.level}%</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{skill.description}</p>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 pt-16 border-t border-border animate-fadeIn">
          <h3 className="mb-4">継続的な学習</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            技術の進歩に遅れることなく、常に新しい技術やベストプラクティスの学習を心がけています。
            学んだ知識はチームや組織に還元し、共に成長していくことを重視しています。
          </p>
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="stat-value text-primary mb-1">365</div>
              <p className="caption text-muted-foreground">Days Learning</p>
            </div>
            <div>
              <div className="stat-value text-primary mb-1">12</div>
              <p className="caption text-muted-foreground">Certifications</p>
            </div>
            <div>
              <div className="stat-value text-primary mb-1">50+</div>
              <p className="caption text-muted-foreground">Tech Articles Read</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
