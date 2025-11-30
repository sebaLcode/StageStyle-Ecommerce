import React, { useEffect, useState } from 'react';
import Navbar from '../organisms/Navbar';
import ProductGrid from '../organisms/ProductGrid';
import { productService } from '../../services/productService';

const ColeccionesEspeciales = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEspeciales = async () => {
      try {
        setLoading(true);
        const data = await productService.getAll('Especial');

        setProductos(data);
      } catch (error) {
        console.error("Error cargando las colecciones especiales:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEspeciales();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1 className="text-center mb-4">Colecciones Especiales</h1>

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

export default ColeccionesEspeciales;