import { PATH } from "constant";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginSchema, LoginSchemaType } from "schema";
import { userService } from "services";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/Button";
import { handleError } from "utils";
import { RootState, useAppDispatch } from "store";
import { loginThunk } from "store/userService";
import { useSelector } from "react-redux";

export const LoginTemplate = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-center h-screen">
        <div
          className="hidden bg-cover lg:block lg:w-4/6"
          style={{
            backgroundImage: "url(../../../public/images/image1.jpg)",
          }}
        >
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h1 className="text-8xl font-bold text-white sm:text-6xl transition-all duration-300 ease-in-out hover:text-blue-500">
                facebook
              </h1>

              <p className="max-w-xl mt-3 text-gray-300">
                Connect with friends and the world around you on facebook
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-3/6">
          <div className="flex-1">
            <div className="text-center">
              <div className="flex justify-center mx-auto">
                <img
                  className="w-12 h-12 sm:h-12 sm:w-12"
                  src="../../../public/images/logo.png"
                  alt="#"
                />
              </div>
            </div>
            <div className="mt-8">
              <FormLogin />
              <div className="flex justify-center mx-auto mt-10">
                <img
                  className="w-30 h-30 sm:w-30 md:w-20 lg:h-10 min-sm:w-10"
                  src="../../../public/images/meta.png"
                  alt="#"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    mode: "onChange",
    resolver: zodResolver(LoginSchema),
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isFetchingLogin } = useSelector(
    (state: RootState) => state.userService
  );

  const onSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
    dispatch(loginThunk(data))
      .unwrap()
      .then(() => {
        //xử lý action thành công
        navigate("/");
        toast.success("Login successfully");
      })
      .catch(() => {
        //xử lý action thất bại
      });

    // try {
    //   await userService.login(data);
    //   //toast.success("Register successfully");
    //   //redirect về page login
    //   navigate(PATH.login);
    // } catch (error) {
    //   handleError(error, "Email already exists");
    //   // console.log(error);
    //   // if (error.response && error.response.status === 400) {
    //   //   toast.error("Email already exists");
    //   // } else {
    //   //   // toast.error(error?.response?.data?.content || "An error occurred");
    //   //   handleError(error);
    //   // }
    // }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm text-gray-800 dark:text-gray-800"
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          {...register("email")}
          id="email"
          placeholder="example@gmail.com"
          className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      <div className="mt-6">
        <div className="flex justify-between mb-2">
          <label
            htmlFor="password"
            className="text-sm text-gray-800 dark:text-gray-800"
          >
            Password
          </label>
        </div>
        <div className="relative">
          <input
            type="password"
            name="password"
            {...register("password")}
            id="password"
            placeholder="Your Password"
            className="block w-full px-4 py-2 pr-10 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center mt-6">
        {/* <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
          Login
        </button> */}
        <Button
          type="submit"
          colorScheme="messenger"
          className="!w-full"
          isLoading={isFetchingLogin}
        >
          Login
        </Button>
      </div>
      <div className="mt-6">
        <div className="border-t border-gray-300"></div>
        <Button
          className="mt-6 !w-full"
          colorScheme="whatsapp"
          onClick={() => navigate(PATH.register)}
        >
          Create New Account
        </Button>
      </div>
    </form>
  );
};
