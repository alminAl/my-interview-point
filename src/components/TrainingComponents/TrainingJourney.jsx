import React from 'react';
import introduction from '../../assets/images/training3.png';
import research from '../../assets/images/trainingResearch.png';
import worksheet from '../../assets/images/trainingWorksheet.png';
import strengths from '../../assets/images/trainingStrengths.png';
import stWeWorksheet from '../../assets/images/trainingStrengths-and-Weaknesses-Work.png';
import behavior from '../../assets/images/58644427_Behavioral-and-Situational-Qu.png';
import technical from '../../assets/images/111759985_Technical-Questions.png';
import question from '../../assets/images/Questions-to-Ask.png';
import interviewC from '../../assets/images/Interview-Checklist.png';
import trophy from '../../assets/images/trophy.svg';


const TrainingJourney = () => {
    return (
        <div className='m-20 lg:mx-60 lg:p-10'>

            <h1 className="text-3xl lg:text-5xl text-[#000f38] font-bold mb-6 text-center">Your Training Journey</h1>
            <div className='min-h-full mx-10 md:mx-52  mb-5 lg:mb-10 mt-20 lg:pl-40'>
                <div className='flex flex-col-reverse lg:flex-row justify-center items-center'>
                    <div className=' mb-6 lg:mb-[-10px] lg:mr-14'>
                        <img src={introduction} alt={introduction} className="w-full md:max-w-full rounded-lg" />
                    </div>
                    <div className='lg:ml-5 mb-5 lg:mb-0'>

                        <h2 className="text-3xl lg:text-2xl text-[#000f38] font-bold mb-6 text-center lg:text-left">
                            Introduction</h2>
                        <p className="mb-6 text-base text-[#000f38]  text-center lg:text-left">Understand what employers look for in a perfect candidate and how you can use this program to land your dream job.</p>

                        <button className='bg-red-600 block mx-auto lg:inline-block  rounded-lg shadow-2xl text-white leading-10 font-bold px-5 py-2'>Get the Lesson</button>

                    </div>
                </div>
            </div>

            <div className='min-h-full mx-10 md:mx-52 mb-5 lg:mb-10 lg:mt-40 lg:pr-40'>
                <div className='flex-col lg:flex lg:flex-row justify-center items-center'>
                    <div className='lg:mr-5 mb-5 lg:mb-0'>

                        <h2 className="text-3xl lg:text-2xl text-[#000f38] font-bold mb-6 text-center lg:text-left">Company Research</h2>
                        <p className="mb-6 text-base text-[#000f38]  text-center lg:text-left ">Learn what to research about a company, why it’s important, and how to use that information to gain an edge over the competition.</p>

                        <button className='bg-red-600 block mx-auto lg:inline-block  rounded-lg shadow-2xl text-white leading-10 font-bold px-5 py-2'>Get the Lesson</button>

                    </div>
                    <div className='lg:ml-5'>
                        <img src={research} alt={research} className="w-full md:max-w-full  rounded-lg" />
                    </div>
                </div>
            </div>



            <div className='min-h-full mx-10 md:mx-52  mb-5 lg:mb-10 mt-20 lg:pl-40'>
                <div className='flex flex-col-reverse lg:flex-row justify-center items-center'>
                    <div className=' mb-6 lg:mb-[-10px] lg:mr-14'>
                        <img src={worksheet} alt={worksheet} className="w-full md:max-w-full rounded-lg" />
                    </div>
                    <div className='lg:ml-5 mb-5 lg:mb-0'>

                        <h2 className="text-3xl lg:text-2xl text-[#000f38] font-bold mb-6 text-center lg:text-left">
                            Research Worksheet</h2>
                        <p className="mb-6 text-base text-[#000f38]  text-center lg:text-left">Keep track of your research with this step-by-step worksheet that helps you capture important company information as you go.</p>

                        <button className='bg-red-600 block mx-auto lg:inline-block  rounded-lg shadow-2xl text-white leading-10 font-bold px-5 py-2'>Get the Lesson</button>

                    </div>
                </div>
            </div>

            <div className='min-h-full mx-10 md:mx-52 mb-5 lg:mb-10 lg:mt-40 lg:pr-40'>
                <div className='flex-col lg:flex lg:flex-row justify-center items-center'>
                    <div className='lg:mr-5 mb-5 lg:mb-0'>

                        <h2 className="text-3xl lg:text-2xl text-[#000f38] font-bold mb-6 text-center lg:text-left">Strengths & Weaknesses</h2>
                        <p className="mb-6 text-base text-[#000f38]  text-center lg:text-left ">Determine how to accurately assess your strengths and weaknesses and use them to your advantage during an interview.</p>

                        <button className='bg-red-600 block mx-auto lg:inline-block  rounded-lg shadow-2xl text-white leading-10 font-bold px-5 py-2'>Get the Lesson</button>

                    </div>
                    <div className='lg:ml-5'>
                        <img src={strengths} alt={strengths} className="w-full md:max-w-full  rounded-lg" />
                    </div>
                </div>
            </div>


            <div className='min-h-full mx-10 md:mx-52  mb-5 lg:mb-10 mt-20 lg:pl-40'>
                <div className='flex flex-col-reverse lg:flex-row justify-center items-center'>
                    <div className=' mb-6 lg:mb-[-10px] lg:mr-14'>
                        <img src={stWeWorksheet} alt={stWeWorksheet} className="w-full md:max-w-full rounded-lg" />
                    </div>
                    <div className='lg:ml-5 mb-5 lg:mb-0'>

                        <h2 className="text-3xl lg:text-2xl text-[#000f38] font-bold mb-6 text-center lg:text-left">
                            Strengths & Weaknesses Worksheet</h2>
                        <p className="mb-6 text-base text-[#000f38]  text-center lg:text-left">Don’t know what your top strengths and weaknesses are? This worksheet will help you identify them and then use them to formulate your talking points.</p>

                        <button className='bg-red-600 block mx-auto lg:inline-block  rounded-lg shadow-2xl text-white leading-10 font-bold px-5 py-2'>Get the Lesson</button>

                    </div>
                </div>
            </div>

            <div className='min-h-full mx-10 md:mx-52 mb-5 lg:mb-10 lg:mt-40 lg:pr-40'>
                <div className='flex-col lg:flex lg:flex-row justify-center items-center'>
                    <div className='lg:mr-5 mb-5 lg:mb-0'>

                        <h2 className="text-3xl lg:text-2xl text-[#000f38] font-bold mb-6 text-center lg:text-left">Behavioral & Situational Questions</h2>
                        <p className="mb-6 text-base text-[#000f38]  text-center lg:text-left ">Understand why interviewers ask Behavioral and Situational questions, then learn how to use the S.T.A.R. technique to blow them out of the water!</p>

                        <button className='bg-red-600 block mx-auto lg:inline-block  rounded-lg shadow-2xl text-white leading-10 font-bold px-5 py-2'>Get the Lesson</button>

                    </div>
                    <div className='lg:ml-5'>
                        <img src={behavior} alt={behavior} className="w-full md:max-w-full  rounded-lg" />
                    </div>
                </div>
            </div>


            <div className='min-h-full mx-10 md:mx-52  mb-5 lg:mb-10 mt-20 lg:pl-40'>
                <div className='flex flex-col-reverse lg:flex-row justify-center items-center'>
                    <div className=' mb-6 lg:mb-[-10px] lg:mr-14'>
                        <img src={technical} alt={technical} className="w-full md:max-w-full rounded-lg" />
                    </div>
                    <div className='lg:ml-5 mb-5 lg:mb-0'>

                        <h2 className="text-3xl lg:text-2xl text-[#000f38] font-bold mb-6 text-center lg:text-left">
                            Technical Questions</h2>
                        <p className="mb-6 text-base text-[#000f38]  text-center lg:text-left">Technical questions are an important part of the interview process. Understand why they are asked and how best to answer these questions.</p>

                        <button className='bg-red-600 block mx-auto lg:inline-block  rounded-lg shadow-2xl text-white leading-10 font-bold px-5 py-2'>Get the Lesson</button>

                    </div>
                </div>
            </div>

            <div className='min-h-full mx-10 md:mx-52 mb-5 lg:mb-10 lg:mt-40 lg:pr-40'>
                <div className='flex-col lg:flex lg:flex-row justify-center items-center'>
                    <div className='lg:mr-5 mb-5 lg:mb-0'>

                        <h2 className="text-3xl lg:text-2xl text-[#000f38] font-bold mb-6 text-center lg:text-left">Questions to Ask</h2>
                        <p className="mb-6 text-base text-[#000f38]  text-center lg:text-left ">The questions you ask are almost as important as the answers you give during an interview. Determine which questions to ask and why they’re important.</p>

                        <button className='bg-red-600 block mx-auto lg:inline-block  rounded-lg shadow-2xl text-white leading-10 font-bold px-5 py-2'>Get the Lesson</button>

                    </div>
                    <div className='lg:ml-5'>
                        <img src={question} alt={question} className="w-full md:max-w-full  rounded-lg" />
                    </div>
                </div>
            </div>

            <div className='min-h-full mx-10 md:mx-52  mb-5 lg:mb-10 mt-20 lg:pl-40'>
                <div className='flex flex-col-reverse lg:flex-row justify-center items-center'>
                    <div className=' mb-6 lg:mb-[-10px] lg:mr-14'>
                        <img src={interviewC} alt={interviewC} className="w-full md:max-w-full rounded-lg" />
                    </div>
                    <div className='lg:ml-5 mb-5 lg:mb-0'>

                        <h2 className="text-3xl lg:text-2xl text-[#000f38] font-bold mb-6 text-center lg:text-left">
                            Interview Checklist</h2>
                        <p className="mb-6 text-base text-[#000f38]  text-center lg:text-left">Knowing what to do before and after an interview is crucial. Use this checklist to help get you into the right mindset for the big day!</p>

                        <button className='bg-red-600 block mx-auto lg:inline-block  rounded-lg shadow-2xl text-white leading-10 font-bold px-5 py-2'>Get the Lesson</button>

                    </div>
                </div>
            </div>

            <img className='min-h-full mx-10 md:mx-52  mb-5 lg:mb-10 mt-20 lg:pl-40' src={trophy} alt={trophy}></img>
        </div>
    );
};

export default TrainingJourney;