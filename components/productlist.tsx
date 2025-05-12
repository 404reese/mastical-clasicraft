import React from 'react';
import ProductCard from './ProductCard';
import { getProducts } from '../utils/products';

// Component to display a list of product cards in a grid
const ProductList = ({ products }) => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-10 md:mb-14">
          Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Example Usage (You would typically fetch your product data)
const App = () => {
    const products = getProducts();
    return <ProductList products={products} />;
};

export default App;
