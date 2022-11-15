import React from "react";
// import { useEffect, useState } from "react";

const Quiz = () => {
  //   const [quizzes, setQuiz] = useState([]);

  //   useEffect(() => {
  //     const fetcher = async () => {
  //       const res = await fetch("../JsonData/quizJSON.json");
  //       const data = await res.json();
  //       setQuiz(data);
  //     };
  //     fetcher();
  //   }, []);
  //   console.log(quizzes);

  return (
    <div className="min-h-full md:mx-36 mt-10 lg:mb-28 mb-5 bg-zinc-200">
      <h1 className="text-5xl text-center font-bold">Quiz</h1>

      <form onSubmit="">
        <div className="my-3 p-5">
          <h1 className="bg-zinc-400 rounded p-1">1. What is ReactJS?</h1>
          <div className="px-8">
            <input type="radio" />
            <label className="px-2">A. Server Side Framework</label>
            <br />
            <input type="radio" />
            <label className="px-2">B. User Interface Framework</label>
            <br />
            <input type="radio" />
            <label className="px-2">C. Both A & B</label>
            <br />
            <input type="radio" />
            <label className="px-2">D. None of the above</label>
          </div>
        </div>

        <div className="my-3 p-5">
          <h1 className="bg-zinc-400 rounded p-1">
            2. Which of the following is used in React.js to increase
            performance?
          </h1>
          <div className="px-8">
            <input type="radio" />
            <label className="px-2">A. Virtual DOM</label>
            <br />
            <input type="radio" />
            <label className="px-2">B. Original DOM</label>
            <br />
            <input type="radio" />
            <label className="px-2">C. Both A & B</label>
            <br />
            <input type="radio" />
            <label className="px-2">D. None of the above</label>
          </div>
        </div>

        <div className="my-3 p-5">
          <h1 className="bg-zinc-400 rounded p-1">
            3. Identify the one which is used to pass data to components from
            outside?
          </h1>
          <div className="px-8">
            <input type="radio" />
            <label className="px-2">A. Render with arguments</label>
            <br />
            <input type="radio" />
            <label className="px-2">B. setState</label>
            <br />
            <input type="radio" />
            <label className="px-2">C. props</label>
            <br />
            <input type="radio" />
            <label className="px-2">D. PropTypes</label>
          </div>
        </div>

        <div className="px-8 text-end pb-5">
        <button className="rounded-full bg-violet-900 px-5 py-3 text-white font-semibold hover:bg-violet-800">Submit</button>
        </div>
        
      </form>
    </div>
  );
};

export default Quiz;
