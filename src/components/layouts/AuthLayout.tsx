import { useAuth } from "hooks";
import { Navigate } from "react-router-dom";

export const AuthLayout = () => {
  //const { token } = useSelector((state: RootState) => state.userService);
  const { token } = useAuth();
  if (token) {
    return <Navigate to="/" replace />;
  }
  return null;
};
