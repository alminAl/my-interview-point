import React from "react";
import { Link } from "react-router-dom";
import EnterpriseBanner from "./EnterpriseBanner";
import "./enterprise.css";

const Nomoresheduling = () => {
  const fakedata = {
    img: "https://myinterviewpractice.com/images/empower-img.webp",
    head: "Empower everyone with discounted rates for groups.",
    minhead:
      "We offer lower rates for groups so you can easily provide access to all your members.",
  };
  return (
    <div>
      <div className=" max-w-[1040px] sm:w-[400px]  md:w-[400px] lg:w-[1040px] mx-auto flex  flex-col-reverse lg:flex-row  justify-center items-center">
        <div>
          {" "}
          <img
            src="https://myinterviewpractice.com/images/custom-built-interview.webp"
            alt=""
            srcset=""
          />
        </div>
        <div>
          <h1
            className="font-bold text-center"
            style={{
              color: "#000f38",
              fontSize: "34px",
              letterSpacing: ".4px",
              lineHeight: "42px",
            }}
          >
            No more scheduling
          </h1>
          <h1
            className="text-center"
            style={{
              color: "#000f38",
              fontSize: "34px",
              fontWeight: "700",
              letterSpacing: ".4px",
              lineHeight: "42px",
              marginBottom: "20px",
              marginTop: "0px",
            }}
          >
            No more meetings.
          </h1>
          <p
            className="text-center"
            style={{
              color: " #001652",
              fontFamily: "BiotifRegular",
              fontSize: "18px",
              letterSpacing: ".21px",
              lineHeight: "28px",
            }}
          >
            Say goodbye to tedious one-on-one meet ups and put your mock
            interviews on auto-pilot with realistic simulated interviews.
          </p>
        </div>
      </div>
      <div className=" max-w-[1040px] sm:w-[400px]  md:w-[400px] lg:w-[1040px] mx-auto flex  flex-col-reverse lg:flex-row-reverse  justify-center items-center">
        <div>
          {" "}
          <img
            src="https://myinterviewpractice.com/images/complete-interview.webp"
            alt=""
            srcset=""
          />
        </div>
        <div className="flex flex-col items-center">
          <h1
            className="text-center"
            style={{
              color: "#000f38",
              fontSize: "34px",
              fontWeight: "700",
              letterSpacing: ".4px",
              lineHeight: "42px",
              marginBottom: "20px",
              marginTop: "0px",
            }}
          >
            Mock interviews they can take on their own.
          </h1>
          <p
            className="text-center"
            style={{
              color: " #001652",
              fontFamily: "BiotifRegular",
              fontSize: "18px",
              letterSpacing: ".21px",
              lineHeight: "28px",
            }}
          >
            By self-conducting mock interviews, your members will be empowered
            to approach interview training confidently, instead of putting it
            off.
          </p>
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
      <div className="pt-14 pb-20 mx-auto  max-w-[1040px] sm:w-[400px]  md:w-[400px] lg:w-[1040px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center">
          <img
            className="pr-10"
            src="https://myinterviewpractice.com/images/rdassignImg.webp"
            alt=""
            srcset=""
          />
          <div>
            <h1
              className="font-bold "
              style={{
                color: "#000f38",
                fontSize: "24px",
                letterSpacing: ".1px",
                lineHeight: "32px",
              }}
            >
              Instantly assign to everyone
            </h1>
            <p
              className=""
              style={{
                color: " #001652",
                fontFamily: "BiotifRegular",
                fontSize: "18px",
                letterSpacing: ".21px",
                lineHeight: "28px",
              }}
            >
              Send out mock interview assignments to your entire group in a
              matter of seconds.
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <img
            className="pr-10"
            src="https://myinterviewpractice.com/images/rdmockImg.webp"
            alt=""
            srcset=""
          />
          <div>
            <h1
              className="font-bold "
              style={{
                color: "#000f38",
                fontSize: "24px",
                letterSpacing: ".1px",
                lineHeight: "32px",
              }}
            >
              Instantly assign to everyone
            </h1>
            <p
              className=""
              style={{
                color: " #001652",
                fontFamily: "BiotifRegular",
                fontSize: "18px",
                letterSpacing: ".21px",
                lineHeight: "28px",
              }}
            >
              Send out mock interview assignments to your entire group in a
              matter of seconds.
            </p>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: " #F0F1F4" }}>
        <div className=" max-w-[1040px] sm:w-[400px]  md:w-[400px] lg:w-[1040px] mx-auto flex  flex-col-reverse lg:flex-row  justify-center items-center">
          <div>
            {" "}
            <img
              src="https://myinterviewpractice.com/images/ntiImg.webp"
              alt=""
              srcset=""
            />
          </div>
          <div>
            <h1
              className="font-bold text-center"
              style={{
                color: "#000f38",
                fontSize: "34px",
                letterSpacing: ".4px",
                lineHeight: "42px",
              }}
            >
              Build custom interviews with your own questions.
            </h1>
            <p
              className="text-center"
              style={{
                color: " #001652",
                fontFamily: "BiotifRegular",
                fontSize: "18px",
                letterSpacing: ".21px",
                lineHeight: "28px",
              }}
            >
              Run the interview simulator using your own questions and quickly
              assign your custom-built interview to your entire group.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-14 pb-20 mx-auto  max-w-[1040px] sm:w-[400px]  md:w-[400px] lg:w-[1040px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center">
          <img
            className="pr-10"
            src="https://myinterviewpractice.com/images/take-mock.webp"
            alt=""
            srcset=""
          />
          <div>
            <h1
              className="font-bold "
              style={{
                color: "#000f38",
                fontSize: "24px",
                letterSpacing: ".1px",
                lineHeight: "32px",
              }}
            >
              Take mock interviews off your to-do list.
            </h1>
            <p
              className=""
              style={{
                color: " #001652",
                fontFamily: "BiotifRegular",
                fontSize: "18px",
                letterSpacing: ".21px",
                lineHeight: "28px",
              }}
            >
              We recreate high-stress interviews using real questions from
              industry professionals so you have one less thing to worry about
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <img
            className="pr-10"
            src="https://myinterviewpractice.com/images/career-success.webp"
            alt=""
            srcset=""
          />
          <div>
            <h1
              className="font-bold "
              style={{
                color: "#000f38",
                fontSize: "24px",
                letterSpacing: ".1px",
                lineHeight: "32px",
              }}
            >
              Enable career success.
            </h1>
            <p
              className=""
              style={{
                color: " #001652",
                fontFamily: "BiotifRegular",
                fontSize: "18px",
                letterSpacing: ".21px",
                lineHeight: "28px",
              }}
            >
              With unlimited access to virtual mock interviews, your members can
              develop their interview skills quickly and give their career a
              jumpstart.
            </p>
          </div>
        </div>
      </div>
      <EnterpriseBanner fakedata={fakedata}></EnterpriseBanner>
      <div className="relative">
        <div
          style={{
            backgroundRepeat: "no-repeat",
          }}
          className="testi "
        >
          <div className="pt-14 pb-20 mx-auto  max-w-[1040px] sm:w-[400px]  md:w-[400px] lg:w-[1040px]">
            <h1
              className="text-center "
              style={{
                color: "#FFF",
                fontSize: "45px",
                fontFamily: "BiotifBold",
                letterSpacing: ".32px",
                lineHeight: "44px",
                margin: "0 0 50px",
              }}
            >
              "This tool provided my students an efficient way to conduct a mock
              interview assignment and for me to evaluate their responses and
              non-verbal <br /> communication skills. It was very easy to
              provide feedback directly on their responses.”
            </h1>
            <p>
              <span className=" flex justify-center items-center text-white">
                <img
                  className="mr-4"
                  src="https://myinterviewpractice.com/uploads/233613587_1114842444_Northwest_Univer.webp"
                  alt=""
                  srcset=""
                />
                -Darrell Hobson, Professor at Northwest University{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 items-center  max-w-[1040px] mx-auto lg:grid-cols-2 ">
        <div>
          <img
            src="https://myinterviewpractice.com/images/teacher.webp"
            alt=""
            srcset=""
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex flex-col items-center lg:pr-16">
          <div>
            <h1
              className="text-3xl font-bold  px-1 mb-4  text-center"
              style={{ color: "#000f38" }}
            >
              Instantly provide mock interviews for everyone in your
              organization.
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
              Give everybody in your group access to realistic mock interviews
              without ever needing to lift a finger.
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
      </div>
    </div>
  );
};

export default Nomoresheduling;
