// Import necessary modules
import React, { useState } from 'react';
import axios from 'axios';

/**
 * InquiryForm component: Form for buyers to submit inquiries about a listing.
 * Props: 'listing' object to pre-fill some details.
 */
export default function InquiryForm({ listing }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    proposed_price: '',
  });
  const [status, setStatus] = useState('');

  // Handle changes in form fields
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit the inquiry form
  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      // Post inquiry data to the backend API
      await axios.post('http://localhost:8000/api/inquiries/', {
        ...formData,
        listing_id: listing.id,
      });
      setStatus('Inquiry submitted successfully!');
      setFormData({ name: '', email: '', message: '', proposed_price: '' });
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      setStatus('Failed to submit inquiry.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
      <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
      <input type="text" name="proposed_price" placeholder="Proposed Price (optional)" value={formData.proposed_price} onChange={handleChange} className="w-full p-2 border rounded" />
      <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="w-full p-2 border rounded" required />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit Inquiry</button>
      {status && <p className="mt-2">{status}</p>}
    </form>
  );
}
