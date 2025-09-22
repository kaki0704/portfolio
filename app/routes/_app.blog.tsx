import type { MetaFunction } from "react-router";
import { Blog } from "../components/Blog";
export const meta: MetaFunction = () => {
  return [
    { title: "Blog - Yuki Yamada" },
    { name: "description", content: "Blog posts by Yuki Yamada" },
  ];
};
export default function BlogRoute() {
  return <Blog />;
}
