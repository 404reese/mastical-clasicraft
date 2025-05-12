import React from 'react';

const AboutUs = () => {
  return (
    <div className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            About ClasiCraft
          </h1>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            Manufacturers of Wooden Articles
          </p>
        </div>

        {/* Mission/Experience Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-stone-800 mb-4">Our Expertise</h2>
          <p className="text-stone-600">
            With more than three decades of professional experience as one of the specialized manufacturers of wooden products in the field, we offer an elaborate range for your perfect choice.
          </p>
        </div>

        {/* Materials and Products Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 md:mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-stone-800 mb-4">Quality Materials & Craftsmanship</h2>
            <p className="text-stone-600">
              We use only the finest material from Teakwood, Pinewood, Beachwood and MDF. Qualified technicians from our department make use of melamine polish on our wooden products.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-stone-800 mb-4">Our Product Range</h2>
            <p className="text-stone-600">
              We take pride in our unique resource of Tray, Folding Table, Bed Tray, Magazine Stand, Dustbin, Photo Frame, Spoon Stand, Coaster, Tissue Stand & Box, and many more, with a production base in the form of a full-fledged workshop situated at the heart of Mumbai.
            </p>
          </div>
        </div>

        {/* Delivery and Contact Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-12 md:mb-16">
             <h2 className="text-2xl md:text-3xl font-semibold text-stone-800 mb-4">Delivery and Reach</h2>
             <p className="text-stone-600">
               We ensure prompt delivery at competitive prices to our customers in India and Abroad.
             </p>
             <p className="text-stone-600 mt-4">
               <strong>GST NUMBER:</strong> GST 27AACFC1288Q1ZZ
             </p>
        </div>


        {/* Call to Action / Contact Section (Modified) */}
        <div className="text-center bg-[#7a2353] text-white rounded-xl shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-lg mb-6">We'd love to discuss your wooden article needs.</p>
            <a
                href="/contact" // Replace with your contact page link
                className="inline-block px-8 py-3 bg-white text-[#7a2353] rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
                Contact Us
            </a>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
