import { Github, Linkedin, Mail } from "lucide-react";

interface HomeProps {
  onNavigate: (page: string) => void;
}
export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center relative">
        <div className="text-center px-4 max-w-4xl mx-auto animate-fadeIn">
          <h1 className="mb-6">Hi, I'm Yamada Yuki 🐢</h1>
          <div className="mb-8">
            <h2 className="text-muted-foreground mb-4">Software Engineer, Engineering Manager</h2>
          </div>
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:yuki@example.com"
              className="p-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
          <div className="space-x-4">
            <button
              type="button"
              onClick={() => onNavigate("about")}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-button hover:opacity-90 transition-opacity"
            >
              About Me
            </button>
            <button
              type="button"
              onClick={() => onNavigate("works")}
              className="border border-border px-6 py-3 rounded-button hover:bg-muted transition-colors"
            >
              View Works
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
