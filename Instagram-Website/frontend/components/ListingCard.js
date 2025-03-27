// Import React
import React from 'react';
import Link from 'next/link';

/**
 * ListingCard component: Displays a summary of an Instagram listing.
 * Props: 'listing' object containing details such as username, niche, and price.
 */
export default function ListingCard({ listing }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{listing.username}</h2>
      <p>Niche: {listing.niche}</p>
      <p>Followers: {listing.followers}</p>
      <p>Price: ${listing.price}</p>
      <Link href={`/listing?id=${listing.id}` } legacyBehavior>
        <a className="text-blue-500 underline mt-2 block">View Details</a>
      </Link>
    </div>
  );
}
