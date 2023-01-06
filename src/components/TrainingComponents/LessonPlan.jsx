import React from 'react';
import './LessonPlan.css';
import arrow from "../../assets/icons/icon-arrow-down.svg";
import '../FaqComponent/FaqComponent.css'

const LessonPlan = () => {

    const displayAnswer1 = () => {
        const arrow1 = document.getElementById("arrNo1");
        const question1 = document.getElementById("qNo1");
        const answer1 = document.getElementById("aNo1");
        arrow1.classList.toggle("rotate-180");
        question1.classList.toggle("font-[700]");
        answer1.classList.toggle("hidden");
    };

    // const displayAnswer2 = () => {
    //     const arrow2 = document.getElementById("arrNo2");
    //     const question2 = document.getElementById("qNo2");
    //     const answer2 = document.getElementById("aNo2");
    //     arrow2.classList.toggle("rotate-180");
    //     question2.classList.toggle("font-[700]");
    //     answer2.classList.toggle("hidden");
    // };

    // const displayAnswer3 = () => {
    //     const arrow3 = document.getElementById("arrNo3");
    //     const question3 = document.getElementById("qNo3");
    //     const answer3 = document.getElementById("aNo3");
    //     arrow3.classList.toggle("rotate-180");
    //     question3.classList.toggle("font-[700]");
    //     answer3.classList.toggle("hidden");
    // };

    // const displayAnswer4 = () => {
    //     const arrow4 = document.getElementById("arrNo4");
    //     const question4 = document.getElementById("qNo4");
    //     const answer4 = document.getElementById("aNo4");
    //     arrow4.classList.toggle("rotate-180");
    //     question4.classList.toggle("font-[700]");
    //     answer4.classList.toggle("hidden");
    // };

    function QA(props) {
        return (
            <div className="QA flex">
                <h2
                    id={props.qNo}
                    className="pb-2 pr-2 text-red-600
            hover:text-softRed"
                >
                    {props.question}
                </h2>
                <img
                    className="float-right cursor-pointer w-2 h-2 mt-2"
                    src={arrow}
                    onClick={props.rotator}
                    id={props.arrNo}
                    alt="arrow pointing down"
                ></img>
                {/* </h2> */}
                <p id={props.aNo} className="text-darkGrayishBlue hidden text-[1rem]">
                    {props.answer}
                </p>
                <div className="divider"></div>
            </div>
        );
    }







    return (
        <div className='bg-slate-200'>
            <div className='min-h-full lg:mx-40  mb-5 lg:mb-10 mt-20 '>
                <h2 className="text-3xl lg:text-5xl text-[#000f38] font-bold mb-6 text-center lg:text-left">
                    Lesson Plan</h2>




                <div className="lesson-block lg:h-full">
                    <div class="row lesson-block-row">
                        <div className="lesson-icon col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <p className="title mt-5">Lesson</p>
                            <p className="number">1</p>
                        </div>
                        <div className="lesson-content-box col-lg-10 col-md-10 col-sm-10 col-xs-12">
                            <div className="lesson-content pl-10">
                                <h3>Introduction</h3>
                                <p>Understand what employers look for in a perfect candidate and how you can use this program to land your dream job.</p>
                            </div>
                            <div className="lesson-links">
                                <a className="btn" href="https://myinterviewpractice.com/article/introduction/">
                                    Get the Lesson </a>


                                <QA
                                    question="Details "
                                    answer="When it comes to job hunting, the competition is fierce. Studies show that each corporate job offer attracts 250 resumes on average. Of those candidates, 5 will get called for an interview, and only 1 will get the job.</p>
          <p>The Bureau of Labor says that preparation can be as important as the interview itself, and our team at My Interview Practice strongly agrees. The #1 way to enter an interview confidently is to prepare!</p>
          <p>The <strong>Introductory Guide</strong> will detail the critical factors of the job search process, including:
          
                The importance of projecting confidence during an interview and how to accomplish this.</p>
              
                  The steps you should take to prepare for an interview."
                                    qNo="qNo1"
                                    arrNo="arrNo1"
                                    aNo="aNo1"
                                    rotator={displayAnswer1}
                                />

                            </div>
                        </div>
                        <div className="accordion-content col-lg-12 col-md-12 col-sm-12 col-xs-12" >
                            <div className="rdAcContent">
                                <div className="rdAcThumb">
                                    <img className="lozad" data-src="https://myinterviewpractice.com/uploads/162741429_Introduction.png" alt="" />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>


                <div className="lesson-block lg:h-60">
                    <div class="row lesson-block-row">
                        <div className="lesson-icon col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <p className="title mt-5">Lesson</p>
                            <p className="number">2</p>
                        </div>
                        <div className="lesson-content-box col-lg-10 col-md-10 col-sm-10 col-xs-12">
                            <div className="lesson-content pl-10">
                                <h3>Company Research
                                </h3>
                                <p>Understand what employers look for in a perfect candidate and how you can use this program to land your dream job. </p>
                            </div>
                            <div className="lesson-links">
                                <a className="btn" href="https://myinterviewpractice.com/article/introduction/">
                                    Get the Lesson </a>


                                <QA
                                    question="Details "
                                    answer="When it comes to job hunting, the competition is fierce. Studies show that each corporate job offer attracts 250 resumes on average. Of those candidates, 5 will get called for an interview, and only 1 will get the job.</p>
          <p>The Bureau of Labor says that preparation can be as important as the interview itself, and our team at My Interview Practice strongly agrees. The #1 way to enter an interview confidently is to prepare!</p>
          <p>The <strong>Introductory Guide</strong> will detail the critical factors of the job search process, including:
          
                The importance of projecting confidence during an interview and how to accomplish this.</p>
              
                  The steps you should take to prepare for an interview."
                                    qNo="qNo1"
                                    arrNo="arrNo1"
                                    aNo="aNo1"
                                    rotator={displayAnswer1}
                                />

                            </div>
                        </div>
                        <div className="accordion-content col-lg-12 col-md-12 col-sm-12 col-xs-12" >
                            <div className="rdAcContent">
                                <div className="rdAcThumb">
                                    <img className="lozad" data-src="https://myinterviewpractice.com/uploads/162741429_Introduction.png" alt="" />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div className="lesson-block lg:h-60">
                    <div class="row lesson-block-row">
                        <div className="lesson-icon col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <p className="title mt-5">WORKSHEET</p>
                            <p className="number">3</p>
                        </div>
                        <div className="lesson-content-box col-lg-10 col-md-10 col-sm-10 col-xs-12">
                            <div className="lesson-content pl-10">
                                <h3>Research Worksheet</h3>
                                <p>Understand what employers look for in a perfect candidate and how you can use this program to land your dream job.</p>
                            </div>
                            <div className="lesson-links">
                                <a className="btn" href="https://myinterviewpractice.com/article/introduction/">
                                    Get the Lesson </a>


                                <QA
                                    question="Details "
                                    answer="When it comes to job hunting, the competition is fierce. Studies show that each corporate job offer attracts 250 resumes on average. Of those candidates, 5 will get called for an interview, and only 1 will get the job.</p>
          <p>The Bureau of Labor says that preparation can be as important as the interview itself, and our team at My Interview Practice strongly agrees. The #1 way to enter an interview confidently is to prepare!</p>
          <p>The <strong>Introductory Guide</strong> will detail the critical factors of the job search process, including:
          
                The importance of projecting confidence during an interview and how to accomplish this.</p>
              
                  The steps you should take to prepare for an interview."
                                    qNo="qNo1"
                                    arrNo="arrNo1"
                                    aNo="aNo1"
                                    rotator={displayAnswer1}
                                />

                            </div>
                        </div>
                        <div className="accordion-content col-lg-12 col-md-12 col-sm-12 col-xs-12" >
                            <div className="rdAcContent">
                                <div className="rdAcThumb">
                                    <img className="lozad" data-src="https://myinterviewpractice.com/uploads/162741429_Introduction.png" alt="" />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>


                <div className="lesson-block lg:h-60">
                    <div class="row lesson-block-row">
                        <div className="lesson-icon col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <p className="title mt-5">Lesson</p>
                            <p className="number">4</p>
                        </div>
                        <div className="lesson-content-box col-lg-10 col-md-10 col-sm-10 col-xs-12">
                            <div className="lesson-content pl-10">
                                <h3>Strengths & Weaknesses
                                </h3>
                                <p>Understand what employers look for in a perfect candidate and how you can use this program to land your dream job. </p>
                            </div>
                            <div className="lesson-links">
                                <a className="btn" href="https://myinterviewpractice.com/article/introduction/">
                                    Get the Lesson </a>


                                <QA
                                    question="Details "
                                    answer="When it comes to job hunting, the competition is fierce. Studies show that each corporate job offer attracts 250 resumes on average. Of those candidates, 5 will get called for an interview, and only 1 will get the job.</p>
          <p>The Bureau of Labor says that preparation can be as important as the interview itself, and our team at My Interview Practice strongly agrees. The #1 way to enter an interview confidently is to prepare!</p>
          <p>The <strong>Introductory Guide</strong> will detail the critical factors of the job search process, including:
          
                The importance of projecting confidence during an interview and how to accomplish this.</p>
              
                  The steps you should take to prepare for an interview."
                                    qNo="qNo1"
                                    arrNo="arrNo1"
                                    aNo="aNo1"
                                    rotator={displayAnswer1}
                                />

                            </div>
                        </div>
                        <div className="accordion-content col-lg-12 col-md-12 col-sm-12 col-xs-12" >
                            <div className="rdAcContent">
                                <div className="rdAcThumb">
                                    <img className="lozad" data-src="https://myinterviewpractice.com/uploads/162741429_Introduction.png" alt="" />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>


                <div className="lesson-block lg:h-60">
                    <div class="row lesson-block-row">
                        <div className="lesson-icon col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <p className="title mt-5">WORKSHEET</p>
                            <p className="number">5</p>
                        </div>
                        <div className="lesson-content-box col-lg-10 col-md-10 col-sm-10 col-xs-12">
                            <div className="lesson-content pl-10">
                                <h3>Strengths & Weaknesses Worksheet</h3>
                                <p>Understand what employers look for in a perfect candidate and how you can use this program to land your dream job.</p>
                            </div>
                            <div className="lesson-links">
                                <a className="btn" href="https://myinterviewpractice.com/article/introduction/">
                                    Get the Lesson </a>


                                <QA
                                    question="Details "
                                    answer="When it comes to job hunting, the competition is fierce. Studies show that each corporate job offer attracts 250 resumes on average. Of those candidates, 5 will get called for an interview, and only 1 will get the job.</p>
          <p>The Bureau of Labor says that preparation can be as important as the interview itself, and our team at My Interview Practice strongly agrees. The #1 way to enter an interview confidently is to prepare!</p>
          <p>The <strong>Introductory Guide</strong> will detail the critical factors of the job search process, including:
          
                The importance of projecting confidence during an interview and how to accomplish this.</p>
              
                  The steps you should take to prepare for an interview."
                                    qNo="qNo1"
                                    arrNo="arrNo1"
                                    aNo="aNo1"
                                    rotator={displayAnswer1}
                                />

                            </div>
                        </div>
                        <div className="accordion-content col-lg-12 col-md-12 col-sm-12 col-xs-12" >
                            <div className="rdAcContent">
                                <div className="rdAcThumb">
                                    <img className="lozad" data-src="https://myinterviewpractice.com/uploads/162741429_Introduction.png" alt="" />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>


                <div className="lesson-block lg:h-60">
                    <div class="row lesson-block-row">
                        <div className="lesson-icon col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <p className="title mt-5">Lesson</p>
                            <p className="number">6</p>
                        </div>
                        <div className="lesson-content-box col-lg-10 col-md-10 col-sm-10 col-xs-12">
                            <div className="lesson-content pl-10">
                                <h3>Behavioral & Situational Questions
                                </h3>
                                <p>Understand what employers look for in a perfect candidate and how you can use this program to land your dream job. </p>
                            </div>
                            <div className="lesson-links">
                                <a className="btn" href="https://myinterviewpractice.com/article/introduction/">
                                    Get the Lesson </a>


                                <QA
                                    question="Details "
                                    answer="When it comes to job hunting, the competition is fierce. Studies show that each corporate job offer attracts 250 resumes on average. Of those candidates, 5 will get called for an interview, and only 1 will get the job.</p>
          <p>The Bureau of Labor says that preparation can be as important as the interview itself, and our team at My Interview Practice strongly agrees. The #1 way to enter an interview confidently is to prepare!</p>
          <p>The <strong>Introductory Guide</strong> will detail the critical factors of the job search process, including:
          
                The importance of projecting confidence during an interview and how to accomplish this.</p>
              
                  The steps you should take to prepare for an interview."
                                    qNo="qNo1"
                                    arrNo="arrNo1"
                                    aNo="aNo1"
                                    rotator={displayAnswer1}
                                />

                            </div>
                        </div>
                        <div className="accordion-content col-lg-12 col-md-12 col-sm-12 col-xs-12" >
                            <div className="rdAcContent">
                                <div className="rdAcThumb">
                                    <img className="lozad" data-src="https://myinterviewpractice.com/uploads/162741429_Introduction.png" alt="" />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>


                <div className="lesson-block lg:h-60">
                    <div class="row lesson-block-row">
                        <div className="lesson-icon col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <p className="title mt-5">Lesson</p>
                            <p className="number">7</p>
                        </div>
                        <div className="lesson-content-box col-lg-10 col-md-10 col-sm-10 col-xs-12">
                            <div className="lesson-content pl-10">
                                <h3>Technical Questions
                                </h3>
                                <p>Understand what employers look for in a perfect candidate and how you can use this program to land your dream job. </p>
                            </div>
                            <div className="lesson-links">
                                <a className="btn" href="https://myinterviewpractice.com/article/introduction/">
                                    Get the Lesson </a>


                                <QA
                                    question="Details "
                                    answer="When it comes to job hunting, the competition is fierce. Studies show that each corporate job offer attracts 250 resumes on average. Of those candidates, 5 will get called for an interview, and only 1 will get the job.</p>
          <p>The Bureau of Labor says that preparation can be as important as the interview itself, and our team at My Interview Practice strongly agrees. The #1 way to enter an interview confidently is to prepare!</p>
          <p>The <strong>Introductory Guide</strong> will detail the critical factors of the job search process, including:
          
                The importance of projecting confidence during an interview and how to accomplish this.</p>
              
                  The steps you should take to prepare for an interview."
                                    qNo="qNo1"
                                    arrNo="arrNo1"
                                    aNo="aNo1"
                                    rotator={displayAnswer1}
                                />

                            </div>
                        </div>
                        <div className="accordion-content col-lg-12 col-md-12 col-sm-12 col-xs-12" >
                            <div className="rdAcContent">
                                <div className="rdAcThumb">
                                    <img className="lozad" data-src="https://myinterviewpractice.com/uploads/162741429_Introduction.png" alt="" />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>


                <div className="lesson-block lg:h-60">
                    <div class="row lesson-block-row">
                        <div className="lesson-icon col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <p className="title mt-5">Lesson</p>
                            <p className="number">8</p>
                        </div>
                        <div className="lesson-content-box col-lg-10 col-md-10 col-sm-10 col-xs-12">
                            <div className="lesson-content pl-10">
                                <h3>Questions To Ask
                                </h3>
                                <p>Understand what employers look for in a perfect candidate and how you can use this program to land your dream job. </p>
                            </div>
                            <div className="lesson-links">
                                <a className="btn" href="https://myinterviewpractice.com/article/introduction/">
                                    Get the Lesson </a>


                                <QA
                                    question="Details "
                                    answer="When it comes to job hunting, the competition is fierce. Studies show that each corporate job offer attracts 250 resumes on average. Of those candidates, 5 will get called for an interview, and only 1 will get the job
"
                                    qNo="qNo1"
                                    arrNo="arrNo1"
                                    aNo="aNo1"
                                    rotator={displayAnswer1}
                                />

                            </div>
                        </div>
                        <div className="accordion-content col-lg-12 col-md-12 col-sm-12 col-xs-12" >
                            <div className="rdAcContent">
                                <div className="rdAcThumb">
                                    <img className="lozad" data-src="https://myinterviewpractice.com/uploads/162741429_Introduction.png" alt="" />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>


                <div className="lesson-block lg:h-60">
                    <div class="row lesson-block-row">
                        <div className="lesson-icon col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <p className="title mt-5">CHECKLIST</p>
                            <p className="number">9</p>
                        </div>
                        <div className="lesson-content-box col-lg-10 col-md-10 col-sm-10 col-xs-12">
                            <div className="lesson-content pl-10">
                                <h3>Interview Checklist
                                </h3>
                                <p>Understand what employers look for in a perfect candidate and how you can use this program to land your dream job. </p>
                            </div>
                            <div className="lesson-links">
                                <a className="btn" href="https://myinterviewpractice.com/article/introduction/">
                                    Get the Lesson </a>


                                <QA
                                    question="Details "
                                    answer="When it comes to job hunting, the competition is fierce. Studies show that each corporate job offer attracts 250 resumes on average. Of those candidates, 5 will get called for an interview, and only 1 will get the job.</p>
          <p>The Bureau of Labor says that preparation can be as important as the interview itself, and our team at My Interview Practice strongly agrees. The #1 way to enter an interview confidently is to prepare!</p>
          <p>The <strong>Introductory Guide</strong> will detail the critical factors of the job search process, including:
          
                The importance of projecting confidence during an interview and how to accomplish this.</p>
              
                  The steps you should take to prepare for an interview."
                                    qNo="qNo1"
                                    arrNo="arrNo1"
                                    aNo="aNo1"
                                    rotator={displayAnswer1}
                                />

                            </div>
                        </div>
                        <div className="accordion-content col-lg-12 col-md-12 col-sm-12 col-xs-12" >
                            <div className="rdAcContent">
                                <div className="rdAcThumb">
                                    <img className="lozad" data-src="https://myinterviewpractice.com/uploads/162741429_Introduction.png" alt="" />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default LessonPlan;