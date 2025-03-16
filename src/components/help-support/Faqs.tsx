'use client';

import { useState } from 'react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

import {
  communityFaqs,
  generalFaqs,
  supportFaqs,
} from '../../../utils/constants/faqs';
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
  const [faqs, setFaqs] = useState(generalFaqs);
  const [communityFaq, setCommunityFaq] = useState(communityFaqs);
  const [technicalSupportFaq, setTechnicalSupportFaq] = useState(supportFaqs);

  const expandFaq = (faqId: number) => {
    const faqsUpdated = faqs.map((faq) => {
      if (faq.id === faqId) {
        faq.expanded = !faq.expanded;
      }
      return faq;
    });
    setFaqs(faqsUpdated);
  };

  const expandCommunityFaq = (faqId: number) => {
    const faqsUpdated = communityFaq.map((faq) => {
      if (faq.id === faqId) {
        faq.expanded = !faq.expanded;
      }
      return faq;
    });
    setCommunityFaq(faqsUpdated);
  };

  const expandsupportFaq = (faqId: number) => {
    const faqsUpdated = technicalSupportFaq.map((faq) => {
      if (faq.id === faqId) {
        faq.expanded = !faq.expanded;
      }
      return faq;
    });
    setTechnicalSupportFaq(faqsUpdated);
  };

  return (
    <div>
      <div className="breadcrumbs">
        <Breadcrumb breadcrumbsArray={breadcrumbs} />
      </div>
      <div className="faqs mt-8">
        <div className="mb-6 md:mb-10 text-[#000000CC] text-base flex items-center justify-center font-semibold">
          <span>FAQs</span>
        </div>
        <div>
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

        <div className="mb-6 md:mb-10 text-[#000000CC] text-base flex items-center justify-center font-semibold">
          <span>Community and Mentorship</span>
        </div>
        <div>
          {communityFaq.map((faq: any) => (
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
                    onClick={() => expandCommunityFaq(faq.id)}
                    size={22}
                    className="text-cp-secondary cursor-pointer"
                  />
                ) : (
                  <IoChevronDown
                    onClick={() => expandCommunityFaq(faq.id)}
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

        <div className="mb-6 md:mb-10 text-[#000000CC] text-base flex items-center justify-center font-semibold">
          <span>Technical and Account Support</span>
        </div>

        <div>
          {technicalSupportFaq.map((faq: any) => (
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
                    onClick={() => expandsupportFaq(faq.id)}
                    size={22}
                    className="text-cp-secondary cursor-pointer"
                  />
                ) : (
                  <IoChevronDown
                    onClick={() => expandsupportFaq(faq.id)}
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
