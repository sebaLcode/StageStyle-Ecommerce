import React from 'react';
import Navbar from '../organisms/Navbar';
import ProductGrid from '../organisms/ProductGrid';
import products from '../../data/productsData';

const Accesorios = () => {
  const acessorio = products.filter(p => p.category === "Accesorio");
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1 className="text-center mb-4">Accesorios</h1>
        <ProductGrid products={acessorio} />
      </div>
    </>
  );
};

export default Accesorios;