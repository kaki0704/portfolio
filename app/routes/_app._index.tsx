import type { MetaFunction } from "react-router";
import { useNavigate } from "react-router";
import { Home } from "../components/Home";
export const meta: MetaFunction = () => {
  return [
    { title: "Yuki Yamada - Portfolio" },
    { name: "description", content: "ビジネスを加速させる、境界を越えるエンジニアリング" },
  ];
};
export default function AppIndex() {
  const navigate = useNavigate();
  const handleNavigate = (page: string) => {
    navigate(`/${page}`);
  };
  return <Home onNavigate={handleNavigate} />;
}
