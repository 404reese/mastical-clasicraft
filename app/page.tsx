import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import FeaturedProducts from '@/components/FeaturedProducts';
import ProductList from '@/components/productlist';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedProducts />
      <ProductList />
    </main>
  );
}