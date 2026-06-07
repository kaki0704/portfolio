import { useId } from "react";
import type { LoaderFunctionArgs } from "react-router";
import { Outlet, useLoaderData, useLocation, useNavigate } from "react-router";
import { Navigation } from "~/components/Navigation";
import { getSession } from "~/lib/session.server";
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
  const mainId = useId();
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
      <div className="app-background fixed inset-0 z-0" />
      <Navigation currentPage={getCurrentPage()} onNavigate={handleNavigate} />
      <div className="relative z-10">
        <a href={`#${mainId}`} className="skip-link">
          Skip to content
        </a>
        <main id={mainId} className="relative lg:pl-72">
          <Outlet />
        </main>
        <footer className="border-t border-border/70 py-12 lg:ml-72">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
              <div>
                <p className="eyebrow mb-4">Portfolio</p>
                <h3 className="mb-4">Yamada Yuki</h3>
                <p className="mt-5 text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Yuki Yamada. All rights reserved.
                </p>
              </div>
              <div>
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
                        className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://www.facebook.com/yuuki.yamada.351"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/kaki0704"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70"
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
    </div>
  );
}
