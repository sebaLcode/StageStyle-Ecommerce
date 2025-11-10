import React from 'react';
import Navbar from '../organisms/Navbar';
import ProductGrid from '../organisms/ProductGrid';
import products from '../../data/productsData';


const Camisetas = () => {
  const camisetas = products.filter(p => p.category === "Camiseta");
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1 className="text-center mb-4">Camisetas</h1>
        <ProductGrid products={camisetas} />
      </div>
    </>
  );
};

export default Camisetas;