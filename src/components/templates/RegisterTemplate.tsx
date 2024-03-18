import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userService } from "services";
import { RegisterSchema, RegisterSchemaType } from "schema";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { PATH } from "constant";
import { handleError } from "utils";
import { Button } from "../ui/Button";
import { Center } from "@chakra-ui/react";

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

  const onSubmit: SubmitHandler<RegisterSchemaType> = async (data) => {
    try {
      await userService.register(data);
      toast.success("Register successfully");
      //redirect về page login
      navigate(PATH.login);
    } catch (error) {
      handleError(error, "Email already exists");
      // console.log(error);
      // if (error.response && error.response.status === 400) {
      //   toast.error("Email already exists");
      // } else {
      //   // toast.error(error?.response?.data?.content || "An error occurred");
      //   handleError(error);
      // }
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4">
        <div className="mt-6">
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
        {/* <Input
          label="Full Name"
          placeholder="Full Name"
          id="fullName"
          name="fullName"
          errors={errors?.fullName.message}
          register={register}
        /> */}
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
        <label
          htmlFor="password"
          className="block mb-2 text-sm text-gray-800 dark:text-gray-800"
        >
          Password
        </label>

        <input
          {...register("password")}
          type="password"
          placeholder="Your Password"
          className="block w-full px-4 py-2 pr-10 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
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
      {/* <button
        type="submit"
        className=" mt-7 w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus:bg-green-400 focus:ring focus:ring-green-300 focus:ring-opacity-50"
      >
        Create New Account
      </button> */}
      <Center>
        <Button type="submit" colorScheme="whatsapp" className="mt-7 !w-full">
          Create New Account
        </Button>
      </Center>
    </form>
  );
};