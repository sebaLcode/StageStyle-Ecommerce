import React, { useEffect, useState } from 'react';
import Navbar from '../organisms/Navbar';
import ProductGrid from '../organisms/ProductGrid';
import { productService } from '../../services/productService';

const Accesorios = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAccesorios = async () => {
      try {
        setLoading(true);
        const data = await productService.getAll('Accesorio');

        setProductos(data);
      } catch (error) {
        console.error("Error cargando los accesorios:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAccesorios();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1 className="text-center mb-4">Accesorios</h1>

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

export default Accesorios;