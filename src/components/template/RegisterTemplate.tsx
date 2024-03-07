import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "services";
import { RegisterSchema, RegisterSchemaType } from "schema";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { PATH } from "constant";

export const RegisterTemplate = () => {
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
            <div className="mt-4">
              <FormRegister />
              <div className="flex justify-center mx-auto mt-10">
                <img
                  className="w-30 h-30 sm:h-10  "
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
const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    mode: "onChange",
    resolver: zodResolver(RegisterSchema),
  });

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    try {
      registerUser(data);
      toast.success("Register successfully");
      //redirect về page login
      navigate(PATH.login);
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.content || "An error occurred");
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="grid gap-4">
        <div>
          <label
            htmlFor="fullName"
            className="block mb-2 text-sm text-gray-800 dark:text-gray-800"
          >
            Full Name
          </label>
          <input
            {...register("fullName")}
            type="text"
            placeholder="Full Name"
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
          />
          {errors?.fullName?.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm text-gray-800 dark:text-gray-800"
        >
          Email Address
        </label>
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
        />
        {errors?.email?.message && (
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
            {...register("password")}
            type="password"
            placeholder="Your Password"
            className="block w-full px-4 py-2 pr-10 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#bbb"
            stroke="#bbb"
            className="w-[18px] h-[18px] absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            viewBox="0 0 128 128"
          >
            <path
              d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
              data-original="#000000"
            ></path>
          </svg>
        </div>
      </div>
      <div className="mt-6">
        <label
          htmlFor="date"
          className="block mb-2 text-sm text-gray-800 dark:text-gray-800"
        >
          Date of Birth
        </label>
        <input
          {...register("dateOfBirth")}
          type="date"
          placeholder="Date of Birth"
          className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
        />
        {errors.dateOfBirth && (
          <p className="text-red-500 text-sm mt-1">
            {errors.dateOfBirth.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        className=" mt-7 w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus:bg-green-400 focus:ring focus:ring-green-300 focus:ring-opacity-50"
      >
        Create New Account
      </button>
    </form>
  );
};
