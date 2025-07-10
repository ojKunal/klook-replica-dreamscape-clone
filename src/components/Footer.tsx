
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Plane } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Plane className="h-6 w-6 text-primary" />
              <span className="text-2xl font-bold text-foreground">
                Trip & Thrill
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Your trusted travel partner for creating unforgettable memories around the world. Discover amazing destinations with our expertly crafted packages.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary/10 p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary/10 p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary/10 p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary/10 p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Destinations</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Travel Packages</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Hotels</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Flight Booking</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Car Rentals</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Honeymoon Packages</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Family Holidays</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Adventure Tours</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cultural Tours</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Business Travel</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Group Tours</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">info@tripandthrill.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <span className="text-muted-foreground">
                  123 Travel Street<br />
                  Adventure City, AC 12345<br />
                  United States
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-muted-foreground text-sm">
              © 2024 Trip & Thrill. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
