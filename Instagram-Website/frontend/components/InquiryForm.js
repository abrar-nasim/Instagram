import React, { useState } from 'react';
import axios from 'axios';

export default function InquiryForm({ listing }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    proposed_price: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    const formattedData = {
      ...formData,
      proposed_price: formData.proposed_price === '' ? null : parseFloat(formData.proposed_price)
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/listings/inquiries/`,
        formattedData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      setStatus('Inquiry submitted successfully!');
      setFormData({ name: '', email: '', message: '', proposed_price: '' });
    } catch (error) {
      console.error('Error submitting inquiry:', error?.response?.data || error.message);

      setStatus('Failed to submit inquiry.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
      <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
      <input
        type="number"
        name="proposed_price"
        placeholder="Proposed Price (optional)"
        value={formData.proposed_price}
        onChange={handleChange}
        min="0"
        step="0.01"
        className="w-full p-2 border rounded"
      />
      <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="w-full p-2 border rounded" required />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit Inquiry</button>
      {status && <p className="mt-2">{status}</p>}
    </form>
  );
}
