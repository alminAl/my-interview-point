import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
const SignupComponent = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="bg-white w-full md:w-1/2 flex flex-col items-center py-6 px-8">
        <p className="text-[#E7303E] text-5xl font-extrabold mb-2">SIGNUP</p>
        <img
          className="mb-5"
          src={logo}
          width="100px"
          height="100px"
          alt={logo}
        />
        <form
          action="#"
          className="w-full flex flex-col justify-center rounded-lg border-[#E7303E]"
        >
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-[#E7303E]"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-[#E7303E]"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Mobile"
              className="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-[#E7303E]"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-[#E7303E]"
            />
          </div>

          <button class="mt-5 tracking-wide font-semibold bg-[#E7303E] text-gray-100 w-full py-4 rounded-lg hover:bg-[#eb0619] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
            <svg
              class="w-6 h-6 -ml-2"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="8.5" cy="7" r="4" />
              <path d="M20 8v6M23 11h-6" />
            </svg>
            <span class="ml-3">Sign Up</span>
          </button>
          <p className="text-center mt-2">
            Already have an Accout?{" "}
            <Link to="/login">
              <span className="text-[#E7303E]">login</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupComponent;
