import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../organisms/Footer';
import Navbar from '../organisms/Navbar';

const Nosotros = () => {
  return (
    <div>
      <Navbar />
      
      <main className="container my-5">
        <section className="text-center mb-5">
          <h1 className="fw-bold text-blossom">Sobre Nosotros</h1>
          <p className="lead text-muted">
            En <span className="fw-semibold">Blossom</span> creemos que cada flor tiene una historia.
            Entonces, nuestro propósito es ayudarte disfrutar la vida con frescura, color y emociones que florecen.
          </p>
        </section>

        <section className="row align-items-center mb-5">
          <div className="col-md-6">
            <img 
              src="https://www.victoriaregent.com/wp-content/uploads/2023/03/cherry-blossom.jpg"
              className="img-fluid rounded-4 shadow" 
              alt="Nuestro equipo" 
            />
          </div>
          <div className="col-md-6 ps-md-5 mt-4 mt-md-0">
            <h2 className="fw-bold text-blossom">Nuestra historia</h2>
            <p>
              Ante el cariño del CEO a las flores, Blossom nació con el sueño de transformar cada ocasión en un
              recuerdo especial.
              Cualquier detalle que desees lo trabajamos con dedicación, ofreciendo flores frescas y de calidad.
            </p>
          </div>
        </section>

        <section className="text-center mb-5">
          <h2 className="fw-bold text-blossom mb-4">Nuestros valores</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 border rounded-4 shadow-sm h-100">
                <i className="bi bi-heart-fill fs-1 text-blossom"></i>
                <h5 className="fw-bold mt-3">Pasión</h5>
                <p className="text-muted">Amamos lo que hacemos y ponemos el corazón en cada detalle.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded-4 shadow-sm h-100">
                <i className="bi bi-flower3 fs-1 text-success"></i>
                <h5 className="fw-bold mt-3">Frescura</h5>
                <p className="text-muted">Flores frescas, de temporada y seleccionadas cuidadosamente.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded-4 shadow-sm h-100">
                <i className="bi bi-people-fill fs-1 text-primary"></i>
                <h5 className="fw-bold mt-3">Cercanía</h5>
                <p className="text-muted">Deseamos ser parte de tus momentos especiales con un trato cercano.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container my-5">
          <h2 className="fw-bold text-center text-blossom mb-4">Conoce a nuestro equipo</h2>
          <p className="text-center text-muted mb-5">
            Además de flores, detrás de Blossom, hay un equipo apasionado por la tecnología y el diseño, que
            trabajan para que la experiencia sea agradable.
          </p>

          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="card h-100 text-center border-0 shadow-sm rounded-4">
                <img 
                  src="https://www.freeiconspng.com/uploads/profile-icon-9.png"
                  className="card-img-top rounded-circle mx-auto mt-3" 
                  alt="Foto desarrollador"
                  style={{width: '120px', height: '120px', objectFit: 'cover'}} 
                />
                <div className="card-body">
                  <h5 className="fw-bold text-blossom">Sebastián Loncón</h5>
                  <p className="text-muted">CEO</p>
                  <p className="small">
                    Encargado en el desarrollo completo de la página web, asegurando su estilo único.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Nosotros;