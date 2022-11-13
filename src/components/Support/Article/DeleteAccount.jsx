import React from "react";
import dltAcc1 from "../../../assets/article/Delete Account-1.png";
import dltAcc2 from "../../../assets/article/Delete Account 2.png";
import dltAcc3 from "../../../assets/article/Delete Account 3.png";
import dltAcc4 from "../../../assets/article/Delete Account 4.png";
const DeleteAccount = () => {
  return (
    <div className="py-4">
      <div className="mx-10 md:mx-60  mb-10">
        <h1 className="lg:max-w-xl mx-auto text-4xl  text-[#000f38]	lg:text-4xl	mb-10 text-center lg:text-left mt-3 font-bold">
          Delete my account
        </h1>
        <p className="mb-10 text-[#000f38] lg:max-w-xl mx-auto">We are sorry to see you go!</p>
        <p className="mb-10 text-[#000f38] lg:max-w-xl mx-auto">
          You can delete your account by clicking on your name in the top right{" "}
          <br />
          hand corner and then “Settings”.
        </p>
        <img
          className="object-center	lg:max-w-sm mx-auto	mb-6"
          src={dltAcc1}
          alt={dltAcc1}
        />
        <p className="lg:max-w-xl mx-auto mb-10 text-[#000f38]">
          Then scroll down to the bottom of the page and click the “Delete Your{" "}
          <br /> Account” button.
        </p>
        <img
          className="object-center	lg:max-w-sm mx-auto	mb-6"
          src={dltAcc2}
          alt={dltAcc2}
        />
        
     <p className="lg:max-w-xl mx-auto mb-10 text-[#000f38]">Select “Yes, Delete” to confirm.</p>

     <img
        className="object-center	lg:max-w-sm mx-auto	mb-6"
        src={dltAcc3}
        alt={dltAcc3}
      />

     <p className="mb-10 text-[#000f38] lg:max-w-xl mx-auto">
        You will then be directed to a page where you have to enter your
        password <br /> to delete your account. Once you enter in the correct
        password and click <br /> “submit” your account will be deleted.
      </p>
      <img
        className="object-center	lg:max-w-sm mx-auto	mb-6"
        src={dltAcc4}
        alt={dltAcc4}
      />
 <p className="mb-10 text-[#000f38] lg:max-w-xl mx-auto">
 You will then be sent an email confirming that you want to delete your <br /> account. Click on the verification link provided in the email. You will be <br /> taken to a page where you will have to enter your password to verify. Once <br /> you enter your password and hit “Confirm Delete” your account will be <br /> deleted.

      </p>
      </div>

     
      
    </div>
  );
};

export default DeleteAccount;
