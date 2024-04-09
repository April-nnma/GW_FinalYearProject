import { useAuth } from "hooks";
import { Feed, Header } from "../../components";
import { Navigate, Outlet } from "react-router-dom";

export const MainLayout = () => {
  const { token } = useAuth();
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return (
    <main>
      <Header />
      <Feed />
      <Outlet />
    </main>
  );
};
