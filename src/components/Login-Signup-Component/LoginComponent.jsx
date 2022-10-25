import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import { useLogin } from "../../hooks/useLogin";
const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="mt-6 w-full flex justify-center items-center">
      <div className="bg-[#E7303E] w-full sm:w-1/2 md:w-9/12 lg:w-1/2 shadow-md flex flex-col md:flex-row items-center mx-5 sm:m-0 rounded-lg">
        <div className="w-full md:w-1/2 hidden md:flex flex-col justify-center items-center text-white ">
          <h1 className="text-3xl">Hello</h1>
          <p className="text-5xl font-extrabold bg-white text-[#E7303E]">
            Welcome!
          </p>
        </div>
        <div className="bg-white w-full md:w-1/2 flex flex-col items-center py-32 px-8">
          <p className="text-[#E7303E] text-5xl font-extrabold mb-2">LOGIN</p>
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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
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
              type="submit"
              value="Submit"
              className="bg-[#E7303E] font-bold text-white focus:outline-none rounded p-3"
            >
              Login
            </button>
            {error && <div className="text-red-500">{error}</div>}
            <p className="text-center mt-2">
              Want to Create an Accout?{" "}
              <Link to="/signup">
                <span className="text-[#E7303E]">Signup</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
