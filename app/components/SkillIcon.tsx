import type { SimpleIcon } from "simple-icons";
import {
  siAmazonwebservices,
  siCypress,
  siDocker,
  siGit,
  siGithubactions,
  siGo,
  siGooglecloud,
  siMysql,
  siNextdotjs,
  siNuxtdotjs,
  siPlaywright,
  siPython,
  siReact,
  siRemix,
  siRubyonrails,
  siSentry,
  siTerraform,
  siTypescript,
  siVuedotjs,
} from "simple-icons";

interface SkillIconProps {
  name: string;
  size?: number;
}

// Map skill names to simple-icons
const iconMap: Record<string, SimpleIcon> = {
  Go: siGo,
  TypeScript: siTypescript,
  "Vue.js": siVuedotjs,
  React: siReact,
  "Nuxt.js": siNuxtdotjs,
  Git: siGit,
  "Ruby on Rails": siRubyonrails,
  "Next.js": siNextdotjs,
  Remix: siRemix,
  "React Native": siReact,
  AWS: siAmazonwebservices,
  GCP: siGooglecloud,
  MySQL: siMysql,
  Terraform: siTerraform,
  Python: siPython,
  Docker: siDocker,
  Playwright: siPlaywright,
  Cypress: siCypress,
  "GitHub Actions": siGithubactions,
  Sentry: siSentry,
};

export function SkillIcon({ name, size = 24 }: SkillIconProps) {
  const icon = iconMap[name];

  if (!icon) {
    return <span className="text-muted-foreground">?</span>;
  }

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      className="text-foreground"
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
}
