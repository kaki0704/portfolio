import type { MetaFunction } from "react-router";
import { SkillsGrid } from "./SkillsGrid";

export const meta: MetaFunction = () => {
  return [
    { title: "Skills - Yuki Yamada" },
    { name: "description", content: "Skills and Technologies" },
  ];
};

export default function SkillsRoute() {
  return <SkillsGrid />;
}
