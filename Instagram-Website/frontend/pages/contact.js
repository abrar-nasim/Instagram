import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { Mail, User, Send, DollarSign, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    proposed_price: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const formattedData = {
        ...formData,
        proposed_price: formData.proposed_price === '' ? null : parseFloat(formData.proposed_price)
      };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/listings/inquiries/`,
        formattedData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      setStatus('✅ Inquiry submitted successfully!');
      setFormData({ name: '', email: '', message: '', proposed_price: '' });
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      setStatus('❌ Failed to submit inquiry.');
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <Navbar />
      <section className="py-20 px-4 sm:px-6 max-w-xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">Send Us Your Bid!!</h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div className="relative">
              <User className="absolute top-3.5 left-3 text-gray-400" size={18} />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute top-3.5 left-3 text-gray-400" size={18} />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Offer Price */}
            <div className="relative">
              <DollarSign className="absolute top-3.5 left-3 text-gray-400" size={18} />
              <input
                type="number"
                name="proposed_price"
                placeholder="Your Offer Price (optional)"
                value={formData.proposed_price}
                onChange={handleChange}
                min="0"
                step="0.01"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <MessageSquare className="absolute top-3 left-3 text-gray-400" size={18} />
              <textarea
                name="message"
                placeholder="Page you want to buy"
                value={formData.message}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-200 shadow-md"
            >
              Send Inquiry
            </button>
          </form>

          {/* Status Message */}
          {status && (
            <p className="text-center mt-4 text-sm text-gray-600">{status}</p>
          )}
        </div>
      </section>
    </div>
  );
}
