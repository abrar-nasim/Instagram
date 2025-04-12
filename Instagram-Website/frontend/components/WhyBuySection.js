import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyBuySection = () => {
  const benefits = [
    'Verified and Secure Accounts',
    'Transparent Pricing with No Hidden Fees',
    '24/7 Support for Buyers and Sellers',
    'Accounts with Real Followers and High Engagement'
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10">
          Why Buy Instagram Accounts from Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200 text-left"
            >
              <CheckCircle className="text-green-500 mr-4 min-w-[32px]" size={28} />
              <p className="text-base sm:text-lg text-gray-700 font-medium">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBuySection;
