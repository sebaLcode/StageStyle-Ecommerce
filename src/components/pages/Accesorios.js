import React, { useEffect, useState } from 'react';
import Navbar from '../organisms/Navbar';
import ProductGrid from '../organisms/ProductGrid';
import products from '../../data/productsData';

const Accesorios = () => {
  const [productosCombinados, setProductosCombinados] = useState([]);
  useEffect(() => {
    const productosLocal = JSON.parse(localStorage.getItem('productos')) || [];
    const todos = [...products, ...productosLocal];
    const productosUnicos = Array.from(
      new Map(todos.map(p => [p.id, p])).values()
    );

    const acessorios = productosUnicos.filter(
      p => p.category?.toLowerCase() === 'accesorio'
    );

    setProductosCombinados(acessorios);
  }, []);
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1 className="text-center mb-4">Accesorios</h1>
        <ProductGrid products={productosCombinados} />
      </div>
    </>
  );
};

export default Accesorios;