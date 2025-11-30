import React, { useState, useEffect } from 'react';
import MainLayout from '../templates/MainLayout';
import HeroSection from '../organisms/HeroSection';
import ProductGrid from '../organisms/ProductGrid';
import { productService } from '../../services/productService';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        setLoading(true);
        const data = await productService.getAll();
        setProducts(data);
      } catch (error) {
        console.error("Error al cargar productos del Home:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  return (
    <MainLayout>
      <HeroSection />

      {loading ? (
        <div className="container text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-2">Cargando novedades...</p>
        </div>
      ) : (
        <ProductGrid
          products={products}
          title="Productos destacados del año"
        />
      )}
    </MainLayout>
  );
};

export default Home;