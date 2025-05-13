"use client";
import React, { useState } from 'react';
import { getProducts } from '@/utils/products';
import ProductCard from '@/components/ProductCard';

// Inline SVG for Shopping Cart icon (reused from previous component)
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

// Component to display products in a grid or list
const KitchenView = () => {
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'name-asc' | 'name-desc'>('price-asc');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const products = getProducts(); // Get products using the function

  // Sort products based on sortBy state
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
    if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
    return 0;
  });

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered header and image with overlay */}
        <div className="flex flex-col items-center mb-10 md:mb-14">
          <div className="relative w-full rounded-2xl overflow-hidden flex items-center justify-center" style={{ minHeight: '160px' }}>
            <img src="/kitchen-header.png" alt="" className="w-full h-auto block rounded-2xl" />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl"></div>
            <h2 className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl font-bold text-white text-center z-10">
              Kitchen Utilities
            </h2>
          </div>
        </div>
        {/* Sorting controls and view mode toggle */}
        <div className="flex flex-row justify-between items-end gap-3 mb-6">
          {/* View mode toggle on the left */}
          <div className="flex gap-1 border border-stone-300 rounded px-1 py-1 bg-white">
            <button
              className={`px-3 py-1 rounded ${viewMode === 'grid' ? 'bg-purple-900 text-white' : 'text-stone-700'}`}
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
              type="button"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7" rx="2" />
                <rect x="14" y="3" width="7" height="7" rx="2" />
                <rect x="14" y="14" width="7" height="7" rx="2" />
                <rect x="3" y="14" width="7" height="7" rx="2" />
              </svg>
            </button>
            <button
              className={`px-3 py-1 rounded ${viewMode === 'list' ? 'bg-purple-900 text-white' : 'text-stone-700'}`}
              onClick={() => setViewMode('list')}
              aria-label="List view"
              type="button"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="4" y="5" width="16" height="3" rx="1.5" />
                <rect x="4" y="10.5" width="16" height="3" rx="1.5" />
                <rect x="4" y="16" width="16" height="3" rx="1.5" />
              </svg>
            </button>
          </div>
          {/* Price dropdown on the right */}
          <div>
            <select
              className="border border-stone-300 rounded px-3 py-2 text-stone-700"
              value={sortBy}
              onChange={e => setSortBy(e.target.value as 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc')}
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A-Z</option>
              <option value="name-desc">Name: Z-A</option>
            </select>
          </div>
        </div>
        {/* Product layout */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} listView={false} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-6 md:gap-8">
            {Array.from({ length: Math.ceil(sortedProducts.length / 2) }).map((_, rowIdx) => (
              <div key={rowIdx} className="flex gap-6 md:gap-8">
                {sortedProducts.slice(rowIdx * 2, rowIdx * 2 + 2).map((product) => (
                  <div key={product.id} className="w-1/2 flex bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Image square on LHS */}
                    <div className="relative flex-shrink-0 w-40 h-40 sm:w-48 sm:h-48 bg-gray-100">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    {/* Details on RHS */}
                    <div className="flex-1 flex">
                      <ProductCard product={product} listView />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

// Example Usage
const App = () => {
    return (
        <div>
            {/* You might have a header or navigation here */}
            <KitchenView />
            {/* You might have a footer here */}
        </div>
    );
};

export default KitchenView;
