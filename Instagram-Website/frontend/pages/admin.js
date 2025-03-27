// // Import necessary modules and components
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AdminPanel from '../components/AdminPanel';
// import Navbar from '../components/Navbar';

// /**
//  * Admin Dashboard Page: Allows admin users to manage listings.
//  * Fetches all listings from the backend and provides options for deletion.
//  */
// export default function AdminDashboard() {
//   const [listings, setListings] = useState([]);
//   const [status, setStatus] = useState('');

//   // Fetch listings from backend API when component mounts
//   useEffect(() => {
//     axios.get('http://localhost:8000/api/listings/')
//       .then(response => setListings(response.data))
//       .catch(error => {
//         console.error('Error fetching listings:', error);
//         setStatus('Error loading listings.');
//       });
//   }, []);

//   // Delete a listing via API call
//   const handleDelete = async id => {
//     try {
//       await axios.delete(`http://localhost:8000/api/listings/${id}/`);
//       setList(listings.filter(listing => listing.id !== id));
//       setStatus('Listing deleted successfully.');
//       // Refresh listings after deletion
//       axios.get('http://localhost:8000/api/listings/')
//         .then(response => setListings(response.data));
//     } catch (error) {
//       console.error('Error deleting listing:', error);
//       setStatus('Failed to delete listing.');
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="container mx-auto p-4">
//         <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
//         {status && <p className="text-red-500">{status}</p>}
//         <AdminPanel listings={listings} onDelete={handleDelete} />
//       </div>
//     </div>
//   );
// }


// Import React and necessary hooks/components
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import AdminPanel from '../components/AdminPanel';

/**
 * Admin Dashboard Page: Provides a user interface for the admin to manage Instagram listings.
 * It fetches the listings and passes them to the AdminPanel component.
 */
export default function AdminDashboard() {
  const [listings, setListings] = useState([]);
  const [status, setStatus] = useState('');

  // Fetch all listings from the backend API when the component mounts
  useEffect(() => {
    axios.get('http://localhost:8000/api/listings/')
      .then(response => setListings(response.data))
      .catch(error => {
        console.error('Error fetching listings:', error);
        setStatus('Error loading listings.');
      });
  }, []);

  // Handle deletion of a listing
  const handleDelete = async id => {
    try {
      await axios.delete(`http://localhost:8000/api/listings/${id}/`);
      setStatus('Listing deleted successfully.');
      // Update the listings state by filtering out the deleted listing
      setListings(listings.filter(listing => listing.id !== id));
    } catch (error) {
      console.error('Error deleting listing:', error);
      setStatus('Failed to delete listing.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        {status && <p className="text-red-500">{status}</p>}
        <AdminPanel listings={listings} onDelete={handleDelete} />
      </div>
    </div>
  );
}
