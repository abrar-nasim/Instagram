import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="container mx-auto px-6 py-12 max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>

        <div className="space-y-6 bg-white p-8 rounded-xl shadow-md text-lg text-gray-800">
          <p>
            <strong>📸 Instagram:</strong>{' '}
            <a
              href="https://instagram.com/placeholder"
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @yourhandle
            </a>
          </p>
          <p>
            <strong>📧 Email:</strong>{' '}
            <a href="mailto:youremail@example.com" className="text-blue-500 underline">
              youremail@example.com
            </a>
          </p>
          <p>
            <strong>📱 WhatsApp:</strong>{' '}
            <a
              href="https://wa.me/911234567890"
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              +91 12345 67890
            </a>
          </p>
          <p>
            <strong>📨 Telegram:</strong>{' '}
            <a
              href="https://t.me/yourusername"
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @yourusername
            </a>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
