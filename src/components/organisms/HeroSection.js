import React from 'react';
import '../../styles/HeroSection.css';
// Importar la imagen
import heroImage from '../../assets/images/JenniePrincipal.png';

const HeroSection = () => {
  const heroStyle = {
    backgroundImage: `url(${heroImage})`,
    position: 'relative',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <section className="hero-section" style={heroStyle}>
      <div className="overlay"></div>
      <div className="hero-content container">
        <h1 className="brand-logo display-3 fw-bold">StageStyle</h1>
        <p className="brand-tagline lead mb-4">La mejor moda junto a tu idol favorito</p>
        <a href="#products" className="btn btn-primary btn-lg">Ver Colección</a>
      </div>
    </section>
  );
};

export default HeroSection;