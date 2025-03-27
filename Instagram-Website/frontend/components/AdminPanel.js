// Import necessary modules
import React from 'react';

/**
 * AdminPanel component: A reusable component that displays a table of listings.
 * Props: 'listings' (an array of listing objects) and 'onDelete' (a function to handle deletion).
 */
export default function AdminPanel({ listings, onDelete }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Listings</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Username</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {listings.map(listing => (
            <tr key={listing.id} className="text-center">
              <td className="border p-2">{listing.id}</td>
              <td className="border p-2">{listing.username}</td>
              <td className="border p-2">${listing.price}</td>
              <td className="border p-2">
                <button onClick={() => onDelete(listing.id)} className="bg-red-500 text-white p-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
