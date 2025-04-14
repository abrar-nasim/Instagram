import React from 'react';
import { Lightbulb, ShieldCheck, Timer } from 'lucide-react';

export default function WhyBuyExplanation() {
  return (
    <section className="bg-[#f8f6f1] py-16 px-4 sm:px-8 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
          Why Buy Instagram Accounts from Us?
        </h2>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Lightbulb className="text-yellow-500 w-6 h-6 mt-1" />
            <p className="text-base sm:text-lg leading-relaxed">
              Are you looking to <strong>buy an Instagram account</strong> for personal or business needs?
              You’ve come to the right place. We offer a wide selection of verified Instagram accounts tailored
              to different niches and audiences.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <Timer className="text-blue-500 w-6 h-6 mt-1" />
            <p className="text-base sm:text-lg leading-relaxed">
              One of the biggest reasons to buy an Instagram account is to save <strong>time, money, and effort</strong>.
              Starting from scratch is hard — we give you a shortcut to growth.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <ShieldCheck className="text-green-600 w-6 h-6 mt-1" />
            <p className="text-base sm:text-lg leading-relaxed">
              At InstaMarket, we ensure secure transactions, niche targeting, and a fast delivery process.
              It’s time to scale your presence without the wait.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
