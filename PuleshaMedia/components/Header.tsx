import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/20">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-black rounded-[2px]"></div>
            </div>
            <span className="text-xl text-white font-medium">
              Pulesha Media
            </span>
          </div>

          {/* Desktop Navigation - Moved to Right */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </a>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 border-t border-white/20 pt-6">
            <div className="flex flex-col space-y-6">
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </a>
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">
                Features
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}