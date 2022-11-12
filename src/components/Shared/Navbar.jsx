import React, { useEffect, useState } from "react";
// import { Avatar, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
// import shallow from "zustand/shallow";
import logo from "../../assets/icons/logo.svg";

import Sidebar from "./Sidebar";


const Navbar = () => {
  
  return (
      <div className="shadow-md lg:shadow-none w-full sticky">
          <div className="flex items-center justify-between mx-5 lg:mx-32 bg-white  py-4 lg:px-10 px-7 ">
            <Sidebar />
                <Link to='/'>
                  <img src={logo} width="150px" height="150px" alt={logo} />
                </Link>
            
            <div className="hidden lg:block">
                <button className=" text-lg font-bold rounded-lg py-2 px-3">
                  <Link to='/login'> Log In</Link>
                </button>
                <button className="bg-red-600 text-white text-lg font-bold rounded-xl py-2 px-3">
                  <Link to='/signup'> Sign Up</Link>
                </button>
            </div>
          </div>
      </div>

  );
};

export default Navbar;
