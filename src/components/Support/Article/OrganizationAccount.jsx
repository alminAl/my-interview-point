import React from "react";
import { Link } from "react-router-dom";

const OrganizationAccount = () => {
  return (
    <div className="py-4">
      <div className="mx-10 md:mx-60  mb-10">
        <h1 className="lg:max-w-xl mx-auto text-4xl  text-[#000f38]	lg:text-4xl	mb-10 text-center lg:text-left mt-3 font-bold">
          Setup an account through your organization
        </h1>
        <p className="mb-10 text-[#000f38] lg:max-w-xl mx-auto">
          To create an account under your organization, you will register using
          their <br /> My Interview Practice affiliated link, not from the
          MyInterviewPractice.com <br /> site.
        </p>

        {/* <img
          className="object-center	lg:max-w-sm mx-auto	mb-6"
          src={activeAcc1}
          alt={activeAcc1}
        /> */}
        <p className="lg:max-w-xl mx-auto mb-10 text-[#000f38]">
          You can obtain this link from your organization or by contacting us
          through <br /> our{" "}
          <Link to="/contact">
            <span className="text-red-600">Contact Page</span>
          </Link>{" "}
          form and we can send it to you.
        </p>

        <p className="lg:max-w-xl mx-auto mb-10 text-[#000f38]">
          From your organization's My Interview Practice affiliated link,
          complete <br /> the registration form.
        </p>

        <ul className="lg:max-w-xl mx-auto mb-10 text-[#000f38]">
          <li className="mb-2">Name</li>
          <li className="mb-2">
            Email (If you have a designated organization email, use this email
            for registration)
          </li>
          <li className="mb-2">Password</li>
        </ul>

        <p className="lg:max-w-xl mx-auto mb-10 text-[#000f38]">
          Once you have completed the registration form you will receive a{" "}
          <br />
          verification email to verify your account. Once your email is verified
          your <br /> account is activated and ready for you to use.
        </p>
        <p className="lg:max-w-xl mx-auto mb-10 text-[#000f38]">
          If you do not receive a verification email please{" "}
          <Link to="/contact">
            <span className="text-red-600">Contact Page</span>
          </Link>{" "}
          , and we will <br /> verify your email and activate your account.
        </p>
      </div>
    </div>
  );
};

export default OrganizationAccount;
