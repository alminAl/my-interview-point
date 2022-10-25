import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import { useSignup } from "../../hooks/useSignup";
const SignupComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const { signup, error, isLoading } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(name, email, phone, password);
  };
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
          onSubmit={handleSubmit}
          action="#"
          className="w-full flex flex-col justify-center rounded-lg border-[#E7303E]"
        >
          <div className="mb-4">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-[#E7303E]"
            />
          </div>
          <div className="mb-4">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-[#E7303E]"
            />
          </div>
          <div className="mb-4">
            <input
              type="mobile"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              placeholder="Mobile"
              className="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-[#E7303E]"
            />
          </div>
          <div className="mb-4">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-[#E7303E]"
            />
          </div>

          <button
            disabled={isLoading}
            className="tracking-wide font-semibold bg-[#E7303E] text-gray-100 w-full py-4 rounded-lg hover:bg-[#eb0619] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
          >
            <svg
              className="w-6 h-6 -ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="8.5" cy="7" r="4" />
              <path d="M20 8v6M23 11h-6" />
            </svg>
            <span className="ml-3">Sign Up</span>
          </button>
          {error && <div className="text-red-500">{error}</div>}
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
