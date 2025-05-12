import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-stone-300 py-12 md:py-16 rounded-t-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info Column */}
        <div className="col-span-1 md:col-span-1 flex flex-col">
         
          <h3 className="text-xl font-semibold text-white mb-4">ClasiCraft</h3>
          <p className="text-sm mb-6">
            20/21, Aba Mane Compund, 51K, Dockyard Road, Mazgaon Mumbai 400010
          </p>
           <p className="text-sm mb-6">
            +91 22 23755675 / +91 7208809410
          </p>
          <p className="text-sm mb-6">
            clasicraft@gmail.com
          </p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/clasicraft.india.7" target='_blank' aria-label="Facebook" className="hover:text-white transition-colors">
                <FaFacebook size={20} />
            </a>
            <a href="https://www.instagram.com/clasicraft/" target='_blank' aria-label="Instagram" className="hover:text-white transition-colors">
                <FaInstagram size={20} />
            </a>
            <a href="https://api.whatsapp.com/send?phone=+91%207208809410" target='_blank' aria-label="Twitter" className="hover:text-white transition-colors">
                <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

        {/* Services Column */}
        <div className="col-span-1 md:col-span-1 flex flex-col">
          <h4 className="text-lg font-semibold text-white mb-4">Products</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Small Furniture</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Trays</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Kitchen Utility</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Home/Office decor</a></li>
          </ul>
        </div>

        {/* Resources Column */}
        <div className="col-span-1 md:col-span-1 flex flex-col">
          <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Customer Testimonials</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Support Column */}
        <div className="col-span-1 md:col-span-1 flex flex-col">
          <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Returns & Refunds</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping & Delivery</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Payment Options</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 pt-8 border-t border-stone-700 text-center text-sm text-stone-400">
        &copy; 2025 Clasicraft. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;