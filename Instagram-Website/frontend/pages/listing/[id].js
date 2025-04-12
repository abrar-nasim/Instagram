import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';

export default function ListingDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [listing, setListing] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`http://127.0.0.1:8000/api/listings/${id}/`)
        .then(response => setListing(response.data))
        .catch(error => console.error('Error fetching listing:', error));
    }
  }, [id]);

  if (!listing) return (
    <div className="bg-gray-50 min-h-screen p-6">
      <Navbar />
      <div className="container mx-auto text-center py-20 text-gray-500 text-lg">Loading...</div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-10">Listing Details</h1>

        <div className="bg-white rounded-xl shadow-lg p-8 max-w-xl mx-auto space-y-4 text-lg">
          <p><span className="font-semibold">Username:</span> {listing.username}</p>
          <p><span className="font-semibold">Followers:</span> {listing.followers}</p>
          <p><span className="font-semibold">Niche:</span> {listing.niche}</p>
          <p><span className="font-semibold">Price:</span> ${listing.price}</p>
          <p><span className="font-semibold">Contact Email:</span> {listing.contact_email}</p>
          <p><span className="font-semibold">Sold:</span> {listing.is_sold ? 'Yes' : 'No'}</p>
        </div>
      </div>
    </div>
  );
}
