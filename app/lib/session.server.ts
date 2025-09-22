import { createCookieSessionStorage } from "react-router";

type SessionData = {
  currentPage?: string;
  theme?: "light" | "dark";
};
type SessionFlashData = {
  message?: string;
};
const { getSession, commitSession, destroySession } = createCookieSessionStorage<
  SessionData,
  SessionFlashData
>({
  cookie: {
    name: "__session",
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
    sameSite: "lax",
    secrets: ["s3cret1"],
    secure: true,
  },
});
export { getSession, commitSession, destroySession };
