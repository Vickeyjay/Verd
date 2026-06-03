import { useState } from "react";
import "./faq.css";
import { GoArrowDown } from "react-icons/go";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const faqData = [
  {
    question: "What is Verd?",
    answer:
      "Verd is a DeFi-powered platform that helps you save and grow your money using stable on-chain assets.",
  },
  {
    question: "Do I need crypto experience?",
    answer:
      "No. Verd is designed to be simple and accessible, whether you're new or familiar with crypto.",
  },
  {
    question: "How is my money managed?",
    answer:
      "Funds are secured on-chain and allocated into structured systems designed for stability and growth.",
  },
  {
    question: "Can I withdraw anytime?",
    answer:
      "Yes. You can withdraw your funds in fiat or crypto whenever you need.",
  },
  {
    question: "When will Verd be available?",
    answer:
      "We’re currently building. Join the waitlist to get early access.",
  },
];


  return (
    <div data-aos="fade-up" data-aos-delay="50" className="faq-wrapper" id="faqs">
      <div data-aos="fade-up" data-aos-delay="50" className="faq-text">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p>Everything you need to know about Verd.</p>
      </div>
      
      <div data-aos="fade-up" data-aos-delay="50" className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div data-aos="fade-up" data-aos-delay="50" className="faq-header" onClick={() => toggleFaq(index)}>
              <p>{item.question}</p>
              <span
                className={`faq-icon ${activeIndex === index ? "open" : ""}`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="11.5" stroke="#144027" />
                  <path
                    d="M12 7V17"
                    stroke="#144027"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d={`M7 ${activeIndex === index ? "12" : "12"}H17`}
                    stroke="#144027"
                    strokeWidth="2"
                    strokeLinecap="round"
                    style={{
                      opacity: activeIndex === index ? 0 : 1,
                      transition: "opacity 0.3s ease",
                    }}
                  />
                </svg>
              </span>
            </div>

            <div
              className={`faq-body-wrapper ${
                activeIndex === index ? "show" : ""
              }`}
            >
              <div data-aos="fade-up" data-aos-delay="50" className="faq-body">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
