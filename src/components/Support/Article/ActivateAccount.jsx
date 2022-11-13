import React from "react";
import { Link } from "react-router-dom";
import activeAcc1 from "../../../assets/article/Activate 1.png";
const ActivateAccount = () => {
  return (
    <div className="py-4">
      <div className="mx-10 md:mx-60  mb-10">
        <h1 className="lg:max-w-xl mx-auto text-4xl  text-[#000f38]	lg:text-4xl	mb-10 text-center lg:text-left mt-3 font-bold">
          Activate my account
        </h1>
        <p className="mb-10 text-[#000f38] lg:max-w-xl mx-auto">
          To activate your account you need to process your payment through{" "}
          <br />
          PayPal. You do not have to have a PayPal account to complete your{" "}
          <br />
          transaction. Once, you are at the PayPal site, you have a couple of
          options <br /> for payment types and do not need to have a PayPal
          account in order to <br /> process the payment. You can either choose
          to check out with your PayPal account, credit card, or debit card.
        </p>

        <img
          className="object-center	lg:max-w-sm mx-auto	mb-6"
          src={activeAcc1}
          alt={activeAcc1}
        />
        <p className="lg:max-w-xl mx-auto mb-10 text-[#000f38]">
          Once the payment is processed, you will <br /> be taken back to our
          site and will automatically be logged in.
        </p>

        <p className="lg:max-w-xl mx-auto mb-10 text-[#000f38]">
          If this step is skipped and your account is not activated, you will
          NOT be <br /> able to sign up again using the same email address.
        </p>

        <p className="lg:max-w-xl mx-auto mb-10 text-[#000f38]">
          If this occurs, please contact us using the{" "}
          <Link to="/contact">
            <span className="text-red-600">Contact Page</span>
          </Link>{" "}
          or send an email <br /> to questions@myinterviewpractice.com and we
          will delete your email <br /> address from our system so you can
          register again.
        </p>
      </div>
    </div>
  );
};

export default ActivateAccount;
