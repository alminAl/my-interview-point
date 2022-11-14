import React from "react";
import EnterpriseBanner from "./EnterpriseBanner";
import Nomoresheduling from "./Nomoresheduling";

const Enterprise = () => {
  const fakedat2 = {
    img: "https://i.postimg.cc/PfSJ28qM/student-Bg-Mobile-1.png",
    head: "Mock interviews for everyone at the touch of a button.",
    minhead: `Give your group the realistic interview experience they need, without the hassle of in-person mock interviews.`,
  };
  return (
    <div>
      <div style={{ backgroundColor: " #F0F1F4" }}>
        <EnterpriseBanner fakedata={fakedat2}></EnterpriseBanner>
      </div>
      <div>
        <Nomoresheduling></Nomoresheduling>
      </div>
    </div>
  );
};

export default Enterprise;
