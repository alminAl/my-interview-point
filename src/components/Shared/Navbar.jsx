import React, { useState } from "react";
import { Avatar, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import shallow from "zustand/shallow";
import logo from "../../assets/icons/logo.svg";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import useProfileStore from "../../store/useProfileStore";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  // glabal storage
  const [userProfile] = useProfileStore(
    (state) => [state.userProfile],
    shallow
  );

  let Links = [
    { name: "Home", link: "/" },
    { name: "Pricing", link: "/" },
    { name: "Enterprise", link: "/" },
    { name: "Training", link: "/" },
    { name: "Support", link: "/" },
    { name: "Contact us", link: "/contact" },
    { name: "Blogs", link: "/blog" },
    { account: "LOGIN/SIGNUP", link: "/login" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md lg:shadow-none w-full sticky">
      <div className="lg:flex items-center justify-between bg-white py-4 lg:px-10 px-7">
        <Link to="/">
          <div>
            <img src={logo} width="100px" height="100px" alt={logo} />

            <div
              onClick={() => setOpen(!open)}
              className="text-4xl absolute right-8 top-6 text-red-600 cursor-pointer lg:hidden"
            >
              <ion-icon name={open ? "close" : "menu"}></ion-icon>
            </div>
          </div>
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="text-4xl absolute right-8 top-6 text-red-600 cursor-pointer lg:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`lg:flex lg:items-center md:pb-0 pb-7 absolute lg:static bg-red-200 lg:bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-4 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name || link.account}
              className="lg:ml-6 text-base lg:my-0 my-7"
            >
              {user ? (
                <Link
                  to={link.link}
                  className="text-red-600 duration-500 hover:text-black"
                >
                  {link.name}
                </Link>
              ) : (
                <>
                  <Link
                    to={link.link}
                    className="text-red-600 duration-500 hover:text-black font-bold"
                  >
                    {link.name}
                  </Link>
                  <Link
                    to={link.link}
                    className={
                      link.account === "LOGIN/SIGNUP"
                        ? "border-2 text-red-600 border-red-600 px-4 py-2 rounded-lg uppercase hover:text-white hover:bg-red-600 duration-200"
                        : "text-red-600 duration-500 hover:text-black"
                    }
                  >
                    {link.account}
                  </Link>
                </>
              )}
            </li>
          ))}
          {user && userProfile && (
            <>
              <Link to={"/dashboard/profile"}>
                <MenuItem className="hover:bg-transparent">
                  <Avatar
                    alt={userProfile?.name}
                    src={
                      userProfile?.profile_image
                        ? userProfile?.profile_image
                        : "#"
                    }
                  />{" "}
                  <span>{userProfile?.name}</span>
                </MenuItem>
              </Link>
              <li className="lg:flex items-center space-x-3 text-base lg:my-0 my-7">
                <span className="text-base  text-black font-sans font-semibold"></span>
                <button
                  onClick={() => logout()}
                  className="border-2 text-white bg-red-600 px-4 py-2 rounded-lg uppercase hover:text-white hover:bg-red-600 duration-200"
                >
                  logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
