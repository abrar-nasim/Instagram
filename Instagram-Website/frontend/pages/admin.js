import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import AdminPanel from '../components/AdminPanel';

export default function AdminDashboard() {
  const [listings, setListings] = useState([]);
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState(''); // 'success' or 'error'

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/listings/`)
      .then(response => setListings(response.data))
      .catch(error => {
        console.error('Error fetching listings:', error);
        setStatus('Error loading listings.');
        setStatusType('error');
      });
  }, []);

  const handleDelete = async id => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/listings/${id}/`);
      setListings(listings.filter(listing => listing.id !== id));
      setStatus('Listing deleted successfully.');
      setStatusType('success');
    } catch (error) {
      console.error('Error deleting listing:', error);
      setStatus('Failed to delete listing.');
      setStatusType('error');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Admin Dashboard</h1>

        {status && (
          <div
            className={`mb-6 px-4 py-3 rounded-lg text-sm font-medium shadow-md ${
              statusType === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-700'
            }`}
          >
            {status}
          </div>
        )}

        <AdminPanel listings={listings} onDelete={handleDelete} />
      </div>
    </div>
  );
}
