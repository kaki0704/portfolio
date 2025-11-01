import GithubFillIcon from "remixicon-react/GithubFillIcon";
import LinkedinBoxFillIcon from "remixicon-react/LinkedinBoxFillIcon";
import MailFillIcon from "remixicon-react/MailFillIcon";

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
              href="https://github.com/kaki0704"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <GithubFillIcon size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <LinkedinBoxFillIcon size={24} />
            </a>
            <a
              href="mailto:yuki@example.com"
              className="p-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <MailFillIcon size={24} />
            </a>
          </div>
          <div className="space-x-4">
            <button
              type="button"
              onClick={() => onNavigate("about")}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-button hover:opacity-90 transition-opacity cursor-pointer"
            >
              About Me
            </button>
            <button
              type="button"
              onClick={() => onNavigate("works")}
              className="border border-border px-6 py-3 rounded-button hover:bg-muted transition-colors cursor-pointer"
            >
              View Works
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
