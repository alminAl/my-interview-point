import React from "react";
import manageAcc1 from "../../../assets/article/Manage Settings 1.png";
import manageAcc2 from "../../../assets/article/Manage Settings 2.png";
import manageAcc3 from "../../../assets/article/Manage Settings 3.png";

const Manage = () => {
  return (
    <div className="py-4">
      <div className="mx-10 md:mx-60  mb-10">
        <h1 className="lg:max-w-xl mx-auto text-4xl  text-[#000f38]	lg:text-4xl	mb-10 text-center lg:text-left mt-3 font-bold">
          Manage your settings
        </h1>
        <p className="mb-10 text-[#000f38] lg:max-w-xl mx-auto">
          You can manage your account by clicking on your name in the top right{" "}
          <br /> hand corner and then “Settings”.
        </p>

        <img
          className="object-center	lg:max-w-sm mx-auto	mb-6"
          src={manageAcc1}
          alt={manageAcc1}
        />
        <p className="lg:max-w-xl mx-auto mb-10 text-[#000f38]">
          From the settings page you can do the following:
        </p>

        <p className="lg:max-w-xl mx-auto mb-10 text-[#000f38]">
          If this step is skipped and your account is not activated, you will
          NOT be <br /> able to sign up again using the same email address.
        </p>

        <ol className="lg:max-w-xl mx-auto mb-10 text-[#000f38]">
          <li className="mb-4">1. Edit your name.</li>
          <li className="mb-4">2.Upload a photo of yourself.</li>
          <li className="mb-4">3. Change your password.</li>
          <li className="mb-4">
            4. View what type of membership you have and when your membership
            expires.
          </li>
          <li className="mb-4">5. Delete your account.</li>
        </ol>
        <img
          className="object-center	lg:max-w-sm mx-auto	mb-6"
          src={manageAcc2}
          alt={manageAcc2}
        />
        <img
          className="object-center	lg:max-w-sm mx-auto	mb-6"
          src={manageAcc3}
          alt={manageAcc3}
        />
       
      </div>
    </div>
  );
};

export default Manage;
