


import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ListingCard from '../../components/ListingCard';
import {
  User, Users, Tag, IndianRupee, Mail,
  ShieldCheck, Verified, Headphones
} from 'lucide-react';


// Reusable field block
const Field = ({ icon, label, value }) => (
  <p className="flex items-center gap-3 text-gray-700 text-sm sm:text-base bg-gray-50 px-3 py-2 rounded-lg border border-gray-100 shadow-sm">
    {icon}
    <span className="font-semibold text-gray-800">{label}:</span> <span className="text-gray-600">{value}</span>
  </p>
);

// Reusable benefits block
const Benefit = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow hover:shadow-md transition">
    {icon}
    <p className="font-semibold text-gray-800">{title}</p>
    <p className="text-sm text-gray-500">{desc}</p>
  </div>
);

export default function ListingDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [listing, setListing] = useState(null);
  const [related, setRelated] = useState([]);
  const [status, setStatus] = useState('');
  {
    status && (
      <p className="mt-4 text-center text-green-600 font-semibold">{status}</p>
    )
  }


  // Load listing and related accounts
  useEffect(() => {
    if (id) {
      axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/listings/${id}/`)
        .then(res => {
          setListing(res.data);
          if (res.data?.niche) {
            axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/listings/?niche=${res.data.niche}`)
              .then(r => {
                const filtered = r.data.filter(item => item.id !== res.data.id);
                setRelated(filtered.slice(0, 4));
              });
          }
        })
        .catch(err => console.error('Error fetching listing:', err));
    }
  }, [id]);

  // Load PayPal button
  useEffect(() => {
    if (listing && window.paypal) {
      const container = document.getElementById('paypal-button-container');
      if (container) container.innerHTML = ''; // cleanup if re-rendered

      window.paypal.Buttons({
        createOrder: (data, actions) => {
          const usdAmount = (listing.price / 83).toFixed(2);
          return actions.order.create({
            purchase_units: [{
              description: `Instagram Page @${listing.username}`,
              amount: {
                currency_code: 'USD',
                value: usdAmount
              }
            }]
          });
        },
        onApprove: async (data, actions) => {
          const details = await actions.order.capture();
          setStatus("✅ Payment successful! We’ll contact you shortly.");
          console.log("Buyer Info:", details.payer);
        },
        onError: (err) => {
          console.error("❌ PayPal Error:", err);
          alert("❌ Payment failed.");
        }
      }).render('#paypal-button-container');

    }
  }, [listing]);

  if (!listing) return (
    <div className="bg-gray-50 min-h-screen p-6">
      <Navbar />
      <div className="container mx-auto text-center py-20 text-gray-500 text-lg">Loading...</div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Title */}
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-900">
          @{listing.username}
        </h1>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-4 text-gray-800 text-base sm:text-lg border border-blue-100">
          <img
            src={listing.image || 'https://dummyimage.com/600x400/cccccc/ffffff.png&text=No+Image'}
            alt={listing.title || listing.username}
            className="w-full h-64 object-cover rounded-xl border border-gray-200"
          />
          <div className="space-y-4">
            <Field icon={<User size={18} />} label="Username" value={`@${listing.username}`} />
            <Field icon={<Users size={18} />} label="Followers" value={listing.followers} />
            <Field icon={<Tag size={18} />} label="Niche" value={listing.niche} />
            <Field icon={<IndianRupee size={18} />} label="Price" value={`₹ ${listing.price}`} />
            <Field icon={<Mail size={18} />} label="Contact Email" value={listing.contact_email} />
            <Field icon={<ShieldCheck size={18} />} label="Sold" value={listing.is_sold ? 'Yes' : 'No'} />
          </div>

          {/* PayPal Button */}
          {/* PayPal Button */}
          {!listing.is_sold && (
            <>
              <div className="pt-6 border-t mt-6">
                <div id="paypal-button-container"></div>
              </div>
              {status && (
                <p className="mt-4 text-center text-green-600 font-semibold">{status}</p>
              )}
            </>
          )}

        </div>
      </div>

      {/* Benefit Badges */}
      <div className="bg-blue-50 px-4 sm:px-8 py-10 border-t border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <Benefit icon={<Verified className="w-10 h-10 text-green-500 mb-2" />} title="Verified Accounts" desc="No bots, real audiences only." />
          <Benefit icon={<ShieldCheck className="w-10 h-10 text-blue-500 mb-2" />} title="Safe Transactions" desc="Pay only after confirmation." />
          <Benefit icon={<Headphones className="w-10 h-10 text-purple-500 mb-2" />} title="24/7 Support" desc="Assistance through every step." />
        </div>
      </div>

      {/* Related Listings */}
      <div className="bg-white px-4 sm:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-800">Related Accounts</h2>
          {related.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {related.map(item => (
                <ListingCard key={item.id} listing={item} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-sm">No related listings found in this niche.</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
