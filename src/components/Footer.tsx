
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Smartphone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-orange-500">
                Klook
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              The world's leading platform for experiences and travel services, connecting travelers with unforgettable activities in 1000+ destinations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Discover */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Discover</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Things to Do</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Tours</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Attractions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Food & Dining</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Transport</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">WiFi & SIM Cards</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Booking Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Cancellation Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Safety</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Travel Tips</a></li>
            </ul>
          </div>

          {/* Get the App */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get the App</h3>
            <p className="text-gray-300 mb-4">Download our app for exclusive deals and easier booking</p>
            <div className="space-y-3">
              <a href="#" className="flex items-center bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors">
                <Smartphone className="h-6 w-6 mr-3" />
                <div>
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" className="flex items-center bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors">
                <Smartphone className="h-6 w-6 mr-3" />
                <div>
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © 2024 Klook Travel Technology Limited. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-orange-500">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-orange-500">Terms of Service</a>
              <a href="#" className="text-sm text-gray-400 hover:text-orange-500">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
