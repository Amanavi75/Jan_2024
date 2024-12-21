import React, { useState } from "react";

const Faq = () => {
  // State to manage which FAQ is open
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ data
  const faqData = [
    {
      question: "How can I pay for my appointment?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
    },
    {
      question:
        "Is the cost of the appointment covered by private health insurance?",
      answer:
        "Yes, the cost may be covered depending on your private health insurance plan. Please consult your provider for more details.",
    },
    {
      question: "Do I need a referral?",
      answer:
        "No, you do not need a referral. You can book an appointment directly with us.",
    },
    {
      question: "What are your opening hours?",
      answer:
        "Our opening hours are Monday to Friday, 9 AM to 5 PM. We are closed on weekends and public holidays.",
    },
    {
      question: "What can I expect at my first consultation?",
      answer:
        "At your first consultation, we will review your medical history, discuss your concerns, and create a personalized treatment plan.",
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
