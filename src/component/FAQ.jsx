import React, { useState } from "react";

const FAQ = () => {
  const [answersVisibility, setAnswersVisibility] = useState({
    answer1: false,
    answer2: false,
    answer3: false,
    answer4: false,
  });

  const toggleAnswer = (id) => {
    setAnswersVisibility((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  return (
    <>
      <section
        className="p-10  flex flex-col gap-4 h-screen mb-10 bg-gradient-to-b from-blue-500 to-gray-600"
        //style={{ background: "#006f93" }}
      >
        <div className=" grid grid-cols-1 gap-4 lg:grid-cols-2 my-10">
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-white text-2xl">FAQ</h3>
            <h2 className="text-4xl font-bold leading-tight text-white lg:text-5xl">
              The Most Questions
            </h2>
          </div>
          <p className="text-slate-300">
            Proin laoreet nisi vitae pharetra mattis. Etiam luctus suscipit
            velit vitae mixue ultricies. Augue molestie a etiam quis tincidunt
            est, et efficitur ipsum nunc bibendum ut risus et vehicula proin
            tempus tellus diam laoreet justo donec tempus.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 ">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={`question${index}`}
              className=" rounded transition-all duration-200  border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
            >
              <button
                type="button"
                onClick={() => toggleAnswer(`answer${index}`)}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                  Question {index}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-6 h-6 text-black ${
                    answersVisibility[`answer${index} `]
                      ? "transform rotate-0"
                      : "transform rotate-180"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div
                style={{
                  display: answersVisibility[`answer${index}`]
                    ? "block"
                    : "none",
                }}
                className="px-4 pb-5 sm:px-6 sm:pb-6"
              >
                <p>Answer to Question {index}</p>
              </div>
            </div>
          ))}

          <p className="text-center text-white text-base mt-9 ">
            Still have questions ?
            <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">
              Contact our support
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default FAQ;
