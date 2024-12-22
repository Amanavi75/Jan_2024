import React, { useState } from "react";

const Faq = () => {
  // State to manage which FAQ is open
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ data
  const faqData = [
    {
      question: "How can we collaborate with you for a design project?",
      answer:
        "I’m flexible in my approach, I take on freelance projects depending on the timeline and scope. Feel free to reach out with your requirements for further discussion.",
    },
    {
      question: "Do you conduct workshops or webinars on UI/UX Design?",
      answer:
        "Yes, I regularly host events and webinars on topics like ‘The Psychology of Colors in Design’ and ‘Intro to UI/UX’. I’m open to partnering with organizations or educational institutions for similar events.",
    },
    {
      question: "What kind of companies or industries have you worked with?",
      answer:
        "I’ve worked with clients in tech, fashion, and education, including projects for startups, established companies, and even public events like webinars.",
    },
    {
      question: "Can we hire you for long-term collaboration or consulting?",
      answer:
        "Yes, I’m open to long-term collaborations, either as a consultant or part of your design team, depending on the project requirements.",
    },
  ];

  

  // Toggle FAQ visibility
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12">
      <div className=" px-6 mx-auto max-w-4xl">
        <h1 className="text-md font-medium text-center pt-20 text-gray-800 lg:text-2xl">
          Frequently Asked Questions
        </h1>

        <div className="mt-8 space-y-8 lg:mt-12">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="p-5 bg-[#f9f9f9] rounded-lg transition-all"
            >
              <button
                className="flex items-center justify-between w-full"
                onClick={() => toggleFaq(index)}
              >
                <h1 className="font-medium text-gray-700">{faq.question}</h1>
                <span className="text-gray-500">
                  {openIndex === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 12H6"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  )}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-6 text-sm text-gray-500">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
