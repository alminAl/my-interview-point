import { useState } from "react";
import quizzes from "../JsonData/quizJSON";

const Quiz = () => {
  const [showResults, setShowResults] = useState(0);

  const [score, setScore] = useState(0);



  const handleRadioChange = (value) => {

    console.log(value);
    if (value === "1") {

      setScore(score + 1);

    } else {
      console.log("wrong");
    }



  };




  const handleSubmit = (event) => {
    event.preventDefault();


    console.log(score)
    setShowResults(score);

  };

  return (
    <div className="min-h-full md:mx-36 mt-10 lg:mb-28 mb-5 bg-zinc-200">
      <h1 className="text-5xl text-center font-bold">Quiz</h1>

      <form onSubmit={handleSubmit}

      >
        {quizzes.map((item) => {
          const {
            id,
            question,
            option_A,
            option_B,
            option_C,
            option_D,
            correctAns,
          } = item;

          return (
            <div className="my-3 p-5" key={id}>
              <h1 className="bg-zinc-400 rounded p-1">{question}</h1>
              <div className="px-8">
                <input type="radio"
                  value={(option_A === correctAns) ?
                    1 : "wrong"}
                  onClick={(e) => handleRadioChange(e.target.value)}
                />
                <label className="px-2" >A. {option_A}</label>
                <br />
                <input type="radio"
                  value={(option_B === correctAns) ?
                    1 : "wrong"}
                  onClick={(e) => handleRadioChange(e.target.value)}
                />
                <label className="px-2" >B. {option_B}</label>
                <br />
                <input type="radio"
                  value={(option_C === correctAns) ?
                    1 : "wrong"}
                  onClick={(e) => handleRadioChange(e.target.value)}
                />
                <label className="px-2" >C. {option_C}</label>
                <br />
                <input type="radio"
                  value={(option_D === correctAns) ?
                    1 : "wrong"}
                  onClick={(e) => handleRadioChange(e.target.value)}
                />
                <label className="px-2" >D. {option_D}</label>
                <br />
              </div>
            </div>
          );
        })}

        <div className="px-8 text-end pb-5">
          <h1>Score:{showResults}</h1>
          <button className="rounded-full bg-violet-900 px-5 py-3 text-white font-semibold hover:bg-violet-800">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Quiz;
