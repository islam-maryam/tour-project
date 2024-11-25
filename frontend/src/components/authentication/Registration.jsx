


// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { baseUrl } from "../../config/config";

// const Registration = () => {
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const [showPassword, setShowPassword] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     getValues,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       const url = `http://${baseUrl}/api/users/signup`;
//       const response = await axios.post(url, data);
//       setSuccess("Registration successful!");
//       setError(null);
//     } catch (error) {
//       setError("Registration failed. Please try again.");
//       setSuccess(null);

//       setTimeout(() => {
//         setError(null);
//       }, 8000);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
//         <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
//           Registration
//         </h2>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           <div className="flex flex-col">
//             <label htmlFor="email" className="text-sm font-semibold mb-2">
//               Email:
//             </label>
//             <input
//               type="email"
//               id="email"
//               {...register("email", {
//                 required: "Email is required",
//                 pattern: {
//                   value: /^\S+@\S+\.\S+$/,
//                   message: "Enter a valid email",
//                 },
//               })}
//               className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500"
//             />
//             {errors.email && (
//               <span className="text-red-500 text-sm mt-1">
//                 {errors.email.message}
//               </span>
//             )}
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="password" className="text-sm font-semibold mb-2">
//               Password:
//             </label>
//             <input
//               type={showPassword ? "text" : "password"}
//               id="password"
//               {...register("password", {
//                 required: "Password is required",
//               })}
//               className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500"
//             />
//             {errors.password && (
//               <span className="text-red-500 text-sm mt-1">
//                 {errors.password.message}
//               </span>
//             )}
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="confirmPassword" className="text-sm font-semibold mb-2">
//               Confirm Password:
//             </label>
//             <input
//               type={showPassword ? "text" : "password"}
//               id="confirmPassword"
//               {...register("confirmPassword", {
//                 required: "Confirm your password",
//                 validate: (value) =>
//                   value === getValues("password") || "Passwords do not match",
//               })}
//               className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500"
//             />
//             {errors.confirmPassword && (
//               <span className="text-red-500 text-sm mt-1">
//                 {errors.confirmPassword.message}
//               </span>
//             )}
//           </div>

//           <div className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               id="showPassword"
//               checked={showPassword}
//               onChange={() => setShowPassword(!showPassword)}
//               className="cursor-pointer"
//             />
//             <label
//               htmlFor="showPassword"
//               className="text-sm cursor-pointer select-none"
//             >
//               Show Password
//             </label>
//           </div>

//           <div className="text-center">
//             <button
//               type="submit"
//               className="bg-lime-500 hover:bg-lime-600 text-white font-semibold px-6 py-2 rounded-lg transition-all"
//             >
//               Submit
//             </button>
//           </div>
//         </form>

//         {error && (
//           <p className="text-red-500 text-center font-semibold mt-4">
//             {error}
//           </p>
//         )}
//         {success && (
//           <p className="text-lime-600 text-center font-semibold mt-4">
//             {success}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Registration;











import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { baseUrl } from "../../config/config";

const Registration = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const url = `http://${baseUrl}/api/users/signup`;
      const response = await axios.post(url, data);
      setSuccess("Registration successful!");
      setError(null);
    } catch (error) {
      setError("Registration failed. Please try again.");
      setSuccess(null);

      setTimeout(() => {
        setError(null);
      }, 8000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative p-8 w-[300px] sm:w-[400px] lg:w-[450px]">
        <div className="absolute inset-0 rounded-lg border-4 border-transparent animate-glow-border pointer-events-none"></div>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Registration
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-semibold mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Enter a valid email",
                  },
                })}
                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-sm font-semibold mb-2">
                Password:
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password", {
                  required: "Password is required",
                })}
                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
              {errors.password && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="confirmPassword" className="text-sm font-semibold mb-2">
                Confirm Password:
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: "Confirm your password",
                  validate: (value) =>
                    value === getValues("password") || "Passwords do not match",
                })}
                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
              {errors.confirmPassword && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="cursor-pointer"
              />
              <label
                htmlFor="showPassword"
                className="text-sm cursor-pointer select-none"
              >
                Show Password
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-lime-500 hover:bg-lime-600 text-white font-semibold px-6 py-2 rounded-lg transition-all"
              >
                Submit
              </button>
            </div>
          </form>

          {error && (
            <p className="text-red-500 text-center font-semibold mt-4">
              {error}
            </p>
          )}
          {success && (
            <p className="text-lime-600 text-center font-semibold mt-4">
              {success}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Registration;
