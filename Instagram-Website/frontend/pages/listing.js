// Import React and necessary hooks/components
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import axios from 'axios';

/**
 * Listing component: Displays detailed information for a single Instagram listing.
 * Uses dynamic routing to fetch the listing based on the ID from the URL.
 */
export default function Listing() {
  const router = useRouter();
  const { id } = router.query;
  const [listing, setListing] = useState(null);

  const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    if (id) {
      axios.get(`${BASE_URL}/api/listings/${id}/`)
        .then(response => setListing(response.data))
        .catch(error => console.error('Error fetching listing:', error));
    }
  }, [id]);

  if (!listing) return <p className="text-center">Loading...</p>;

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">{listing.username}</h1>
        <p>Niche: {listing.niche}</p>
        <p>Followers: {listing.followers}</p>
        <p>Price: ₹{listing.price}</p>
      </div>
    </div>
  );
}
