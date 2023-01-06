import { Drawer } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// import { useLogout } from "../../hooks/useLogout";

const Sidebar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Enterprise", link: "/enterprise" },
    { name: "Training", link: "/training" },
    { name: "Quiz", link: "/quiz" },
    { name: "FAQs", link: "/faq" },
    { name: "Support & Video Tutorials", link: "/support" },
    { name: "Contact us", link: "/contact" },
    { name: "Blogs", link: "/blog" },
    { account: "Login", link: "/login" },
    { account: "Signup", link: "/signup" },
  ];
  const [open, setOpen] = useState(false);
  // const { logout } = useLogout();
  const { user } = useAuthContext();
  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        <MenuIcon style={{ height: "50px", width: "50px" }} />
      </button>
      <Drawer anchor={"left"} open={open} onClose={() => setOpen(!open)}>
        {/* menu list */}
        <div className="h-screen bg-[#E7303E] w-72 lg:w-80">
          <button className="mb-10" onClick={() => setOpen(!open)}>
            <CloseIcon
              className="text-white"
              style={{
                height: "50px",
                width: "50px",
                position: "absolute",
                right: "0px",
                top: "10px",
              }}
            />
          </button>
          <ul
            className={` items-center md:pb-0 space-y-5"
                            }`}
          >
            {Links.map((link) => (
              <li
                key={link.name || link.account}
                className="pl-6 py-3 text-xl lg:text-2xl hover:bg-white"
              >
                {user ? (
                  <Link
                    to={link.link}
                    className="text-white duration-500 text-xl lg:text-2xl block hover:text-red-600"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <>
                    <Link
                      to={link.link}
                      className="text-white duration-500 text-xl block hover:text-red-600 font-bold"
                    >
                      {link.name}
                    </Link>
                    <Link
                      to={link.link}
                      className={
                        link.account === "Login" || link.account === "Signup"
                          ? "text-white block hover:text-red-600 lg:hidden text-xl lg:text-2xl font-bold"
                          : "text-white block hover:text-red-600 "
                      }
                    >
                      {link.account}
                    </Link>
                  </>
                )}
              </li>
            ))}
            {/* {user && userProfile && (
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
                        )} */}
          </ul>
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
