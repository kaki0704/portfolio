import { SkillIcon } from "~/components/SkillIcon";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";

export function SkillsGrid() {
  const skillCategories = [
    {
      title: "Expert (Lv.3)",
      description: "業務で積極的に活用し、チームリード・技術選定ができるレベル",
      skills: [
        { name: "Go", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Vue.js", level: 90 },
        { name: "React", level: 85 },
        { name: "Nuxt.js", level: 88 },
        { name: "Git", level: 95 },
      ],
    },
    {
      title: "Proficient (Lv.2)",
      description: "業務で使用経験があり、設計・実装が可能なレベル",
      skills: [
        { name: "Ruby on Rails", level: 75 },
        { name: "Next.js", level: 80 },
        { name: "Remix", level: 75 },
        { name: "React Native", level: 70 },
        { name: "AWS", level: 75 },
        { name: "GCP", level: 65 },
        { name: "MySQL", level: 75 },
        { name: "Terraform", level: 70 },
        { name: "Docker", level: 65 },
        { name: "Playwright", level: 55 },
        { name: "Cypress", level: 70 },
        { name: "GitHub Actions", level: 75 },
        { name: "Sentry", level: 60 },
      ],
    },
    {
      title: "Learning (Lv.1)",
      description: "学習中または軽い実装経験があるレベル",
      skills: [{ name: "Python", level: 60 }],
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
        </div>

        <div className="space-y-12 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="animate-fadeIn">
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3 animate-fadeIn">
                      <div className="flex items-center space-x-3">
                        <SkillIcon name={skill.name} size={24} />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <div className="space-y-1">
                        <Progress value={skill.level} className="h-2" />
                        <div className="flex justify-between">
                          <span className="caption text-[rgb(var(--muted-foreground))]">Level</span>
                          <span className="caption text-[rgb(var(--primary))]">{skill.level}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="animate-fadeIn">
          <CardHeader>
            <CardTitle>ソフトスキル</CardTitle>
            <CardDescription>
              技術力だけでなく、チームやビジネスに貢献するためのソフトスキルも重視しています。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {softSkills.map((skill, index) => (
                <div key={index} className="space-y-4 animate-fadeIn">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h4>{skill.name}</h4>
                      <span className="caption text-[rgb(var(--primary))]">{skill.level}%</span>
                    </div>
                    <p className="text-[rgb(var(--muted-foreground))] text-sm mb-3">
                      {skill.description}
                    </p>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
