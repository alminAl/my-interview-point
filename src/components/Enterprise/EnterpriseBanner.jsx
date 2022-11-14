import React from "react";
import { Link } from "react-router-dom";

const EnterpriseBanner = ({ fakedata }) => {
  console.log(fakedata);
  return (
    <div className="grid md:grid-cols-2 items-center  max-w-[1040px] mx-auto lg:grid-cols-2 ">
      <div className="flex flex-col items-center lg:pr-16">
        <div>
          <h1
            className="text-3xl font-bold  px-1 mb-4  text-center"
            style={{ color: "#000f38" }}
          >
            {fakedata.head}
          </h1>
        </div>
        <div>
          <p
            className="text-center"
            style={{
              color: "#000f38",
              fontFamily: "BiotifRegular",
              fontSize: "17px",
              letterSpacing: ".53px",
              lineHeight: "27px",
              margin: "0 0 25px",
            }}
          >
            {fakedata.minhead}
          </p>
        </div>
        <div>
          <Link
            type="button"
            className="text-center font-bold mb-2"
            style={{
              boxShadow: "0 7px 16px 0 rgb(231 48 62 / 25%)",
              height: "46px",
              lineHeight: "44px",
              borderRadius: "12px",
              backgroundColor: "#e7303e",
              color: "#FFF",
              fontSize: "15px",
              width: "162px",
            }}
            to="/"
          >
            Book a Demo
          </Link>
        </div>
      </div>
      <div>
        <img
          src={fakedata.img}
          alt=""
          srcset=""
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default EnterpriseBanner;
