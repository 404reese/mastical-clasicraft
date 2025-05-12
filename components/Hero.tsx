"use client";

import { useEffect, useState } from 'react';
import { motion } from '@/components/ui/motion'; // Assuming motion comes from framer-motion aliased

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-24 lg:py-32">
      {/* Main Content Container: Relative positioning context and min-height for absolute children */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:min-h-[550px] xl:min-h-[600px]"> {/* Adjust min-height as needed */}

        {/* Text Content Container (Left, Overlapping, Top Layer) */}
        {/* Defaults to normal flow, becomes absolute on lg screens */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isLoaded ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }} // Stagger animation
          // Positioning: Absolute on lg+, left-aligned, vertically centered, higher z-index
          className="w-full max-w-xl lg:max-w-none lg:w-3/5 xl:w-1/2 lg:absolute lg:left-0 lg:top-0 lg:bottom-0 lg:flex lg:items-center lg:z-20"
        >
          {/* Inner div for blur, padding, and content alignment */}
          <div className="backdrop-blur-lg bg-white/20 rounded-2xl p-8 md:p-10 lg:p-12 shadow-xl"> {/* Added shadow back */}
            {/* Heading */}
            <h1
              // Removed individual motion from h1/p/button for simplicity as parent div animates
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#7a2353] leading-tight"
            >
              Transform Your Space With Style
            </h1>

            {/* Subheading */}
            <p
              className="mt-6 text-base md:text-lg text-[#b2889c]" // Removed max-w-md as parent controls width
            >
              We will help you to make an elegant and luxurious interior designed by professional interior designer.
            </p>

            {/* CTA Button */}
            <div
              className="mt-8"
            >
              <button className="px-6 py-3 bg-[#7a2353] text-white rounded-md hover:bg-gray-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-transform">
                Explore Our Collection
              </button>
            </div>
          </div>
        </motion.div>

        {/* Image Container (Right, Larger, Bottom Layer) */}
        {/* Defaults to normal flow with top margin, becomes absolute on lg screens */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isLoaded ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }} // Stagger animation
          // Positioning: Absolute on lg+, right-aligned, spans height, lower z-index, larger width
          className="w-full mt-10 lg:mt-0 lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-7/12 xl:w-3/5 lg:z-10"
        >
          <img
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
            alt="Modern living room with yellow accent chair"
            // Fill the container, maintain aspect ratio, apply rounding/shadow
            // h-full relies on the parent container having a defined height (lg:min-h-[...])
            className="w-full h-full object-cover rounded-3xl shadow-xl"
          />
        </motion.div>

      </div>

      {/* Features section (Remains below the main hero area) */}
      
    </section>
  );
};

// Feature Card Component (Unchanged from previous version)
const FeatureCard = ({
  icon,
  title,
  delay,
  isLoaded
}: {
  icon: string;
  title: string;
  delay: number;
  isLoaded: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="flex items-center p-4 rounded-lg"
    >
      <span className="text-3xl mr-4">{icon}</span>
      <span className="font-medium text-gray-700">{title}</span>
    </motion.div>
  );
};

export default Hero;