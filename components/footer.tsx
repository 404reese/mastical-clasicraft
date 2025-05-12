import React from 'react';
// Assuming Font Awesome or similar is used for social icons.
// If not, you can replace with inline SVGs or other icon methods.

// Inline SVGs for social icons as a fallback
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.016 3.657 9.184 8.437 9.913V14.89h-2.54V12h2.54V9.797c0-2.505 1.492-3.89 3.776-3.89 1.094 0 2.24.195 2.24.195v2.453h-1.26c-1.247 0-1.659.776-1.659 1.51v1.816h2.773l-.443 2.89h-2.33v6.023C18.343 21.184 22 17.016 22 12c0-5.523-4.477-10-10-10z"/></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.716 0 3.056.01 4.122.061 1.07.05 1.79.213 2.42.467.63.255 1.17.607 1.71.957a4.995 4.995 0 0 1 .957 1.71c.254.63.417 1.35.467 2.42.051 1.066.061 1.406.061 4.122s-.01 3.056-.061 4.122c-.05 1.07-.213 1.79-.467 2.42a4.995 4.995 0 0 1-.957 1.71c-.54.35-1.08.702-1.71.957-.63.254-1.35.417-2.42.467-1.066.051-1.406.061-4.122.061s-3.056-.01-4.122-.061c-1.07-.05-1.79-.213-2.42-.467a4.995 4.995 0 0 1-1.71-.957c-.35-.54-.702-1.08-.957-1.71-.254-.63-.417-1.35-.467-2.42C2.01 15.056 2 14.716 2 12s.01-3.056.061-4.122c.05-1.07.213-1.79.467-2.42a4.995 4.995 0 0 1 .957-1.71c.35-.54.702-1.08.957-1.71.63-.254 1.35-.417 2.42-.467C8.944 2.01 9.284 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 3.5c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5zm0 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm6.5-3c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5z"/></svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.283 5.032a8.03 8.03 0 0 1-2.357.646 4.028 4.028 0 0 0 1.756-2.271 8.02 8.02 0 0 1-2.558.978 4.01 4.01 0 0 0-6.823 3.658 11.49 11.49 0 0 1-8.313-4.215 4.009 4.009 0 0 0 1.247 5.354 4.007 4.007 0 0 1-1.816-.501v.05a4.011 4.011 0 0 0 3.21 3.935 4.02 4.02 0 0 1-1.803.069 4.01 4.01 0 0 0 3.734 2.774 8.033 8.033 0 0 1-4.987 1.717 8.06 8.06 0 0 1-.962-.056 11.487 11.487 0 0 0 6.232 1.824c7.48 0 11.56-6.18 11.56-11.56 0-.177-.004-.353-.012-.527a8.377 8.377 0 0 0 2.053-2.123z"/></svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-7 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm2 13h-2v-6h-2v6H8v-6H6v6H4v-7h10v7z"/></svg>
);


const Footer = () => {
  return (
    <footer className="bg-stone-800 text-stone-300 py-12 md:py-16 rounded-t-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info Column */}
        <div className="col-span-1 md:col-span-1 flex flex-col">
          <h3 className="text-xl font-semibold text-white mb-4">ClasiCraft</h3>
          <p className="text-sm mb-6">
            Join us in transforming your living spaces with furniture that
            blends elegance and practicality seamlessly.
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
                <FacebookIcon />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
                <InstagramIcon />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
                <TwitterIcon />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
                <LinkedInIcon />
            </a>
          </div>
        </div>

        {/* Services Column */}
        <div className="col-span-1 md:col-span-1 flex flex-col">
          <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Custom Furniture</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Furniture Repair</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Home Appliances</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Decorating</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Furniture Accessories</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Furniture Tours</a></li>
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