import React from 'react';
import MainLayout from '../templates/MainLayout';
import HeroSection from '../organisms/HeroSection';
import ProductGrid from '../organisms/ProductGrid';
import products from '../../data/productsData'

const Home = () => {

  return (
    <MainLayout>
      <HeroSection />
      <ProductGrid 
        products={products} 
        title="Productos destacados del año" 
      />
    </MainLayout>
  );
};

export default Home;