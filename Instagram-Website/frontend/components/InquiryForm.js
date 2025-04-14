import React, { useState } from 'react';
import axios from 'axios'
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
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents default form submission (which would trigger a GET request)
    setStatus('Submitting...');

    try {
      // const response = await axios.post(
      //   'http://127.0.0.1:8000/api/listings/inquiries/',
      //   formData,
      //   {
      //     headers: {
      //       'Content-Type': 'application/json' // Ensure the request is sent as JSON
      //     }
      //   }
      // );
      const formattedData = {
        ...formData,
        proposed_price: formData.proposed_price === '' ? null : parseFloat(formData.proposed_price)
      };

      const response = await axios.post(
        'http://127.0.0.1:8000/api/listings/inquiries/',
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
      console.error('Error submitting inquiry:', error);
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
