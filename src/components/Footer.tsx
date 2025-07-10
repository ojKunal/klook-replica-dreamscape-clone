
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Klook
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted travel partner for unforgettable experiences around the world. Discover, book, and enjoy amazing activities wherever you go.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Things to do</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Attractions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Tours & Activities</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Day Trips</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Airport Transfers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Travel Insurance</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Booking Policies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Refund Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-400" />
                <span className="text-gray-300">support@klook.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-400 mt-1" />
                <span className="text-gray-300">
                  123 Travel Street<br />
                  Adventure City, AC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © 2024 Klook. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <img src="/api/placeholder/120/40" alt="Visa" className="h-6 opacity-70" />
              <img src="/api/placeholder/120/40" alt="Mastercard" className="h-6 opacity-70" />
              <img src="/api/placeholder/120/40" alt="PayPal" className="h-6 opacity-70" />
              <img src="/api/placeholder/120/40" alt="Apple Pay" className="h-6 opacity-70" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
