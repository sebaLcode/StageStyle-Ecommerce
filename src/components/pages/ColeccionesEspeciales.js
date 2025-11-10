import React from 'react';
import Navbar from '../organisms/Navbar';
import ProductGrid from '../organisms/ProductGrid';
import products from '../../data/productsData';

const ColeccionesEspeciales = () => {
  const especial = products.filter(p => p.category === "Especial");
  
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1 className="text-center mb-4">Colecciones Especiales</h1>
        <ProductGrid products={especial} />
      </div>
    </>
  );
};

export default ColeccionesEspeciales;