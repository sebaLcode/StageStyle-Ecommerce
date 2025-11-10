import React from 'react';
import Navbar from '../organisms/Navbar';
import ProductGrid from '../organisms/ProductGrid';
import products from '../../data/productsData';

const Hoodies = () => {
  const hoodies = products.filter(p => p.category === "Hoodie");
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1 className="text-center mb-4">Hoodies</h1>
        <ProductGrid products={hoodies} />
      </div>
    </>
  );
};

export default Hoodies;