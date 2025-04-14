import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import ListingCard from '../components/ListingCard';
import HeroSection from '../components/HeroSection';
import WhyBuySection from '../components/WhyBuySection';
import Footer from '../components/Footer';
import TabbedInfoSection from '../components/TabbedInfoSection';
import TypingBanner from '../components/TypingBanner';

export default function Home() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/listings/?is_featured=true')
      .then((response) => setListings(response.data))
      .catch((error) => console.error('Error fetching listings:', error));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <TypingBanner />
      <HeroSection />

      {/* Info Section */}
      <div className="bg-stone-100">
        <TabbedInfoSection />
      </div>

      {/* Listings Section */}
      <section className="bg-white py-14 px-4 sm:px-8">
        {/* Niche Filter */}
        <div className="flex justify-center mb-10">
          <select
            onChange={(e) => {
              const selectedNiche = e.target.value;
              const url = selectedNiche
                ? `http://127.0.0.1:8000/api/listings/?niche=${selectedNiche}`
                : `http://127.0.0.1:8000/api/listings/?is_featured=true`;

              axios
                .get(url)
                .then((response) => setListings(response.data))
                .catch((error) => console.error('Error fetching filtered listings:', error));
            }}
            className="bg-white border border-gray-300 rounded-xl shadow-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 max-h-48 overflow-y-auto transition-all duration-300"
            defaultValue=""
          >
            <option value="">All Niches</option>
            <option value="fashion">Fashion</option>
            <option value="fitness">Fitness</option>
            <option value="memes">Memes</option>
            <option value="tech">Tech</option>
            <option value="education">Education</option>
            <option value="sports">Sports</option>
            <option value="facts&motivation">Facts & Motivation</option>
            <option value="miscellaneous">Miscellaneous</option>
          </select>
        </div>

        {/* Listings Display */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-10">
          🔥 Top Picks for You
        </h1>

        {listings.length === 0 ? (
          <div className="text-center text-gray-500 mt-10 space-y-3">
            <p className="text-xl sm:text-2xl font-semibold text-gray-600">
              😕 No featured listings in this niche.
            </p>
            <a
              href="/explore"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-xl transition duration-200 shadow"
            >
              🔍 Browse all Instagram accounts
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        )}
      </section>

      <WhyBuySection />
      <Footer />
    </div>
  );
}
