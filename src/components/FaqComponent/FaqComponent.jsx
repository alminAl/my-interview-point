import arrow from "../../assets/icons/icon-arrow-down.svg";
import "./FaqComponent.css";

const FaqComponent = () => {
  const displayAnswer1 = () => {
    const arrow1 = document.getElementById("arrNo1");
    const question1 = document.getElementById("qNo1");
    const answer1 = document.getElementById("aNo1");
    arrow1.classList.toggle("rotate-180");
    question1.classList.toggle("font-[700]");
    answer1.classList.toggle("hidden");
  };

  const displayAnswer2 = () => {
    const arrow2 = document.getElementById("arrNo2");
    const question2 = document.getElementById("qNo2");
    const answer2 = document.getElementById("aNo2");
    arrow2.classList.toggle("rotate-180");
    question2.classList.toggle("font-[700]");
    answer2.classList.toggle("hidden");
  };

  const displayAnswer3 = () => {
    const arrow3 = document.getElementById("arrNo3");
    const question3 = document.getElementById("qNo3");
    const answer3 = document.getElementById("aNo3");
    arrow3.classList.toggle("rotate-180");
    question3.classList.toggle("font-[700]");
    answer3.classList.toggle("hidden");
  };

  const displayAnswer4 = () => {
    const arrow4 = document.getElementById("arrNo4");
    const question4 = document.getElementById("qNo4");
    const answer4 = document.getElementById("aNo4");
    arrow4.classList.toggle("rotate-180");
    question4.classList.toggle("font-[700]");
    answer4.classList.toggle("hidden");
  };

  function QA(props) {
    return (
      <div className="QA">
        <h2
          id={props.qNo}
          className="pb-2 pr-2 text-[22px] font-bold
        hover:text-softRed"
        >
          {props.question}
          <img
            className="float-right cursor-pointer"
            src={arrow}
            onClick={props.rotator}
            id={props.arrNo}
            alt="arrow pointing down"
          ></img>
        </h2>
        <p id={props.aNo} className="text-darkGrayishBlue hidden text-[1rem]">
          {props.answer}
        </p>
        <div className="divider"></div>
      </div>
    );
  }

  return (
    <div className="min-h-full mx-10 md:mx-52 mt-10 lg:mb-28 mb-5">
      <div className="questions&answers">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#000f38] mb-6 text-center lg:text-left">
          Frequently Asked Questions
        </h1>

        <p>
          We’ve received a lot of great questions over the years. Here are some
          the questions we hear most often.
        </p>

        <div className="faqCat">What is My Interview Practice?</div>

        <QA
          question="What is the Interview Simulator, and how does it work? "
          answer="The Interview Simulator is a tool we developed to accurately replicate an actual interview setting. Once you select the particular position and type of interview you want to take, the Interview Simulator will formulate an interview script for you. As you are progressing through the interview, questions appear on the screen with a set amount of time for you to respond. For example, if the first question is, “Tell me about yourself,” you’ll have 10 seconds to respond after the question appears on the screen. Then the webcam and microphone will automatically start recording.

          This style of mock interview applies pressure to replicate what an actual interview would feel like. Once you’re finished with an interview, a recording is shared with you privately on your Dashboard so you can see how you did. At that time, you can share your recorded responses with others to receive feedback."
          qNo="qNo1"
          arrNo="arrNo1"
          aNo="aNo1"
          rotator={displayAnswer1}
        />
        <QA
          question="Where do you get your questions?"
          answer="We work with professionals ranging from recruiters/human resource staff to subject matter experts in each industry. They have curated our database of over 7,000 questions. We continue to add and update these questions on a regular basis to ensure you have the latest and most relevant questions in each industry."
          qNo="qNo2"
          arrNo="arrNo2"
          aNo="aNo2"
          rotator={displayAnswer2}
        />
        <QA
          question="Can I create my own interview questions?"
          answer="Yes - we have a feature that allows you to build an interview with your own interview questions. Simply hit the Build an Interview button on your dashboard.

          Once you create a custom interview you have two options. You can either take the interview yourself or you can assign the interview to others. When assigning the interview to someone else, you can even select the number of attempts that are given to take the interview."
          qNo="qNo3"
          arrNo="arrNo3"
          aNo="aNo3"
          rotator={displayAnswer3}
        />
        <QA
          question="What happens if I need help with the Interview Simulator or with my interview preparation?"
          answer="We’re always here to help! If you run into any issues or if there is any assistance that you need, just get in touch on our Contact Us page. We’ll do all that we can to help and will strive to get back to you within 24 hours."
          qNo="qNo4"
          arrNo="arrNo4"
          aNo="aNo4"
          rotator={displayAnswer4}
        />

        <div className="faqCat">WHY MY INTERVIEW PRACTICE?</div>

        <QA
          question="I don’t have a lot of experience interviewing. How will this tool help me? "
          answer="Interviewing can be stressful, especially if you don’t have much experience. Your confidence is a huge indicator of how well you will do in your interview. The best way to build your confidence interviewing is to practice in a realistic and safe environment.

          Our Interview Simulator tool offers exactly that! The tool allows you to practice freely and build your confidence at your own pace. You can do this by taking a few interviews with different question sets that apply the pressure of what an actual interview would feel like. Each time you complete an interview, a recording is provided to you privately. You can then review your recorded responses and determine areas of improvement without the added pressure of judgment from others. Then if you’re ready to share your videos you can do so with a small audience to get their feedback on how you did. In this way, the tool can help you through the lifecycle of practicing for interviews, from gaining your confidence to getting feedback on how to improve."
          qNo="qNo1"
          arrNo="arrNo1"
          aNo="aNo1"
          rotator={displayAnswer1}
        />
        <QA
          question="I am an experienced interviewer. How will this tool help me?"
          answer="Statistics show that the average person will remain in the same job for about four years. During this time, chances are you have not practiced interviewing, and you will want to brush up on your skills.

          That’s exactly how our tool can help you! You can take a few practice interviews where you will be given the latest handpicked questions relevant to your industry. Each interview you take will be unique with different question sets. After taking some interviews in this manner, you will have a better idea of how prepared you are for your upcoming interview. If you’d like, you can then share your recorded responses with your network to get their feedback on how you did."
          qNo="qNo2"
          arrNo="arrNo2"
          aNo="aNo2"
          rotator={displayAnswer2}
        />
        <QA
          question="Why should I use this tool as opposed to just finding questions online?"
          answer="The reason interviews are so stressful is because you don’t know which questions you will be asked. You have to be prepared to answer anything that comes your way. If you researched questions and then tried to interview yourself it wouldn’t be an accurate measure of how you would do in the real interview.

          Experts have carefully curated our database of over 7,000 questions, so you don’t have to spend hours searching for questions online. The Interview Simulator algorithm will ask you these questions in a way that mimics a real interview. The best part is that each time you take an interview, you will have a new set of questions to respond to."
          qNo="qNo3"
          arrNo="arrNo3"
          aNo="aNo3"
          rotator={displayAnswer3}
        />
        <QA
          question="I’m a professor (or other organization representative) that would like to introduce this tool to our students and/or members. Do you offer bulk rates?"
          answer="Yes - we offer bulk licensing discounts for universities and other organizations. This makes it more affordable for you to provide access to your members and/or students. You can find more information on our enterprise page. 

          If you're ready to learn more, you can book a demo and a member of our team will walk through the platform in detail to see how it can be used at scale."
          qNo="qNo4"
          arrNo="arrNo4"
          aNo="aNo4"
          rotator={displayAnswer4}
        />

        <div className="faqCat">HOW DOES MY INTERVIEW PRACTICE WORK?</div>

        <QA
          question="What are the different types of interviews I can take? "
          answer="You have a number of options for the type of interview you can take:

          Industry/Position - Select the position you want to practice for. Currently, we have 120 different job positions that span over 21 industries.
          Behavioral/Technical - In a Behavioral Interview, you will be asked questions about how you handled situations in the past. This is similar to what you would expect in an HR Screening. In a Technical Interview, you will be asked questions about your qualifications for that particular position. This is what you can expect from an interview with your Hiring Manager.
          Experience Level - Select how much experience you have in your particular field. This can be anywhere from an internship level all the way to a senior management level.
          Duration - Select the duration of the interview. This can range from 20 minutes to 50 minutes and will determine the total number of questions asked.
          Based on all of these selections, our algorithm will develop an interview script of questions that will be asked."
          qNo="qNo1"
          arrNo="arrNo1"
          aNo="aNo1"
          rotator={displayAnswer1}
        />
        <QA
          question="What industries and positions can I practice with in the tool? What if I do not find my position?"
          answer="You can find a full list of our positions on the Industry page. Simply navigate to your industry and find your position. If you do not find your position listed, send us a note on the Contact Us page. We continue to add new positions on a regular basis and would love to hear your suggestions. "
          qNo="qNo2"
          arrNo="arrNo2"
          aNo="aNo2"
          rotator={displayAnswer2}
        />
        <QA
          question="If I don’t like the Premium Membership can I get my money back?"
          answer="Absolutely – we stand by our product! If for any reason, you are not fully satisfied with your membership, we will issue a full refund. Simply use the Contact Us page to send us a brief explanation of why you are not satisfied and we will promptly issue a full refund."
          qNo="qNo3"
          arrNo="arrNo3"
          aNo="aNo3"
          rotator={displayAnswer3}
        />
        <QA
          question="What are the computer requirements (hardware/software) to use the tool?"
          answer="Our tool is completely web based, so you do not need to download anything on your computer or mobile device. We recently adapted our tool so that it is 100% mobile responsive. That means you can now access the entire tool from taking interviews, to watching your recordings (and everything in between) on your tablet or mobile device. 

          We recommend using Google Chrome or Mozilla Firefox for optimal performance."
          qNo="qNo4"
          arrNo="arrNo4"
          aNo="aNo4"
          rotator={displayAnswer4}
        />
      </div>
    </div>
  );
};

export default FaqComponent;
