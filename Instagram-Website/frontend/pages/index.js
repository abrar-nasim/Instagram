import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import ListingCard from '../components/ListingCard';
import HeroSection from '../components/HeroSection';
import WhyBuySection from '../components/WhyBuySection';
import Footer from '../components/Footer';

export default function Home() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/listings/?is_featured=true')
      .then(response => setListings(response.data))
      .catch(error => console.error('Error fetching listings:', error));
  }, []);

  return (
    <div>
      {/* Navbar at the Top */}
      <Navbar />

      {/* Hero Section for Main Heading and CTA */}
      <HeroSection />

      {/* Display Listings */}
      <div className="container mx-auto p-6">

        <div className="flex justify-center mb-8">
          <select
            onChange={(e) => {
              const selectedNiche = e.target.value;
              const url = selectedNiche
                ? `http://127.0.0.1:8000/api/listings/?niche=${selectedNiche}`
                : `http://127.0.0.1:8000/api/listings/`;

              axios.get(url)
                .then(response => setListings(response.data))
                .catch(error => console.error('Error fetching filtered listings:', error));
            }}
            className="bg-white border border-gray-300 rounded-xl shadow-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 max-h-48 overflow-y-auto transition-all duration-300"
            defaultValue=""
            size={1}
          >
            <option value="">All Niches</option>
            <option value="fashion">Fashion</option>
            <option value="fitness">Fitness</option>
            <option value="memes">Memes</option>
            <option value="travel">Travel</option>
            <option value="crypto">Crypto</option>
            <option value="tech">Tech</option>
            <option value="education">Education</option>
            <option value="finance">Finance</option>
            <option value="sports">Sports</option>
            <option value="movie">Movie</option>
            <option value="facts&motivation">Facts & Motivation</option>
            <option value="miscellaneous">Miscellaneous</option>
          </select>
        </div>


        <h1 className="text-4xl font-bold text-center mb-8">🔥 Top Picks for You</h1>
        {listings.length === 0 ? (
          <p className="text-center text-gray-500">No listings available. Please check back later.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        )}
      </div>

      {/* Why Buy Section for Trust Building */}
      <WhyBuySection />

      {/* Footer for Links and Info */}
      <Footer />
    </div>
  );
}
