interface SkillIconProps {
  name: string;
  size?: number;
}

interface IconConfig {
  slug: string;
  variant?: "original" | "plain" | "line" | "original-wordmark" | "plain-wordmark";
}

// Map skill names to devicon configurations
const iconMap: Record<string, IconConfig> = {
  Go: { slug: "go", variant: "original-wordmark" },
  TypeScript: { slug: "typescript", variant: "original" },
  "Vue.js": { slug: "vuejs", variant: "original" },
  React: { slug: "react", variant: "original" },
  "Nuxt.js": { slug: "nuxtjs", variant: "original" },
  Git: { slug: "git", variant: "original" },
  "Ruby on Rails": { slug: "rails", variant: "plain-wordmark" },
  "Next.js": { slug: "nextjs", variant: "original" },
  Remix: { slug: "remix", variant: "line" },
  "React Native": { slug: "react", variant: "original" },
  AWS: { slug: "amazonwebservices", variant: "original-wordmark" },
  GCP: { slug: "googlecloud", variant: "original" },
  MySQL: { slug: "mysql", variant: "original-wordmark" },
  Terraform: { slug: "terraform", variant: "original" },
  Python: { slug: "python", variant: "original" },
  Docker: { slug: "docker", variant: "original" },
  Playwright: { slug: "playwright", variant: "original" },
  Cypress: { slug: "cypressio", variant: "original" },
  "GitHub Actions": { slug: "githubactions", variant: "original" },
  Sentry: { slug: "sentry", variant: "original" },
};

export function SkillIcon({ name, size = 24 }: SkillIconProps) {
  const config = iconMap[name];

  if (!config) {
    return <span className="text-muted-foreground">?</span>;
  }

  // Special case for Remix - use official brand asset
  if (name === "Remix") {
    return (
      <img
        src="https://remix.run/_brand/remix-letter-glowing.svg"
        alt={name}
        width={size}
        height={size}
        className="inline-block"
      />
    );
  }

  const variant = config.variant || "original";
  const iconUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${config.slug}/${config.slug}-${variant}.svg`;

  return (
    <img
      src={iconUrl}
      alt={name}
      width={size}
      height={size}
      className="inline-block"
      onError={(e) => {
        // Fallback to plain variant if specified variant doesn't exist
        if (variant !== "plain") {
          e.currentTarget.src = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${config.slug}/${config.slug}-plain.svg`;
        }
      }}
    />
  );
}
