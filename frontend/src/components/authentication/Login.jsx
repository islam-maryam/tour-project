


import facebookLogo from '../../../src/assets/image/facebook.png';
import githubLogo from '../../../src/assets/image/github.png';
import googleLogo from '../../../src/assets/image/google.png';
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { baseUrl } from "../../config/config";
import { Link } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const url = `http://${baseUrl}/api/users/signin`;
      const {
        data: { token },
      } = await axios.post(url, data);

      localStorage.setItem("token", token);

      setSuccess("Login successful!");
      setError(null);

      const decodedToken = jwtDecode(token);
      if (decodedToken.role === "visitor") {
        window.location.href = "http://localhost:3000/";
        return;
      }

      // Visit to admin panel
      navigate("/dashboard");
    } catch (error) {
      setError("Login failed. Please try again.");
      setSuccess(null);

      setTimeout(() => {
        setError(null);
      }, 8000);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };




  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">


      <div className=" w-[300px] sm:w-[400px] lg:w-[600px] max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="mb-8 text-center text-2xl md:text-4xl font-bold text-lime-800">
          Welcome!
        </h2>
        <p class="text-[17px] mt-4 mb-4 text-[#090c09] font-semibold">If you are already a member, easily log in.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-lime-600 focus:border-lime-600 sm:text-sm"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">Email is required</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password:
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="password"
              {...register("password", { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-lime-600 focus:border-lime-600 sm:text-sm"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">Password is required</p>
            )}

          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={togglePasswordVisibility}
              className="h-4 w-4 text-lime-600 border-gray-300 rounded focus:ring-lime-600"
            />
            <label htmlFor="showPassword" className="ml-2 block text-sm text-gray-900">
              Show Password
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-gradient-to-r from-lime-400 to-green-700 hover:from-pink-500 hover:to-purple-500 text-white rounded-lg shadow-md text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-600"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
          <hr className="border-gray-400" />
          <p className="text-center text-sm">OR</p>
          <hr className="border-gray-400" />
        </div>
        <br />

        <div className="flex justify-center space-x-4">
          <div className=" rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 ">
            <img src={facebookLogo} alt="Facebook" />
          </div>

          <div className="rounded-full w-10 h-10 flex items-center justify-center  hover:scale-110  ">
            <img src={googleLogo} alt="GitHub" />
          </div>

          <div className="rounded-full w-10 h-10 flex items-center justify-center   hover:scale-110">
            <img src={githubLogo} alt="Google" />
          </div>


        </div>





        <div class="mt-5 text-xs border-b border-[#163a1f] py-4 text-[#163a1f]">
          <a href="#">Forgot your password?</a>
        </div>
        <div class="mt-3 text-xs flex justify-between items-center text-[#163a1f]">
          <p>Don't have an account?</p>
          <button class="py-2 px-5 bg-gradient-to-r from-indigo-600 from-30% via-sky-500 via-60% to-purple-500 to-90% font-bold text2xl border text-white rounded-xl hover:scale-110 duration-300"><Link to="/registration">
            Registration
          </Link></button>
        </div>



        {error && (
          <p className="mt-4 text-sm text-red-600 font-bold text-center">{error}</p>
        )}
        {success && (
          <p className="mt-4 text-sm text-green-600 font-bold text-center">{success}</p>
        )}
      </div>
    </div >
  );
};

export default Login;


