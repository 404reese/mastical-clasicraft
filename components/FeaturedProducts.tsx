import React from 'react';

const featuredItems = [
  { // Item 1: WOODEN TABLE (matches Box 1 in image) - Modified to be image-only
    type: 'image', // Changed from 'textAndImage'
    imageUrl: '/table.jpg', // Placeholder image URL
    alt: 'Foldable wooden table',
    containerClass: 'bg-stone-100 rounded-xl shadow-lg overflow-hidden', // Removed padding, added overflow-hidden
    gridConfig: 'lg:col-span-2 lg:row-span-2', 
    imageClass: 'w-full h-full object-cover', // Ensures image fills the container
  },
  { // Item 2: Wooden tray (matches Box 2 in image)
    type: 'image',
    imageUrl: '/table.jpg',
    alt: 'Wooden tray on a table',
    containerClass: 'bg-white rounded-xl shadow-lg overflow-hidden aspect-[4/3] sm:aspect-auto',
    gridConfig: 'lg:col-span-2 lg:row-span-1', // Adjusted for image layout: spans 2 columns and 1 row on large screens
    imageClass: 'w-full h-full object-cover',
  },
  
  { // Item 4: Dark wood side table (matches Box 4 in image)
    type: 'image',
    imageUrl: '/table.jpg',
    alt: 'Dark wood side table',
    containerClass: 'bg-white rounded-xl shadow-lg overflow-hidden aspect-[4/3] sm:aspect-auto',
    gridConfig: 'lg:col-span-1 lg:row-span-1', // Adjusted for image layout: spans 1 column and 1 row on large screens
    imageClass: 'w-full h-full object-cover',
  },
  { // Item 3: MAGAZINE RACK (CTA) (matches Box 3 in image)
    type: 'cta',
    title: 'GET 15% OFF',
    buttonText: 'Shop Now',
    containerClass: 'bg-[#84345d] text-white p-4 sm:p-6 rounded-xl shadow-lg flex flex-col justify-center items-center text-center h-full',
    gridConfig: 'lg:col-span-1 lg:row-span-1 min-h-[200px] sm:min-h-[250px]', // Adjusted for image layout: spans 1 column and 1 row on large screens
    titleClass: 'text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4',
    buttonClass: 'mt-3 sm:mt-4 px-5 py-2.5 sm:px-6 sm:py-3 bg-white text-[#84345d] rounded-md hover:bg-gray-100 font-semibold transition-colors',
  },
  { // Item 5: Tall wooden magazine rack (matches Box 5 in image)
    type: 'image',
    imageUrl: '/table.jpg',
    alt: 'Tall wooden magazine rack',
    containerClass: 'bg-white rounded-xl shadow-lg overflow-hidden',
    gridConfig: 'lg:col-span-1 lg:row-span-2', // Adjusted for image layout: spans 1 column and 2 rows on large screens
    imageClass: 'w-full h-full object-cover',
  },
//   { // Item 6: Wide wooden desk (not explicitly shown in the initial 7 boxes of the image layout)
//     type: 'image',
//     imageUrl: 'https://images.unsplash.com/photo-1533090481720-856c6e7c4c37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzCjV8fHdvb2RlbiUyMGRlc2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
//     alt: 'Wide wooden desk',
//     containerClass: 'bg-white rounded-xl shadow-lg overflow-hidden aspect-video sm:aspect-auto',
//     gridConfig: 'sm:col-span-2 lg:col-span-1', // Kept original config, will flow after the initial 7 items
//     imageClass: 'w-full h-full object-cover',
//   },
//     { // Item 7: Modern chair (matches Box 7 in image)
//     type: 'image',
//     imageUrl: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGludGVrioreX2Z1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
//     alt: 'Modern chair',
//     containerClass: 'bg-white rounded-xl shadow-lg overflow-hidden aspect-[4/3] sm:aspect-auto',
//     gridConfig: 'lg:col-span-1 lg:row-span-1', // Adjusted for image layout: spans 1 column and 1 row on large screens
//     imageClass: 'w-full h-full object-cover',
//   }
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#fbf8fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 text-center mb-10 md:mb-14">
          Discover Our Collections
        </h2>
        {/* Adjusted grid classes for a 3-column layout on large screens and dense flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-7 grid-flow-row-dense auto-rows-[minmax(0,auto)]">
          {featuredItems.map((item, index) => (
            <div key={`${index}-${item.alt}`} className={`${item.gridConfig} ${item.containerClass}`}>
              {item.type === 'textAndImage' && item.title && item.imageUrl && item.textClass && item.imageClass && (
                <>
                  <h3 className={item.textClass}>{item.title}</h3>
                  <img src={item.imageUrl} alt={item.alt} className={item.imageClass} />
                </>
              )}
              {item.type === 'image' && item.imageUrl && item.imageClass && (
                <img src={item.imageUrl} alt={item.alt} className={item.imageClass} />
              )}
              {item.type === 'cta' && item.title && item.buttonText && item.titleClass && item.buttonClass && (
                <>
                  <h3 className={item.titleClass}>{item.title}</h3>
                  <button className={item.buttonClass}>{item.buttonText}</button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;