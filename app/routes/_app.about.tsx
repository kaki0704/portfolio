import type { MetaFunction } from "react-router";
import { About } from "../components/About";
export const meta: MetaFunction = () => {
  return [{ title: "About - Yuki Yamada" }, { name: "description", content: "About Yuki Yamada" }];
};
export default function AboutRoute() {
  return <About />;
}
