import React from 'react';

const Reports = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FB] p-4 sm:p-6 md:p-8">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 
                      p-4 sm:p-6 md:p-8 
                      max-w-6xl mx-auto">
        
        {/* Company Overview Section */}
        <section className="mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 pb-2 border-b border-gray-100">
            Company Overview
          </h2>
          <p className="text-gray-500 leading-relaxed text-sm sm:text-[15px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of 
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </section>

        {/* Market Position and Competitors Section */}
        <section className="mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 pb-2 border-b border-gray-100">
            Market Position and Competitors
          </h2>
          <p className="text-gray-500 leading-relaxed text-sm sm:text-[15px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of 
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </section>

        {/* Challenges and Risks Section */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 pb-2 border-b border-gray-100">
            Challenges and Risks
          </h2>
          <p className="text-gray-500 leading-relaxed text-sm sm:text-[15px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book. It has survived not only five centuries.
          </p>
        </section>

      </div>
    </div>
  );
};

export default Reports;
