'use client';

import { useState } from 'react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

import { faqsArray } from '../../../utils/constants/faqs';
import Breadcrumb from '../ui/breadcrumb';

const breadcrumbs = [
  {
    url: '/student/support',
    name: 'Help & Support',
  },
  {
    url: '',
    name: 'FAQs',
  },
];

const Faqs = () => {
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
    <div>
      <div className="breadcrumbs">
        <Breadcrumb breadcrumbsArray={breadcrumbs} />
      </div>
      <div className="faqs mt-8">
        <div className="questions">
          {faqs.map((faq: any) => (
            <div
              key={faq.id}
              className="question md:py-8 py-5 border-t border-solid border-cp-secondary"
            >
              <div className="question-head flex items-center justify-between">
                <span className="text-sm font-semibold text-[#000000]">
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
              <div className={`answer mt-8 ${faq.expanded ? 'expanded' : ''}`}>
                <span className="text-xs font-normal text-[#000000B2]">
                  {faq.answer}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
