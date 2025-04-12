import React from 'react';
import Link from 'next/link';

const ListingCard = ({ listing }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-200">

      {/* Image */}
      <Link href={`/listing/${listing.id}`}>
        <img
          src="https://dummyimage.com/400x250/cccccc/ffffff.png&text=No+Image"
          alt={listing.title || listing.username}
          className="w-full h-56 object-cover cursor-pointer"
        />
      </Link>

      {/* Info */}
      <div className="p-5 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800 truncate">{listing.title || listing.username}</h2>

        <div className="flex flex-wrap gap-2 text-sm text-gray-600">
          <span className="bg-gray-100 px-2 py-1 rounded-full">Niche: {listing.niche}</span>
          <span className="bg-gray-100 px-2 py-1 rounded-full">Followers: {listing.followers}</span>
          <span className="bg-gray-100 px-2 py-1 rounded-full">Engagement: {listing.engagement}</span>
        </div>

        <p className="text-xl font-bold text-blue-600">₹ {listing.price}</p>

        <Link href={`/listing/${listing.id}`}>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-all duration-200">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ListingCard;
