import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../organisms/Footer';
import Navbar from '../organisms/Navbar';
import NuestroEquipoImg from '../../assets/images/Nosotros.png';

const Nosotros = () => {
  return (
    <div>
      <Navbar />

      <main className="container my-5">
        <section className="text-center mb-5">
          <h1 className="fw-bold text-blossom">Sobre Nosotros</h1>
          <p className="lead text-muted">
            En <span className="fw-semibold">StageStyle</span> creemos que cada prenda
            tiene una melodía. Nuestro propósito es ayudarte a vivir con estilo, pasión y recuerdos que laten
            al ritmo de tus idols favoritos.
          </p>
        </section>

        <section className="row align-items-center mb-5">
          <div className="col-md-6">
            <img
              src={NuestroEquipoImg}
              className="img-fluid rounded-4 shadow"
              alt="Nuestro equipo"
            />
          </div>
          <div className="col-md-6 ps-md-5 mt-4 mt-md-0">
            <h2 className="fw-bold text-blossom">Nuestra historia</h2>
            <p>
              Nacido del amor por la música y la expresión, Stage Style surgió con el sueño de transformar
              cada outfit en una forma de sentirte más cerca de lo que amas.
              Cada prenda está pensada con dedicación, reflejando la pasión, energía y estilo que viven en cada fan por su idol favorito.
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
                <h5 className="fw-bold mt-3">Estilo</h5>
                <p className="text-muted">Ropa con estilo unico como el de tu idol favorito.</p>
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

        <section className="text-center my-5">
          <h2 className="fw-bold text-blossom mb-4">Conoce a nuestro equipo</h2>
          <p className="text-muted mb-5">
            A parte de cada pieza de ropa, detrás de StageStyle hay un equipo apasionado por la tecnología y el diseño.
          </p>

          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="card h-100 text-center border-0 shadow-sm rounded-4">
                <img
                  src="https://www.freeiconspng.com/uploads/profile-icon-9.png"
                  className="card-img-top rounded-circle mx-auto mt-3"
                  alt="Foto desarrollador"
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
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

            <div className="col-md-4">
              <div className="card h-100 text-center border-0 shadow-sm rounded-4">
                <img
                  src="https://www.freeiconspng.com/uploads/profile-icon-9.png"
                  className="card-img-top rounded-circle mx-auto mt-3"
                  alt="Foto desarrollador"
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="fw-bold text-blossom">Emily Gonzalez</h5>
                  <p className="text-muted">CTO</p>
                  <p className="small">
                    Encargada del diseño visual y la experiencia de usuario en toda la web.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 text-center border-0 shadow-sm rounded-4">
                <img
                  src="https://www.freeiconspng.com/uploads/profile-icon-9.png"
                  className="card-img-top rounded-circle mx-auto mt-3"
                  alt="Foto desarrollador"
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="fw-bold text-blossom">Benjamin Diaz</h5>
                  <p className="text-muted">Designer</p>
                  <p className="small">
                    Lidera la arquitectura tecnológica y garantiza la calidad del código.
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
