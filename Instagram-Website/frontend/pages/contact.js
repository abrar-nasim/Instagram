import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';

function getCSRFToken() {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, 10) === 'csrftoken=') {
        cookieValue = decodeURIComponent(cookie.substring(10));
        break;
      }
    }
  }
  return cookieValue;
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', proposed_price: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/listings/inquiries/',
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
  
      setStatus('Inquiry submitted successfully!');
      setFormData({ name: '', email: '', message: '', proposed_price: '' });
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      setStatus('Failed to submit inquiry.');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="container mx-auto px-6 py-12 max-w-2xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-md">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="proposed_price"
            placeholder="Your Offer Price (optional)"
            value={formData.proposed_price}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
          >
            Send Inquiry
          </button>
        </form>

        {status && <p className="text-center mt-4 text-sm text-gray-600">{status}</p>}
      </div>
    </div>
  );
}
