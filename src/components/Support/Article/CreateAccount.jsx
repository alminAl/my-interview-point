import React from "react";
import { Link } from "react-router-dom";
import crtAcc1 from "../../../assets/article/Create Account-1.jpg";
import crtAcc2 from "../../../assets/article/Create Account-2.jpg";
import crtAcc3 from "../../../assets/article/Create Account-3.jpg";
const CreateAccount = () => {
  return (
    <div className="py-4">
      <div className="mx-10 md:mx-60  mb-10">
        <h1 className="lg:max-w-xl mx-auto text-4xl  text-[#000f38]	lg:text-4xl	mb-10 text-center lg:text-left mt-3 font-bold">
          Create an account
        </h1>
        <p className="mb-10 text-[#000f38] lg:max-w-xl mx-auto">
          In order to become a plus/premium member you can register here:
          <Link to="https://www.myinterviewpractice.com/register-one">
            {" "}
            <span className="text-red-600">
              {" "}
              https://www.myinterviewpractice.com/register-one/
            </span>
          </Link>
        </p>
        <p className="mb-10 text-[#000f38] lg:max-w-xl mx-auto">
          You can choose between 1 month, 3 months, 6 months, or 1 year of Plus,{" "}
          <br />
          Premium Memberships. This is a one-time payment so you can select a{" "}
          <br />
          duration that works with your interviewing needs.
        </p>
        <img
          className="object-center	lg:max-w-sm mx-auto	mb-6"
          src={crtAcc1}
          alt={crtAcc1}
        />
        <p className="lg:max-w-xl mx-auto mb-10 text-[#000f38]">
          You will be taken to PayPal’s site to complete the transaction. You
          have a <br /> couple of options for payment types and do not need to
          have a PayPal <br /> account in order to process the payment. You can
          either choose to check <br /> out with your PayPal account, credit
          card or debit card.
        </p>
        <img
          className="object-center	lg:max-w-sm mx-auto	mb-6"
          src={crtAcc2}
          alt={crtAcc2}
        />

        <p className="lg:max-w-xl mx-auto mb-10 text-[#000f38]">
          Once the payment is processed, you will be taken back to our site and
          will <br /> automatically be logged in. You will notice that you now
          have a diamond (if you chose Plus) or a crown (if <br /> you chose
          Premium) over your profile picture.
        </p>
        <p className="lg:max-w-xl mx-auto mb-10 text-[#000f38]">
          To view your membership details, click your name to access the menu on{" "}
          <br />
          the top right. Then click “Settings.” On the settings page, you will
          see your <br /> membership status, as well as when your membership
          expires. If you are <br /> unhappy with your membership for any
          reason, please let us know using our Contact Us page.
        </p>

        <img
          className="object-center	lg:max-w-sm mx-auto	mb-6"
          src={crtAcc3}
          alt={crtAcc3}
        />
      </div>
    </div>
  );
};

export default CreateAccount;
