import React, { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "How can we collaborate with you for a design project?",
      answer:
        "I’m flexible in my approach. I take on freelance projects depending on the timeline and scope. Feel free to reach out with your requirements for further discussion.",
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

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 text-sm bg-white/5 text-white px-4 py-1 rounded-full border border-white/10 backdrop-blur-md mb-4">
          ⭘ FAQs
        </div>

        {/* Title */}
        <h1 className="text-4xl font-light text-white">
          Frequently <span className="font-medium text-gray-400">Asked</span> Questions
        </h1>

        {/* FAQ Items */}
        <div className="mt-14 space-y-6 text-left">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`bg-white/5 border border-white/10 backdrop-blur-md rounded-xl transition-all duration-300 px-6 py-5 ${
                openIndex === index ? "shadow-lg" : "hover:bg-white/10"
              }`}
            >
              <button
                className="flex items-center justify-between w-full text-left"
                onClick={() => toggleFaq(index)}
              >
                <h2 className="font-medium text-white text-sm sm:text-base max-w-[90%]">
                  {faq.question}
                </h2>
                <span className="text-gray-400">
                  {openIndex === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  )}
                </span>
              </button>

              {openIndex === index && (
                <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
