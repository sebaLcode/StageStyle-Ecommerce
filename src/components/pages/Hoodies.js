import React, { useEffect, useState } from 'react';
import Navbar from '../organisms/Navbar';
import ProductGrid from '../organisms/ProductGrid';
import { productService } from '../../services/productService';

const Hoodies = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHoodies = async () => {
      try {
        setLoading(true);
        //Solo pedidos Hoodie
        const data = await productService.getAll('Hoodie');

        setProductos(data);
      } catch (error) {
        console.error("Error cargando los Hoodies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHoodies();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1 className="text-center mb-4">Hoodies</h1>

        {/* Feedback mientras carga*/}
        {loading ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
            <p className="mt-2">Cargando productos...</p>
          </div>
        ) : (
          <ProductGrid products={productos} />
        )}
      </div>
    </>
  );
};

export default Hoodies;