
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-orange-500">
                Klook
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Things to Do</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Tours</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Attractions</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Food & Dining</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Transport</a>
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-700">
              <Globe className="h-4 w-4 mr-2" />
              EN
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-700">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
              Sign Up
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
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-orange-500 py-2 font-medium">Things to Do</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 py-2 font-medium">Tours</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 py-2 font-medium">Attractions</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 py-2 font-medium">Food & Dining</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 py-2 font-medium">Transport</a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Button variant="ghost" size="sm" className="justify-start">
                  <Globe className="h-4 w-4 mr-2" />
                  EN
                </Button>
                <Button variant="ghost" size="sm" className="justify-start">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
                <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
