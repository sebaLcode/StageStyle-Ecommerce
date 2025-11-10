import React from 'react';
import Navbar from '../organisms/Navbar';
import ProductGrid from '../organisms/ProductGrid';
import Jhope from '../../assets/images/jhope.png';
import JkVerde from '../../assets/images/jkVerde.png';
import NewJeans from '../../assets/images/newjeens.png';

const Hoodies = () => {
  const products = [
    {
      id: 4,
      artist: "J-hope",
      name: "J-hope Hoodie",
      description: "Product NameVarsity Jacket black.",
      price: "40.000",
      image: Jhope,
      alt: "J-hope Hoodie"
    },
    {
      id: 5,
      artist: "Jungkook",
      name: "Jungkook Verde",
      description: "Polerón verde con especial diseño Golden de Jungkook.",
      price: "75.000",
      image: JkVerde,
      alt: "Jungkook Hoodie"
    },
    {
      id: 6,
      artist: "New Jeans",
      name: "New Jeans Hoodie",
      description: "Nuevos Jeans NJWMX Sudaderas con Capucha Rabbit Logo Merch Jerseys.",
      price: "38.500",
      image: NewJeans,
      alt: "New Jeans Hoodie"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1 className="text-center mb-4">Hoodies</h1>
        <ProductGrid products={products} />
      </div>
    </>
  );
};

export default Hoodies;