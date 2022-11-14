import React from "react";
import { Link } from "react-router-dom";

const FindAnswer = () => {
  return (
    <div className="bg-[#000f38] mt-10">
      <div className="min-h-full mx-10 md:mx-52 py-16">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
          <div className="lg:ml-5 mb-5 lg:mb-0">
            <h1 className="text-4xl text-center lg:text-4xl text-[#ffffff] font-bold mb-6">
              Still can’t find an answer?.
            </h1>
            <p className="mb-6 text-sm text-center text-[#ffffff]">
              We’re here to help out. Contact us and we’ll be sure to get back
              to you <br /> as soon as we can.
            </p>
            <Link to="/contact">
              <button className="bg-red-600   block mx-auto  rounded-lg shadow-2xl text-white leading-10 font-bold px-3 py-2">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindAnswer;
