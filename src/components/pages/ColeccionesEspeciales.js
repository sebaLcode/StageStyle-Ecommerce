import React, { useEffect, useState } from 'react';
import Navbar from '../organisms/Navbar';
import ProductGrid from '../organisms/ProductGrid';
import products from '../../data/productsData';

const ColeccionesEspeciales = () => {
  const [productosCombinados, setProductosCombinados] = useState([]);
  useEffect(() => {
    const productosLocal = JSON.parse(localStorage.getItem('productos')) || [];
    const todos = [...products, ...productosLocal];
    const productosUnicos = Array.from(
      new Map(todos.map(p => [p.id, p])).values()
    );

    const especiales = productosUnicos.filter(
      p => p.category?.toLowerCase() === 'especial'
    );

    setProductosCombinados(especiales);
  }, []);
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1 className="text-center mb-4">Colecciones Especiales</h1>
        <ProductGrid products={productosCombinados} />
      </div>
    </>
  );
};

export default ColeccionesEspeciales;