import React from "react";
import resolve1 from "../../../assets/article/Webcam Detection 1.png";
import resolve2 from "../../../assets/article/Webcam Detection 2.png";
import resolve3 from "../../../assets/article/Webcam Detection 3.png";
import resolve4 from "../../../assets/article/Webcam Detection 4.png";
import resolve5 from "../../../assets/article/Webcam Detection 5.png";
import resolve6 from "../../../assets/article/Webcam Detection 6.png";
import resolve7 from "../../../assets/article/Webcam Detection 7.png";
import resolve8 from "../../../assets/article/Webcam Detection 8.png";
import resolve9 from "../../../assets/article/Webcam Detection 9.png";
const Resolve = () => {
  return (
    <div className="py-4">
      <div className="mx-10 md:mx-60  mb-10">
        <h1 className="lg:max-w-xl mx-auto text-4xl  text-[#000f38]	lg:text-4xl	mb-10 text-center lg:text-left mt-3 font-bold">
          Resolve issues with microphone/webcam
        </h1>
        <p className="mb-10 text-[#000f38] lg:max-w-xl mx-auto">
          When the Interview Simulator cannot detect your webcam and <br />{" "}
          microphone you may receive the following errors:
        </p>

        <img
          className="object-center	lg:max-w-sm mx-auto	mb-6"
          src={resolve1}
          alt={resolve1}
        />
        <p className="lg:max-w-xl mx-auto mb-10 text-[#000f38]">
          In order to fix this problem you can try the following steps:
        </p>

        <p className="lg:max-w-xl mx-auto mb-10 text-[#000f38]">
          First - ensure that you have “allowed” the Microphone & Camera to be
          used - this could pop up at the top of your browser:
        </p>
        <img
          className="object-center	lg:max-w-sm mx-auto	mb-6"
          src={resolve2}
          alt={resolve2}
        />
        <img
          className="object-center	lg:max-w-sm mx-auto	mb-6"
          src={resolve3}
          alt={resolve3}
        />
        <p className="lg:max-w-xl mx-auto mb-10 text-[#000f38]">
          If you did not get this pop up, go to the browser settings (three dots
          on the <br /> top right in Google Chrome) and navigate to the "Site
          Settings" under the <br /> "Privacy and security" section.
        </p>
        <img
          className="object-center	lg:max-w-sm mx-auto	mb-6"
          src={resolve4}
          alt={resolve4}
        />
        <img
          className="object-center	lg:max-w-sm mx-auto	mb-6"
          src={resolve5}
          alt={resolve5}
        />
        <p className="lg:max-w-xl mx-auto mb-10 text-[#000f38]">
          Then click on myinterviewpractice.com and ensure that the site is able
          to <br /> access the camera and microphone (both are set to "Allow").
        </p>
        <img
          className="object-center	lg:max-w-sm mx-auto	mb-6"
          src={resolve6}
          alt={resolve6}
        />
        <p className="lg:max-w-xl mx-auto mb-10 text-[#000f38]">
          Second - ensure that no other application or software has access to
          the <br /> webcam or microphone (for example: Skype, Hangouts, etc.).
          If another <br /> program has access to your webcam or microphone when
          the Interview <br /> Simulator tries to connect, it will not be able
          to connect.
        </p>
        <p className="lg:max-w-xl mx-auto mb-10 text-[#000f38]">
          Third - ensure you have the latest version of Chrome or Firefox. In
          order to <br /> check in chrome, click on the three dots on the top
          right. Then click on <br /> "Help" and then "About Google Chrome". If
          you are using one browser <br /> (Chrome or Firefox) and receive an
          error switch to the other browser.
        </p>
        <img
          className="object-center	lg:max-w-sm mx-auto	mb-6"
          src={resolve7}
          alt={resolve7}
        />
        <img
          className="object-center	lg:max-w-sm mx-auto	mb-6"
          src={resolve8}
          alt={resolve8}
        />
        <p className="lg:max-w-xl mx-auto mb-10 text-[#000f38]">
          Fourth - clear your cache on this page. To do this in chrome, hit the
          three <br /> little dots on the top right of the browser screen. Then hit
          “History” from <br /> the drop down. Then hit “clear browsing data” on the
          left pane and ensure <br /> all three are checked off and hit okay.
          Alternatively, you can hit the “CTRL” <br /> key and “F5” key together on
          your keyboard. <br /> Once all items are successfully detected - you will
          notice all three circles <br /> are green and checked!
        </p>
        <img
          className="object-center	lg:max-w-sm mx-auto	mb-6"
          src={resolve9}
          alt={resolve9}
        />
      </div>
    </div>
  );
};

export default Resolve;
