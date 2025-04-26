import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import ListingCard from '../components/ListingCard';
import Footer from '../components/Footer';

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function ExploreListings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/listings/`)
      .then(response => setListings(response.data))
      .catch(error => console.error('Error fetching listings:', error));
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Navbar />

      <section className="container mx-auto px-4 sm:px-8 py-12">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-800 mb-10 tracking-tight">
          📱 All Instagram Accounts for Sale
        </h1>

        {listings.length === 0 ? (
          <p className="text-center text-gray-500 italic mt-6">
            No listings available. Please check back later.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 animate-fade-in">
            {listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
