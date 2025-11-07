import type { MetaFunction } from "react-router";
import { ExperienceSection } from "./ExperienceSection";

export const meta: MetaFunction = () => {
  return [{ title: "About - Yuki Yamada" }, { name: "description", content: "About Yuki Yamada" }];
};

export default function AboutRoute() {
  return <ExperienceSection />;
}
