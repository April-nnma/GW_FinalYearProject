import { useForm } from "react-hook-form";
import axios from "axios";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  firstname: z.string().min(2, { message: "Required" }),
  lastname: z.string().min(2, { message: "Required" }),
  email: z.string().email({ message: "Invalid email format" }),
  address: z.string().min(10),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  //dateofbirth: z.date(),
  gender: z.string().min(1, { message: "Required" }),
});

export const RegisterTemplate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (e, data) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/user/register",
        data
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="bg-white">
      <div className="flex justify-center h-screen">
        <div
          className="hidden bg-cover lg:block lg:w-4/6"
          style={{
            backgroundImage:
              "url(https://t3.ftcdn.net/jpg/03/94/94/92/360_F_394949282_FOyFFN53l0juz58dXuKjzl1CQ3Ruuq90.jpg)",
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
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
                  alt="#"
                />
              </div>
            </div>

            <div className="mt-8">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstname"
                      className="block mb-2 text-sm text-gray-800 dark:text-gray-800"
                    >
                      First Name
                    </label>
                    <input
                      {...register("firstname")}
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="First Name"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                    />
                    {/* {errors.firstname?.message && (
                      <p>{errors.firstname?.message}</p>
                    )} */}
                  </div>
                  <div>
                    <label
                      htmlFor="lastname"
                      className="block mb-2 text-sm text-gray-800 dark:text-gray-800"
                    >
                      Last Name
                    </label>
                    <input
                      {...register("lastname", { required: true })}
                      type="text"
                      name="lastname"
                      id="lastname"
                      placeholder="Last Name"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                    />
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
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                  />
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
                      name="password"
                      id="password"
                      placeholder="Your Password"
                      className="block w-full px-4 py-2 pr-10 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                    />
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
                    {...register("dateofbirth")}
                    type="date"
                    name="date"
                    id="date"
                    placeholder="Date of Birth"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                  />
                </div>
                <div className="flex justify-start items-center gap-3 my-3">
                  <input
                    type="radio"
                    name="radio"
                    id="male"
                    value="male"
                    // checked={gender === "male"}
                    // onChange={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor="male" className="text-gray-700 font-semibold">
                    Male
                  </label>
                  <input
                    type="radio"
                    name="radio"
                    id="female"
                    value="female"
                    // checked={gender === "female"}
                    // onChange={(e) => setGender(e.target.value)}
                  />
                  <label
                    htmlFor="female"
                    className="text-gray-700 font-semibold"
                  >
                    Female
                  </label>
                  <input
                    type="radio"
                    name="radio"
                    id="other"
                    value="other"
                    // checked={gender === "custom"}
                    // onChange={(e) => setGender(e.target.value)}
                  />
                  <label
                    htmlFor="custom"
                    className="text-gray-700 font-semibold"
                  >
                    Other
                  </label>
                </div>

                <button
                  type="submit"
                  className=" mt-7 w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus:bg-green-400 focus:ring focus:ring-green-300 focus:ring-opacity-50"
                >
                  Create New Account 123
                </button>
              </form>
              {/*
              <form onSubmit={handleSubmit((d) => console.log(d))}>
                <div className="mt-2">
                  {/* <div className="border-t border-gray-300"></div> 
                  <button className=" mt-7 w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus:bg-green-400 focus:ring focus:ring-green-300 focus:ring-opacity-50">
                    Create New Account
                  </button>
                </div>
              </form>
              */}

              <div className="flex justify-center mx-auto mt-10">
                <img
                  className="w-30 h-30 sm:h-10 sm:w-30 "
                  src="https://cdn.pixabay.com/photo/2021/12/06/13/45/meta-6850393_960_720.png"
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
export default RegisterTemplate;
