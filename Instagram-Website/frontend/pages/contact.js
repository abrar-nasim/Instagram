// Import necessary modules and components
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';

/**
 * Contact component: Provides a form for buyers to submit inquiries.
 * On submission, the inquiry is sent to the backend API.
 */
export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', proposed_price: '' });
  const [status, setStatus] = useState('');

  // Update state when form inputs change
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      await axios.post('http://localhost:8000/api/inquiries/', formData);
      setStatus('Inquiry submitted successfully!');
      setFormData({ name: '', email: '', message: '', proposed_price: '' });
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      setStatus('Failed to submit inquiry.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="proposed_price" placeholder="Your Offer Price (optional)" value={formData.proposed_price} onChange={handleChange} className="w-full p-2 border rounded" />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="w-full p-2 border rounded" required />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send Inquiry</button>
        </form>
        {status && <p className="mt-2">{status}</p>}
      </div>
    </div>
  );
}
