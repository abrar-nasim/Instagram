import React from 'react';
import Link from 'next/link';

const ListingCard = ({ listing }) => {
  return (
    <div className="rounded-xl overflow-hidden bg-white border border-gray-200 shadow hover:shadow-md transition duration-300 text-sm">
      {/* Image */}
      <Link href={`/listing/${listing.id}`}>
        <img
          src="https://dummyimage.com/400x400/cccccc/ffffff.png&text=No+Image"
          alt={listing.title || listing.username}
          className="w-full h-44 object-cover cursor-pointer"
        />
      </Link>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Title */}
        <h2 className="text-sm sm:text-base font-semibold text-gray-800 truncate">
          {listing.title || listing.username}
        </h2>

        {/* Followers + Engagement */}
        <p className="text-xs sm:text-sm text-gray-500">
          {listing.followers} followers • {listing.engagement} engagement
        </p>

        {/* Niche + Price - NOW FIXED for mobile */}
        <div className="flex justify-between items-center gap-2 text-xs text-gray-600">
          <span className="truncate">Niche: {listing.niche}</span>
          <span className="text-blue-600 font-bold text-sm whitespace-nowrap">₹ {listing.price}</span>
        </div>

        {/* Button */}
        <Link href={`/listing/${listing.id}`}>
          <button className="mt-2 w-full bg-blue-600 text-white py-1.5 rounded-md text-sm hover:bg-blue-700 transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ListingCard;
