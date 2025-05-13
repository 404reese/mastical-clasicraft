"use client";

import { useState, useEffect, useRef } from 'react'; // Added useRef
import Link from 'next/link';
import { Search, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const productsDropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null); // Ref for the dropdown close timer

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Clear timeout on component unmount
      if (productsDropdownTimeoutRef.current) {
        clearTimeout(productsDropdownTimeoutRef.current);
      }
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleProductsMouseEnter = () => {
    if (productsDropdownTimeoutRef.current) {
      clearTimeout(productsDropdownTimeoutRef.current);
      productsDropdownTimeoutRef.current = null;
    }
    setIsProductsDropdownOpen(true);
  };

  const handleProductsMouseLeave = () => {
    productsDropdownTimeoutRef.current = setTimeout(() => {
      setIsProductsDropdownOpen(false);
    }, 2000); // 2-second delay
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-sm backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-gray-800 font-medium transition-colors hover:text-gray-600">
              <img src="/logo.png" alt="ClasiCraft" className="h-6 md:h-8" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 items-center">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleProductsMouseEnter}
              onMouseLeave={handleProductsMouseLeave}
            >
              <div 
                role="button"
                tabIndex={0}
                aria-haspopup="true"
                aria-expanded={isProductsDropdownOpen}
                className="py-2 text-sm font-medium transition-colors relative group cursor-pointer flex items-center"
                style={{ color: '#7a2353' }}
              >
                Products
                <ChevronDown 
                  size={16} 
                  className={`ml-1 transition-transform duration-200 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} 
                />
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: '#7a2353' }}
                ></span>
                <style jsx>{`
                  div.group:hover {
                    color: #b2889c !important;
                  }
                  div.group:hover span {
                    background-color: #b2889c !important;
                  }
                  div.group:hover svg {
                    stroke: #b2889c !important;
                  }
                  div.group svg {
                    stroke: #7a2353;
                    transition: stroke 0.3s ease-in-out, transform 0.2s ease-in-out;
                  }
                `}</style>
              </div>

              {isProductsDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-20"
                  // onMouseEnter and onMouseLeave are handled by the parent div
                >
                  <DropdownItem href="/products/small-furniture" closeDropdown={() => { setIsProductsDropdownOpen(false); if (productsDropdownTimeoutRef.current) clearTimeout(productsDropdownTimeoutRef.current); }}>Small Furniture</DropdownItem>
                  <DropdownItem href="/products/trays" closeDropdown={() => { setIsProductsDropdownOpen(false); if (productsDropdownTimeoutRef.current) clearTimeout(productsDropdownTimeoutRef.current); }}>Trays</DropdownItem>
                  <DropdownItem href="/products/kitchen-utility" closeDropdown={() => { setIsProductsDropdownOpen(false); if (productsDropdownTimeoutRef.current) clearTimeout(productsDropdownTimeoutRef.current); }}>Kitchen Utility</DropdownItem>
                  <DropdownItem href="/products/decor" closeDropdown={() => { setIsProductsDropdownOpen(false); if (productsDropdownTimeoutRef.current) clearTimeout(productsDropdownTimeoutRef.current); }}>Home/Office decor</DropdownItem>
                </div>
              )}
            </div>

            <NavLink href="/policy">Policy</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          {/* Search Icon */}
          <div className="hidden md:flex items-center">
            <button
              aria-label="Search"
              className="p-2 rounded-full text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <Search size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              className="p-2 rounded-full text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="pt-2 pb-4 space-y-1 px-4">
            <MobileNavLink href="/" onClick={toggleMenu}>Home</MobileNavLink>
            <MobileNavLink href="/about" onClick={toggleMenu}>About</MobileNavLink>
            <MobileNavLink href="/products" onClick={toggleMenu}>Products</MobileNavLink>
            <MobileNavLink href="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
          </div>
          <div className="pb-4 px-4">
            <button
              aria-label="Search"
              className="flex items-center w-full p-3 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <Search size={18} className="mr-2" />
              <span>Search</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      href={href}
      className="py-2 text-sm font-medium transition-colors relative group"
      style={{ color: '#7a2353' }}
    >
      {children}
      <span
        className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
        style={{ backgroundColor: '#7a2353' }}
      ></span>
      <style jsx>{`
        a:hover {
          color: #b2889c !important;
        }
        .group:hover span {
          background-color: #b2889c !important;
        }
      `}</style>
    </Link>
  );
};

// New DropdownItem component
const DropdownItem = ({ href, children, closeDropdown }: { href: string; children: React.ReactNode; closeDropdown: () => void }) => {
  return (
    <Link
      href={href}
      onClick={() => {
        // Call the original closeDropdown logic which now also clears the timer
        closeDropdown();
      }}
      className="block w-full text-left px-4 py-2 text-sm"
    >
      {children}
      <style jsx>{`
        a {
          color: #374151;
          transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
        }
        a:hover {
          background-color: #f9fafb;
          color: #7a2353 !important; 
        }
      `}</style>
    </Link>
  );
};

const MobileNavLink = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block py-3 px-3 rounded-md transition-colors text-base font-medium"
      style={{ color: '#7a2353' }}
    >
      {children}
      <style jsx>{`
        a:hover {
          color: #b2889c !important;
          background-color: #f3f4f6;
        }
      `}</style>
    </Link>
  );
};

export default Navbar;