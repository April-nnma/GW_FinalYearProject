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
      <header className="fixed top-0 left-0 w-full z-10 bg-white">
        <Header />
      </header>
      <div className="mt-20">
        <Feed />
        <Outlet />
      </div>
    </main>
  );
};
