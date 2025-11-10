import React from 'react';
import Navbar from '../organisms/Navbar';
import ProductGrid from '../organisms/ProductGrid';
import AespaBlanco from '../../assets/images/aespaBlanco.png';
import KatseyeNegro from '../../assets/images/KatseyeNegro.png';
import TxtBolso from '../../assets/images/txtBolso.png'; 

const Accesorios = () => {
  const products = [
    {
      id: 7,
      artist: "Aespa",
      name: "Aespa Bolso",
      description: "Aespa-Synk : Aexis Line 2025 Live Tour Official MD.",
      price: "14.327",
      image: AespaBlanco,
      alt: "Aespa Bolso"
    },
    {
      id: 8,
      artist: "Katseye",
      name: "Katseye Bolso",
      description: "Bolso Katseye exclusivo.",
      price: "25.000",
      image: KatseyeNegro,
      alt: "Katseye Bolso"
    },
    {
      id: 9,
      artist: "TXT",
      name: "Bolso TXT",
      description: "MINI CROSS BAG.",
      price: "38.500",
      image: TxtBolso,
      alt: "TXT Bolso"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1 className="text-center mb-4">Accesorios</h1>
        <ProductGrid products={products} />
      </div>
    </>
  );
};

export default Accesorios;