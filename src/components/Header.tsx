
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@tripandthrill.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Best Travel Deals & Packages</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary">
                Trip & Thrill
              </span>
              <span className="text-xs text-muted-foreground block">Travel Agency</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Destinations</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Packages</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Hotels</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-foreground hover:text-primary py-2 font-medium">Home</a>
              <a href="#" className="text-foreground hover:text-primary py-2 font-medium">Destinations</a>
              <a href="#" className="text-foreground hover:text-primary py-2 font-medium">Packages</a>
              <a href="#" className="text-foreground hover:text-primary py-2 font-medium">Hotels</a>
              <a href="#" className="text-foreground hover:text-primary py-2 font-medium">About</a>
              <a href="#" className="text-foreground hover:text-primary py-2 font-medium">Contact</a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="outline" size="sm">Sign In</Button>
                <Button size="sm">Book Now</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
