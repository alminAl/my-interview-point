import React from "react";

const Requirement = () => {
  return (
    <div className="py-4">
      <div className="mx-10 md:mx-60  mb-10">
        <h1 className="lg:max-w-xl mx-auto text-4xl  text-[#000f38]	lg:text-4xl	mb-10 text-center lg:text-left mt-3 font-bold">
          System requirements
        </h1>
        <p className="mb-10 text-[#000f38] lg:max-w-xl mx-auto">
          The Interview Simulator tool is completely web based so you do not
          need <br /> to download anything on your computer. It will work on
          Windows and Mac <br /> OS on any desktop, tablet or mobile device.
        </p>

        <p className="mb-10 text-[#000f38] lg:max-w-xl mx-auto">
          We suggest using Google Chrome and Mozilla Firefox. For optimal <br />
          performance please ensure you have the latest version of Chrome or{" "}
          <br />
          Firefox.
        </p>
        <p className="mb-10 text-[#000f38] lg:max-w-xl mx-auto">
          The Interview Simulator will work on Safari, but the performance is
          not as <br /> optimal as the other browsers. We do not support Edge or
          Internet <br /> Explorer due to compatibility issues with the webcam
          and microphone.
        </p>
      </div>
    </div>
  );
};

export default Requirement;
