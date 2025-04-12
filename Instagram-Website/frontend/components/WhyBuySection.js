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
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Why Buy Instagram Accounts from Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg shadow-md">
              <CheckCircle className="text-green-500 mr-4" size={32} />
              <p className="text-lg font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBuySection;
