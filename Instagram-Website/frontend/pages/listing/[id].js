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

  if (!listing) return <div className="p-4">Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Listing Details</h1>
        <div className="bg-white shadow-md p-6 rounded">
          <p><strong>Username:</strong> {listing.username}</p>
          <p><strong>Followers:</strong> {listing.followers}</p>
          <p><strong>Niche:</strong> {listing.niche}</p>
          <p><strong>Price:</strong> ${listing.price}</p>
          <p><strong>Contact Email:</strong> {listing.contact_email}</p>
          <p><strong>Sold:</strong> {listing.is_sold ? 'Yes' : 'No'}</p>
        </div>
      </div>
    </>
  );
}
