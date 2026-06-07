import FacebookBoxFillIcon from "remixicon-react/FacebookBoxFillIcon";
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import LinkedinBoxFillIcon from "remixicon-react/LinkedinBoxFillIcon";

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const tags = ["Go", "TypeScript", "React", "Vue", "Cloud", "Management"];
  const posts = [
    {
      label: "Works",
      title: "fuyukaki-ui",
      meta: "React UI component library",
      page: "works",
      backgroundClassName: "bg-left",
    },
    {
      label: "Works",
      title: "News Gathering",
      meta: "Nuxt / Firebase news app",
      page: "works",
      backgroundClassName: "bg-center",
    },
    {
      label: "Experience",
      title: "Cytometa の開発と技術組織づくり",
      meta: "Engineering manager / Product engineer",
      page: "about",
      backgroundClassName: "bg-right",
    },
  ];

  return (
    <section className="min-h-[100dvh] px-5 pb-24 pt-24 sm:px-8 lg:px-14 lg:pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex justify-end">
          <button
            type="button"
            onClick={() => onNavigate("blog")}
            className="text-muted-foreground transition-colors hover:text-[rgb(var(--primary))]"
          >
            Blog
          </button>
        </div>

        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,26rem)] lg:items-center">
          <div>
            <h1 className="mb-6 text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02]">Yamada Yuki</h1>

            <div className="mb-9 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border/80 px-3 py-1.5 text-sm text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => onNavigate("works")}
                className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-lg bg-[rgb(var(--primary))] px-6 py-3 font-semibold text-[rgb(var(--primary-foreground))] transition-colors hover:bg-[rgb(var(--primary))]/90"
              >
                Worksを見る
              </button>
              <button
                type="button"
                onClick={() => onNavigate("about")}
                className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-lg border border-border/80 px-6 py-3 font-semibold text-foreground transition-colors hover:border-[rgb(var(--primary))] hover:text-[rgb(var(--primary))]"
              >
                経歴を見る
              </button>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://github.com/kaki0704"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-[rgb(var(--primary))]"
                aria-label="GitHub"
              >
                <GithubFillIcon size={22} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-[rgb(var(--primary))]"
                aria-label="LinkedIn"
              >
                <LinkedinBoxFillIcon size={22} />
              </a>
              <a
                href="https://www.facebook.com/yuuki.yamada.351"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-[rgb(var(--primary))]"
                aria-label="Facebook"
              >
                <FacebookBoxFillIcon size={22} />
              </a>
            </div>
          </div>

          <div className="relative min-h-[320px]">
            <img
              src="/images/fuyukaki-ui-screen.png"
              alt="fuyukaki-ui project screen"
              className="absolute right-0 top-0 w-[78%] rotate-3 rounded-2xl border border-border/70 object-cover shadow-none"
            />
            <img
              src="/images/news-gathering-screen.png"
              alt="News Gathering project screen"
              className="absolute bottom-0 left-0 w-[70%] -rotate-2 rounded-2xl border border-border/70 object-cover shadow-none"
            />
          </div>
        </div>

        <div className="mt-24">
          <h2 className="mb-8 text-3xl">Featured</h2>
          <div className="grid gap-4 lg:grid-cols-3">
            {posts.map((post) => (
              <button
                type="button"
                key={post.title}
                onClick={() => onNavigate(post.page)}
                className="group relative min-h-56 overflow-hidden rounded-2xl border border-border/80 bg-[rgb(var(--card))] p-0 text-left transition-colors hover:border-[rgb(var(--primary))]/70"
              >
                <div
                  className={`absolute inset-0 bg-[url('/images/featured-card-bg.webp')] bg-cover opacity-72 transition-transform duration-700 group-hover:scale-105 ${post.backgroundClassName}`}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(var(--background)/0.2),rgb(var(--background)/0.78)),radial-gradient(circle_at_20%_0%,rgb(var(--primary)/0.2),transparent_16rem)]" />
                <div className="relative flex min-h-56 flex-col justify-end p-6">
                  <div className="mb-4 text-sm font-semibold text-[rgb(var(--primary))]">
                    {post.label}
                  </div>
                  <h3 className="mb-4 text-xl">{post.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{post.meta}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
