import React, { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What type of projects do you specialize in?",
      answer:
        "I specialize in end-to-end UI/UX design, design systems, and web development for SaaS platforms, B2B tools, and consumer-facing websites—especially projects that need clarity, scale, and clean user flows.",
    },
    {
      question:
        "Can you help if we only need a design system or component library?",
      answer:
        "Absolutely. I’ve led multiple design system initiatives from scratch and can help create scalable systems with detailed documentation for consistency and team efficiency.",
    },
    {
      question: "Do you offer UX audit or consulting for existing products?",
      answer:
        "Yes. I offer UX audits with actionable insights, quick wins, and long-term strategies based on usability heuristics, user flows, and business goals.",
    },
    {
      question: "Are you available for remote or on-site collaborations?",
      answer:
        "I'm fully remote but open to hybrid engagements for workshops, design sprints, or team onboarding if the project demands it.",
    },
    {
      question: "Can you handle both design and development?",
      answer:
        "Yes. I can take your product from Figma to a fully functional website using tools like Framer, Webflow, or coded stacks like React/Next.js—depending on what's best for the project.",
    },
    {
      question: "How do we get started with you?",
      answer:
        "Just reach out with a short brief via the contact page. From there, I usually propose a quick discovery call, scope the work, and align on the next steps.",
    },
    {
      question: "Do you work with startups or only enterprise clients?",
      answer:
        "Both. I’ve worked with early-stage founders, mid-scale startups, and enterprise clients like Shyftlabs. The common factor is clarity of vision and impact.",
    },
    {
      question: "What makes your workflow different?",
      answer:
        "I balance business understanding with deep design thinking. I’m not just delivering UI—I’m solving product problems with measurable outcomes, whether that’s improved retention or faster dev handoffs.",
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
          Frequently <span className="font-medium text-gray-400">Asked</span>{" "}
          Questions
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
                      className="w-5 h-5"
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
