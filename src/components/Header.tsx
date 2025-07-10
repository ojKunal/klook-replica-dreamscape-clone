
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Menu, User, Heart, ShoppingCart } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Klook
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Things to do</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Attractions</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Tours</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Activities</a>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Globe className="h-4 w-4 mr-2" />
              EN
            </Button>
            <Button variant="ghost" size="sm">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <ShoppingCart className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-gray-700 hover:text-orange-500 py-2">Things to do</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 py-2">Attractions</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 py-2">Tours</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 py-2">Activities</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
