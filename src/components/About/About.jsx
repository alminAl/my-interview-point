import React, { useState } from 'react';

const About = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    // const [text, setText] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();

    };
    return (
        <div className="w-full mb-20 flex justify-center items-center">
            <div className="bg-white w-full md:w-1/2 flex flex-col items-center py-6 px-8">
                <p className="text-[#E7303E] text-5xl font-extrabold mb-2">Contact Us</p>
                <p>We’re more than happy to answer any questions that you may have. Please fill out the form below and we’ll get back to you as soon as we can.</p>
                <br />

                <form
                    onSubmit={handleSubmit}
                    action="#"
                    className="w-full flex flex-col justify-center rounded-lg border-[#E7303E]"
                >
                    <div className="mb-4">
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            type="text"
                            placeholder="Name"
                            className="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-[#E7303E]"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-[#E7303E]"
                        />
                    </div>

                    <div className="mb-4">
                        <p>How can we help?</p>
                        <input

                            type="text"
                            placeholder=''

                            className="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-[#E7303E]" />
                    </div>


                    <button

                        className="tracking-wide font-semibold bg-[#E7303E] text-gray-100 w-full py-4 rounded-lg hover:bg-[#eb0619] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    >


                        <span className="ml-3">Send</span>
                    </button>

                </form>
            </div>
        </div>
    );
};

export default About;