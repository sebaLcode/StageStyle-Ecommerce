import React, { useEffect, useState } from 'react';
import Navbar from '../organisms/Navbar';
import ProductGrid from '../organisms/ProductGrid';
import { productService } from '../../services/productService';

const Camisetas = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCamisetas = async () => {
      try {
        setLoading(true);
        const data = await productService.getAll('Camiseta');

        setProductos(data);
      } catch (error) {
        console.error("Error cargando las camisetas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCamisetas();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1 className="text-center mb-4">Camisetas</h1>

        {loading ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        ) : (
          <ProductGrid products={productos} />
        )}
      </div>
    </>
  );
};

export default Camisetas;