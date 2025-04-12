import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import ListingCard from '../components/ListingCard';
import Footer from '../components/Footer';

export default function ExploreListings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/listings/')
      .then(response => setListings(response.data))
      .catch(error => console.error('Error fetching listings:', error));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <section className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-10">All Instagram Accounts for Sale</h1>

        {listings.length === 0 ? (
          <p className="text-center text-gray-500">No listings available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
