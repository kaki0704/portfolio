import type { MetaFunction } from "react-router";
import { ProjectsGrid } from "./ProjectsGrid";

export const meta: MetaFunction = () => {
  return [
    { title: "Works - Yuki Yamada" },
    { name: "description", content: "Works and Projects by Yuki Yamada" },
  ];
};

export default function WorksRoute() {
  return <ProjectsGrid />;
}
