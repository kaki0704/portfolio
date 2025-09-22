import type { MetaFunction } from "react-router";
import { Works } from "../components/Works";
export const meta: MetaFunction = () => {
  return [
    { title: "Works - Yuki Yamada" },
    { name: "description", content: "Works and Projects by Yuki Yamada" },
  ];
};
export default function WorksRoute() {
  return <Works />;
}
