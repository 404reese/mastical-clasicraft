import React from 'react';

// Inline SVG for Shopping Cart icon as a fallback
const ShoppingCartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="ml-1"
  >
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

// Component for a single product card
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
      {/* Product Image */}
      <div className="relative w-full h-48 sm:h-64 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col">
        <h3 className="text-lg font-semibold text-stone-800 mb-1">{product.name}</h3>
        <div className="flex items-center justify-between">
          <p className="text-stone-600">${product.price.toFixed(2)}</p>
          <button className="bg-white text-stone-800 px-3 py-1.5 rounded-full shadow-md flex items-center text-sm font-semibold hover:bg-gray-100 transition-colors">
            Add to Cart
            <ShoppingCartIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
