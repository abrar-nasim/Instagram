// Import necessary modules and components
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import ListingCard from '../components/ListingCard';

/**
 * Home component: Displays a list of Instagram listings.
 * Fetches data from the backend API and maps over listings.
 */
export default function Home() {
  const [listings, setListings] = useState([]);

  // Fetch listings when the component mounts
  useEffect(() => {
    axios.get('http://localhost:8000/api/listings/')
      .then(response => setListings(response.data))
      .catch(error => console.error('Error fetching listings:', error));
  }, []);

  return (
    <div>
      <Navbar /> {/* Navigation bar */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Instagram Listings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {listings.map(listing => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </div>
  );
}
