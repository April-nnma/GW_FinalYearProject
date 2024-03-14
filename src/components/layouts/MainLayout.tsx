import { Feed, Header } from "../../components";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <main>
      <Header />
      <Feed />
      <Outlet />
    </main>
  );
};
