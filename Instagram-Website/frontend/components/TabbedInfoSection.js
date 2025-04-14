import React, { useState } from 'react';
import { ShoppingCart, PackageCheck, Info, Truck } from 'lucide-react';

const tabs = [
  {
    title: 'Buy Instagram Account',
    icon: <ShoppingCart size={22} />, 
    content: `It is super easy and safe to buy Instagram accounts through our platform. We filter and verify all accounts to ensure they have real, active followers. You can submit an offer, we’ll negotiate on your behalf, and once confirmed, we’ll send you the invoice and contract. Enjoy peace of mind with our 100% money-back guarantee.`
  },
  {
    title: 'Sell Instagram Account',
    icon: <PackageCheck size={22} />, 
    content: `List your Instagram account for sale with ease. We connect you with real buyers around the world. We charge only a small fee once your account sells. Selling your account through us is simple and secure.`
  },
  {
    title: 'Transactions',
    icon: <Info size={22} />, 
    content: `We use secure payment gateways and solid contracts to ensure safe transactions for both buyers and sellers. Transactions are protected and may even be tax-deductible depending on your region.`
  },
  {
    title: 'Delivery',
    icon: <Truck size={22} />, 
    content: `Delivery is fast — usually within 3 business days. We take care of transferring account credentials after payment and ensure a smooth experience for both parties.`
  }
];

const TabbedInfoSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    // <section className="bg-gray-50 py-16 px-4 md:px-10">
    <section className="bg-stone-100 py-12 px-4 md:px-10">

      <div className="container mx-auto max-w-5xl">
        {/* Tab Buttons */}
        <div className="flex justify-start md:justify-evenly overflow-x-auto gap-2 sm:gap-4 px-1 sm:px-0 mb-6 sm:mb-10">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap text-[11px] sm:text-sm font-medium transition-all duration-200 border 
                ${index === activeTab
                  ? 'bg-blue-100 text-blue-700 border-blue-300'
                  : 'bg-gray-100 text-gray-600 border-transparent hover:border-gray-300'}`}
            >
              {tab.icon}
              <span className="hidden xs:inline text-[11px] sm:text-sm">{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md text-gray-800 text-sm md:text-base leading-relaxed max-h-[300px] sm:max-h-none overflow-y-auto sm:overflow-visible transition-opacity duration-300">

          {tabs[activeTab].content}
        </div>
      </div>
    </section>
  );
};

export default TabbedInfoSection;
