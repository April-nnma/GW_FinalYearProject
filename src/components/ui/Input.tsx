// import { HTMLInputTypeAttribute } from "react";
// import { UseFormRegister } from "react-hook-form";

// type InputProps = {
//   label?: string;
//   id?: string;
//   name?: string;
//   type?: HTMLInputTypeAttribute;
//   register?: UseFormRegister<any>;
//   errors?: string;
//   placeholder?: string;
//   className?: string;
//   classNameLabel?: string;
// };

// export const Input = ({
//   label,
//   id,
//   name,
//   type = "text",
//   register,
//   errors,
//   placeholder,
//   className,
//   classNameLabel,
// }: InputProps) => {
//   return (
//     <div className={className}>
//       {!!label && <label htmlFor={id} className={classNameLabel}></label>}

//       <input
//         //{...register("fullName")}
//         id={id}
//         {...register?.(name)}
//         type={type}
//         placeholder={placeholder}
//         className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
//       />
//       {/* {errors?.fullName?.message && (
//         <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
//       )} */}
//       {!!errors && <p className="text-red-500 text-sm mt-1">{errors}</p>}
//     </div>
//   );
// };
