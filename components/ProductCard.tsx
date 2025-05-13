import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
// Component for a single product card
const ProductCard = ({ product, listView }) => {
  const hasDiscount = product.discountedPrice && product.discountedPrice < product.price;

  return (
    <div className={listView ? "flex flex-col justify-between h-full p-4" : "bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"}>
      {/* Product Image */}
      {!listView && (
        <div className="relative w-full h-48 sm:h-64 overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      )}

      {/* Product Details */}
      <div className={listView ? "flex flex-col h-full justify-between" : "p-4 flex flex-col"}>
        <h3 className="text-lg font-semibold text-stone-800 mb-1">{product.name}</h3>
        
        {/* Price display */}
        <div className="mb-3">
          {hasDiscount ? (
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-purple-900">
                ${product.discountedPrice.toFixed(2)}
              </span>
              <span className="text-stone-500 line-through">
                ${product.price.toFixed(2)}
              </span>
              {hasDiscount && (
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                  {Math.round((1 - product.discountedPrice / product.price) * 100)}% OFF
                </span>
              )}
            </div>
          ) : (
            <span className="text-lg font-semibold text-stone-800">
              ${product.price.toFixed(2)}
            </span>
          )}
        </div>
        
        {/* Buttons container */}
        <div className="flex gap-2 mt-auto">
          <button className="flex-1 bg-white text-stone-800 px-3 py-2 rounded-lg shadow-md flex items-center justify-center text-sm font-semibold hover:bg-gray-100 transition-colors border border-gray-200">
            View &nbsp;
            <IoEyeOutline size={20}/>
          </button>
          <button className="flex-1 bg-purple-900 text-white px-3 py-2 rounded-lg shadow-md flex items-center justify-center text-sm font-semibold hover:bg-purple-700 transition-colors border border-purple-900">
            Buy&nbsp;
            <IoCartOutline size={20}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
