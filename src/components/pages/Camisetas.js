import React from 'react';
import Navbar from '../organisms/Navbar';
import ProductGrid from '../organisms/ProductGrid';
import JennieBlanco from '../../assets/images/JennieBlanco.png';
import LisaRoja1 from '../../assets/images/LisaRoja1.png';
import ZicoPolera from '../../assets/images/ZicoPolera.png'; 

const Camisetas = () => {
  const products = [
    {
      id: 1,
      artist: "Jennie",
      name: "Ruby Red Eye Baby Tee",
      description: "Ruby Red Eye design printed on a white, unisex, baby tee.",
      price: "40.000",
      image: JennieBlanco,
      alt: "Ruby Red Eye Baby Tee"
    },
    {
      id: 2,
      artist: "Lisa",
      name: "Alter Ego Comic Jersey",
      description: "Alter Ego Comic Character Jersey.",
      price: "75.000",
      image: LisaRoja1,
      alt: "Alter Ego Comic Jersey"
    },
    {
      id: 3,
      artist: "Zico",
      name: "S/S T-Shirt (Charcoal)",
      description: "Long sleeve T-shirt in charcoal color.",
      price: "38.500",
      image: ZicoPolera,
      alt: "S/S T-Shirt (Charcoal)"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1 className="text-center mb-4">Camisetas</h1>
        <ProductGrid products={products} />
      </div>
    </>
  );
};

export default Camisetas;