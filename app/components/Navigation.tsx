import { BookOpen, Briefcase, Github, Home, Menu, Tags, User, Wrench, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}
export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "works", label: "Works", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Wrench },
    { id: "blog", label: "Blog", icon: BookOpen },
  ];
  const tags = ["Go", "TypeScript", "React", "Vue", "Cloud"];
  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
  };
  return (
    <>
      <aside className="fixed bottom-0 left-0 top-0 z-50 hidden w-72 border-r border-border/70 bg-[rgb(var(--sidebar))]/96 px-5 py-6 lg:flex lg:flex-col">
        <button
          type="button"
          onClick={() => handleNavClick("home")}
          className="mb-10 flex cursor-pointer items-center gap-3 text-left text-2xl font-semibold tracking-normal text-foreground transition-colors hover:text-[rgb(var(--primary))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--ring))]/70"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border/80">
            Y
          </span>
          yamady
        </button>

        <nav aria-label="Primary Navigation" className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                type="button"
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-3 text-left text-base font-semibold transition-all duration-200 hover:bg-muted/70 hover:text-[rgb(var(--primary))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--ring))]/70 ${
                  currentPage === item.id
                    ? "bg-[rgb(var(--primary))]/18 text-foreground ring-1 ring-[rgb(var(--primary))]/35"
                    : "text-muted-foreground"
                }`}
              >
                <Icon size={19} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="mt-10">
          <div className="mb-3 flex items-center gap-2 text-sm font-bold text-foreground">
            <Tags size={16} />
            Tags
          </div>
          <div className="space-y-2">
            {tags.map((tag) => (
              <div key={tag} className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="h-2.5 w-2.5 rounded-full border border-[rgb(var(--primary))]/70" />
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto space-y-2">
          <div className="mb-3 text-sm font-bold text-foreground">Socials</div>
          <a
            href="https://github.com/kaki0704"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted/70 hover:text-[rgb(var(--primary))]"
          >
            <span className="flex items-center gap-3">
              <Github size={18} />
              GitHub
            </span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </aside>

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border/70 bg-background/92 backdrop-blur-xl lg:hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              type="button"
              onClick={() => handleNavClick("home")}
              className="cursor-pointer font-display text-2xl font-extrabold tracking-normal text-foreground transition-colors hover:text-[rgb(var(--primary))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--ring))]/70"
            >
              yamady
            </button>

            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`cursor-pointer rounded-button px-3.5 py-2 text-sm font-semibold transition-all duration-200 hover:bg-muted/70 hover:text-[rgb(var(--primary))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--ring))]/70 ${
                    currentPage === item.id
                      ? "bg-[rgb(var(--primary))]/10 text-[rgb(var(--primary))] shadow-[inset_0_0_0_1px_rgb(var(--primary)/0.22)]"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="cursor-pointer rounded-button p-2 text-foreground transition-colors hover:bg-muted hover:text-[rgb(var(--primary))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--ring))]/70 md:hidden"
              aria-label="Toggle navigation"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="border-t border-border/70 md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full cursor-pointer rounded-button px-3 py-2 text-left transition-colors hover:bg-muted/70 hover:text-[rgb(var(--primary))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--ring))]/70 ${
                      currentPage === item.id
                        ? "bg-[rgb(var(--primary))]/10 text-[rgb(var(--primary))]"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
