import { useSelector } from "react-redux";
import { RootState } from "store";

export const useAuth = () => {
  const { token, userLogin } = useSelector(
    (state: RootState) => state.userService
  );

  return { token, user: userLogin };
};
//trong 1 cái hook gọi đc 1 cái hook
//trong 1 cái hàm ko gọi đc 1 cái hook
