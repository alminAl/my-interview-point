
import React from "react";
import { Link } from "react-router-dom";

const HideDiv = () => {
  return (
    <div className="bg-[#ECF1F8] text-center rounded-2xl">
      <div className="py-10">
        <h3 className="text-xl text-[#000f38] font-bold mb-5">Accounting Job Titles</h3>
        <button className="bg-white mx-2 mb-2 hover:bg-red-600 rounded-xl px-4 hover:text-white">
          <Link to="/">Accountant</Link>
        </button>
        <button className="bg-white mx-2 mb-2 hover:bg-red-600 rounded-xl px-4 hover:text-white">
          <Link to="/">Auditor</Link>
        </button>
        <button className="bg-white mx-2 mb-2 hover:bg-red-600 rounded-xl px-4 hover:text-white">
          <Link to="/">Bookeeper</Link>
        </button>
        <button className="bg-white mx-2 mb-2 hover:bg-red-600 rounded-xl px-4 hover:text-white">
          <Link to="/">Tax Accountant</Link>
        </button>
        <button className="bg-white mx-2 mb-2 hover:bg-red-600 rounded-xl px-4 hover:text-white">
          <Link to="/">Tueasure</Link>
        </button>
      </div>
    </div>
  );
};

export default HideDiv;
