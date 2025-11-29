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
      <div className="fixed inset-0 z-0">
        <img
          src="/images/background.png"
          alt="Background"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/80" />
      </div>

      <div className="relative z-10">
        <Navigation currentPage={getCurrentPage()} onNavigate={handleNavigate} />
        <main className="relative">
          <Outlet />
        </main>
        <footer className="border-t border-border py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <h3 className="mb-4">Yamada Yuki</h3>
                <p className="text-muted-foreground text-sm">
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
                        className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer"
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
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/kaki0704"
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
    </div>
  );
}
