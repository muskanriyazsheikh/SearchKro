import React, { useState } from 'react';

const LegalPolicy = () => {
  // State to track which accordion item is open
  const [openIndex, setOpenIndex] = useState(0);

  const policies = [
    {
      question: "How do I book a service?",
      answer: "You can book a service by selecting your preferred category, choosing a time slot, and confirming the booking via the app."
    },
    {
      question: "How do I track my service provider?",
      answer: "Once a booking is confirmed, you can track the real-time location of your service provider through the tracking tab in the dashboard."
    },
    {
      question: "What if I face an issue with the service?",
      answer: "Our support team is available 24/7. You can report issues through the 'Support' section or by rating the service provider."
    },
    {
      question: "How do I rate and review a service?",
      answer: "After the service is completed, a prompt will appear allowing you to provide a star rating and written feedback."
    },
    {
      question: "What services does this app provide?",
      answer: "We provide a wide range of services including home maintenance, wellness clinic bookings, and electronic repairs."
    },
    {
      question: "Is registration required to use the app?",
      answer: "Yes, you must create an account to book services, track providers, and view your transaction history."
    },
    {
      question: "How can I cancel or reschedule a service?",
      answer: "Go to your 'Active Bookings' and select the 'Reschedule' or 'Cancel' option at least 2 hours before the scheduled time."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept all major credit cards, debit cards, and popular digital wallets."
    }
  ];

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-6 flex justify-center">
      <div className="w-full max-w-5xl space-y-4">
        {policies.map((policy, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-sm">

            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className={`w-full flex items-start sm:items-center justify-between gap-4 px-4 sm:px-6 py-4 sm:py-5 text-left transition-all duration-300 font-semibold
                ${openIndex === index
                  ? 'bg-[#1E1E1E] text-white'
                  : 'bg-[#E5E7EB] text-gray-800 hover:bg-gray-300'
                }`}
            >
              <span className="text-sm sm:text-[16px] md:text-[17px] leading-snug">
                {policy.question}
              </span>

              <span className="text-lg sm:text-xl flex-shrink-0">
                {openIndex === index ? '✕' : (index >= 6 ? '＋' : '〉')}
              </span>
            </button>

            {openIndex === index && (
              <div className="bg-[#1E1E1E] px-4 sm:px-6 pb-4 sm:pb-6 text-gray-300 leading-relaxed text-sm sm:text-[15px]">
                {policy.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LegalPolicy;
