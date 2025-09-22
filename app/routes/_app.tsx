import type { LoaderFunctionArgs } from "react-router";
import { Outlet, useLoaderData, useLocation, useNavigate } from "react-router";
import { Navigation } from "../components/Navigation";
import { getSession } from "../lib/session.server";
export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const currentPage = session.get("currentPage");
  return {
    currentPage,
  };
}
export default function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  useLoaderData<typeof loader>();
  const getCurrentPage = () => {
    const path = location.pathname.slice(1);
    return path || "home";
  };
  const handleNavigate = (page: string) => {
    if (page === "home") {
      navigate("/");
    } else {
      navigate(`/${page}`);
    }
  };
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation currentPage={getCurrentPage()} onNavigate={handleNavigate} />
      <main className="relative">
        <Outlet />
      </main>
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="mb-4">Yuki Yamada</h3>
              <p className="text-muted-foreground mb-4">
                ビジネスを加速させる、境界を越えるエンジニアリング
              </p>
              <p className="text-muted-foreground text-sm">
                © 2024 Yuki Yamada. All rights reserved.
              </p>
            </div>
            <div>
              <h4 className="mb-4">ナビゲーション</h4>
              <ul className="space-y-2">
                {[
                  { id: "about", label: "About" },
                  { id: "works", label: "Works" },
                  { id: "skills", label: "Skills" },
                  { id: "blog", label: "Blog" },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => handleNavigate(item.id)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4">連絡先</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:yuki.yamada@example.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
