import React, { useState } from 'react';
import { Lightbulb, ShieldCheck, Timer, ChevronDown, ChevronUp, Rocket, TrendingUp, Zap } from 'lucide-react';

export default function WhyBuyExplanation() {
  const faqs = [
    {
      icon: <Lightbulb className="text-yellow-500 w-6 h-6" />,
      title: 'Is having your own page still worth it?',
      content: 'Yes, absolutely. Creating and growing your own Instagram page gives you full creative control, builds authentic relationships with followers, and costs nothing but time. It’s a long-term personal branding asset. In a future where many jobs may be automated, your attention and audience are currency. Owning your own page is like owning digital real estate that will only grow in value.'
    },
    {
      icon: <Rocket className="text-purple-500 w-6 h-6" />,
      title: 'Why buy an Instagram account instead?',
      content: 'Buying skips the hardest parts—getting the first 1k–10k followers and struggling with algorithm visibility. You get instant credibility, reach, and monetization opportunities without the months (or years) of building.'
    },
    {
      icon: <Zap className="text-pink-500 w-6 h-6" />,
      title: 'How fast can I earn from a bought account?',
      content: 'A 20k follower fitness account can earn ₹100–₹500 per sponsored post immediately. Compare that to 1–2 years of daily effort just to reach the same level organically.'
    },
    {
      icon: <TrendingUp className="text-green-600 w-6 h-6" />,
      title: 'Is it better for business?',
      content: 'Yes. Brands and customers respond to proof. A bought page with real followers and history performs better in brand deals, paid ads, and organic reach. It lets you focus on scaling income, not starting from scratch.'
    },
    {
      icon: <ShieldCheck className="text-blue-600 w-6 h-6" />,
      title: 'Final verdict?',
      content: 'If you’re treating Instagram like a business, buying a page gives you a head start—customers, income, and trust from day one. It’s like renting a prime retail spot instead of building from empty land. Both work, but one earns faster.'
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-blue-50 py-16 px-4 sm:px-8 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900 text-center">
          Should You Grow or Buy an Instagram Account?
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-sm rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left text-base sm:text-lg font-medium text-gray-900 hover:bg-blue-100 transition-all"
              >
                <div className="flex items-center gap-3">
                  {faq.icon}
                  <span>{faq.title}</span>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 text-sm sm:text-base">
                  {faq.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
