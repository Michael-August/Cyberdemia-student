"use client";

import { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

import { faqsArray } from "../../../utils/constants/faqs";

const FAQs = () => {
  const [faqs, setFaqs] = useState(faqsArray);

  const expandFaq = (faqId: number) => {
    const faqsUpdated = faqs.map((faq) => {
      if (faq.id === faqId) {
        faq.expanded = !faq.expanded;
      }
      return faq;
    });
    setFaqs(faqsUpdated);
  };
  return (
    <div className="mt-20 md:mt-40">
      <div className="mb-6 md:mb-10 text-[#000000CC] text-2xl md:text-[2rem] flex items-center justify-center font-semibold md:leading-[2.75rem]">
        <span>FAQs</span>
      </div>
      <div>
        {faqs.map((faq: any) => (
          <div
            key={faq.id}
            className="question md:py-8 py-5 border-t border-solid border-cp-secondary"
          >
            <div className="question-head flex items-center justify-between">
              <span className="text-base md:text-lg font-semibold text-[#000000]">
                {faq.question}
              </span>
              {faq.expanded ? (
                <IoChevronUp
                  onClick={() => expandFaq(faq.id)}
                  size={22}
                  className="text-cp-secondary cursor-pointer"
                />
              ) : (
                <IoChevronDown
                  onClick={() => expandFaq(faq.id)}
                  size={22}
                  className="text-cp-secondary cursor-pointer"
                />
              )}
            </div>
            <div className={`answer mt-8 ${faq.expanded ? "expanded" : ""}`}>
              <span className="text-base md:text-lg font-normal text-[#000000B2]">
                {faq.answer}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
