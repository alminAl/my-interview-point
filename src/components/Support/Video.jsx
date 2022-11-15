import React from "react";

const Video = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="mx-10 md:mx-60  mb-10">
        <small>WATCH</small>
        <h1 className="text-4xl mb-4 text-[#000f38]	lg:text-4xl	 text-center lg:text-left mt-3 font-bold">
          Getting Started Videos
        </h1>
        <div className="lg:grid lg:grid-cols-3 gap-10">
          <div className="mb-8 lg:mb-0 mx-auto w-full lg:mx-0 ">
            <div
              className="relative h-0 overflow-hidden max-w-full w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                title="a1"
                src="https://www.youtube.com/embed/Ht45lw8VvWo"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                alt="video"
              ></iframe>
            </div>
            <h6 className="text-lg lg:text-xl text-center lg:text-left mt-3 mb-2 font-bold text-[#000f38]">
              Introduction to My Interview Practice
            </h6>
            <p className="text-base text-center lg:text-left text-[#000f38] ">
              Take a tour through our platform to see how it can help you ace
              your upcoming interviews.
            </p>
          </div>
          <div className="mb-8 lg:mb-0 mx-auto w-full lg:mx-0 ">
            <div
              className="relative h-0 overflow-hidden max-w-full w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                title="a2"
                src="https://www.youtube.com/embed/fwJ8wvNXqbk"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                alt="video"
              ></iframe>
            </div>
            <h6 className="text-lg lg:text-xl text-center lg:text-left mt-3 mb-2 font-bold text-[#000f38]">
              Introduction to My Interview Practice
            </h6>
            <p className="text-base text-center lg:text-left text-[#000f38] ">
              Take a tour through our platform to see how it can help you ace
              your upcoming interviews.
            </p>
          </div>
          <div className="mb-8 lg:mb-0 mx-auto w-full lg:mx-0 ">
            <div
              className="relative h-0 overflow-hidden max-w-full w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                title="a3"
                src="https://www.youtube.com/embed/XbOxofiez8Q"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                alt="video"
              ></iframe>
            </div>
            <h6 className="text-lg lg:text-xl text-center lg:text-left mt-3 mb-2 font-bold text-[#000f38]">
              How to Take Your First Practice Interview
            </h6>
            <p className="text-base text-center lg:text-left text-[#000f38] ">
              Step-by-step instructions for taking mock interviews to ensure you
              are taking advantage of all the features.
            </p>
          </div>
          <div className="mb-8 lg:mb-0 mx-auto w-full lg:mx-0 ">
            <div
              className="relative h-0 overflow-hidden max-w-full w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                title="a4"
                src="https://www.youtube.com/embed/SXrrsxb29V0"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                alt="video"
              ></iframe>
            </div>
            <h6 className="text-lg lg:text-xl text-center lg:text-left mt-3 mb-2 font-bold text-[#000f38]">
              How to Review Interviews and Share with Others
            </h6>
            <p className="text-base text-center lg:text-left text-[#000f38] ">
              Learn how to review your completed interviews and then share them
              out with others for feedback.
            </p>
          </div>
          <div className="mb-8 lg:mb-0 mx-auto w-full lg:mx-0 ">
            <div
              className="relative h-0 overflow-hidden max-w-full w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                title="a5"
                src="https://www.youtube.com/embed/aiZin5KAFeU"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                alt="video"
              ></iframe>
            </div>
            <h6 className="text-lg lg:text-xl text-center lg:text-left mt-3 mb-2 font-bold text-[#000f38]">
              How to Provide Feedback on a Shared Interview
            </h6>
            <p className="text-base text-center lg:text-left text-[#000f38] ">
              Overview on how to provide feedback when someone shares an
              interview with you.
            </p>
          </div>
          <div className="mb-8 lg:mb-0 mx-auto w-full lg:mx-0 ">
            <div
              className="relative h-0 overflow-hidden max-w-full w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                title="a6"
                src="https://www.youtube.com/embed/odo7dYTIPJk"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                alt="video"
              ></iframe>
            </div>
            <h6 className="text-lg lg:text-xl text-center lg:text-left mt-3 mb-2 font-bold text-[#000f38]">
              How to Use the Training Program
            </h6>
            <p className="text-base text-center lg:text-left text-[#000f38] ">
              Learn how our training program works to ensure you are prepared
              and stand out at your next interview.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
