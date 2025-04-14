import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Instagram, Mail, PhoneCall, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <Navbar />

      <div className="container mx-auto px-6 py-16 max-w-2xl">
        <h1 className="text-4xl font-bold text-center text-gray-800">Contact Us </h1>
        <span className="block text-center text-sm sm:text-base text-gray-600 mb-10">
  (To sell your page or any other Inquiry)
</span>

        <div className="space-y-6 bg-white p-8 rounded-2xl shadow-lg text-gray-800 text-base sm:text-lg">
          {/* Instagram */}
          <div className="flex items-center gap-4">
            <Instagram className="text-pink-500" size={24} />
            <p>
              <strong>Instagram:</strong>{' '}
              <a
                href="https://instagram.com/placeholder"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                @hellyeahmedia
              </a>
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <Mail className="text-red-500" size={24} />
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:hellyeahmedia@gmail.com" className="text-blue-600 hover:underline">
                hellyeahmedia@gmail.com
              </a>
            </p>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-4">
            <PhoneCall className="text-green-500" size={24} />
            <p>
              <strong>WhatsApp:</strong>{' '}
              <a
                href="https://wa.me/911234567890"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                +91 12345 67890
              </a>
            </p>
          </div>

          {/* Telegram */}
          <div className="flex items-center gap-4">
            <Send className="text-blue-500" size={24} />
            <p>
              <strong>Telegram:</strong>{' '}
              <a
                href="https://t.me/hellyeahmedia"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                @hellyeahmedia
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
