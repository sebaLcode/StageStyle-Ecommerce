import React from 'react';
import Navbar from '../organisms/Navbar';
import ProductGrid from '../organisms/ProductGrid';
import JenniePantalones from '../../assets/images/JenniePantalones.png';
import LisaTote from '../../assets/images/LisaTote.png';
import CortisPulsera from '../../assets/images/CortisPulsera.png';

const ColeccionesEspeciales = () => {
  const products = [
    {
      id: 10,
      artist: "Jennie",
      name: "Sweatpants",
      description: "Ruby track list printed on the left leg and icons on the right of black.",
      price: "90.000",
      image: JenniePantalones,
      alt: "Jennie Sweatpants"
    },
    {
      id: 11,
      artist: "Lisa",
      name: "Alter Ego Comic Tote",
      description: "Alter Ego Comic Tote.",
      price: "25.000",
      image: LisaTote,
      alt: "Lisa Tote"
    },
    {
      id: 12,
      artist: "Cortis",
      name: "CORTIS The 1st EP",
      description: "CORTIS Official Goods.",
      price: "45.500",
      image: CortisPulsera,
      alt: "Cortis Pulsera"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1 className="text-center mb-4">Colecciones Especiales</h1>
        <ProductGrid products={products} />
      </div>
    </>
  );
};

export default ColeccionesEspeciales;