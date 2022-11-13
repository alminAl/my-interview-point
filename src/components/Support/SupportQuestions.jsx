import React from "react";
import account from "../../assets/support img/account.svg";
import activate from "../../assets/support img/activate.svg";
import setup from "../../assets/support img/setup.svg";
import system from "../../assets/support img/system.svg";
import resolves from "../../assets/support img/resolve.svg";
import manage from "../../assets/support img/manage.svg";
import { Link } from "react-router-dom";
const SupportQuestions = () => {
  return (
    <div className="py-10">
      <div className="mx-10 md:mx-60  mb-10">
        <h1 className="text-4xl	 lg:text-4xl	 text-center lg:text-left mt-3 mb-2 font-bold text-[#000f38]">
          Common Questions
        </h1>
        <div className="lg:grid lg:grid-cols-3 gap-10">
          <div className="mb-8 lg:mb-0 mx-auto w-full lg:mx-0 ">
            <img src={account} alt={account} className="mx-auto lg:mx-0" />
            <h6 className="text-lg lg:text-xl text-center lg:text-left mt-3 mb-2 font-bold text-[#000f38]">
              Create an account
            </h6>
            <p className="text-base text-center lg:text-left text-red-600 ">
              Read the Article
            </p>
          </div>
          <div className="mb-8 lg:mb-0 mx-auto w-full lg:mx-0 ">
            <img src={activate} alt={activate} className="mx-auto lg:mx-0" />
            <h6 className="text-lg text-center lg:text-left lg:text-xl mt-3 mb-2 font-bold text-[#000f38]">
              Activate my account
            </h6>
            <p className="text-base text-center lg:text-left text-red-600 ">
              Read the Article
            </p>
          </div>
          <div className="mb-8 lg:mb-0 mx-auto w-full lg:mx-0 ">
            <img src={setup} alt={setup} className="mx-auto lg:mx-0" />
            <h6 className="text-lg text-center lg:text-left lg:text-xl mt-3 mb-2 font-bold text-[#000f38]">
              Setup an account through your organization
            </h6>
            <p className="text-base text-center lg:text-left text-red-600 ">
              Read the Article
            </p>
          </div>
          <div className="mb-8 lg:mb-0 mx-auto w-full lg:mx-0 ">
            <img src={system} alt={system} className="mx-auto lg:mx-0" />
            <h6 className="text-lg text-center lg:text-left lg:text-xl mt-3 mb-2 font-bold text-[#000f38]">
              System requirements
            </h6>
            <p className="text-base text-center lg:text-left text-red-600 ">
              Read the Article
            </p>
          </div>
          <div className="mb-8 lg:mb-0 mx-auto w-full lg:mx-0 ">
            <img src={resolves} alt={resolves} className="mx-auto lg:mx-0" />
            <h6 className="text-lg text-center lg:text-left lg:text-xl mt-3 mb-2 font-bold text-[#000f38]">
              Resolve issues with microphone/webcam
            </h6>
            <p className="text-base text-center lg:text-left text-red-600 ">
              Read the Article
            </p>
          </div>
          <div className="mb-8 lg:mb-0 mx-auto w-full lg:mx-0 ">
            <img src={manage} alt={manage} className="mx-auto lg:mx-0" />
            <h6 className="text-lg text-center lg:text-left lg:text-xl mt-3 mb-2 font-bold text-[#000f38]">
              Manage your settings
            </h6>
            <p className="text-base text-center lg:text-left text-red-600 ">
              Read the Article
            </p>
          </div>
          
        </div>
        <Link to="deleteAccount">
        <p className=" text-center mt-12  text-red-600 ">
          Delete my account
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SupportQuestions;
