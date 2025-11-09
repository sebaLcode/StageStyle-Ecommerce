import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';



const Blogs = () => {
  return (
    <div>
       <Navbar />
      
      <main>
        <h1 className="text-center mt-4 fw-bold text-blossom">Noticias Importantes</h1>

        <div className="container-fluid mt-4 px-5">
          {/* Caso 1 */}
          <div className="card p-4 shadow-lg mb-5">
            <div className="row align-items-stretch">
              <div className="col-md-6 d-flex flex-column">
                <h2 className="fw-bold mb-3 pt-5 text-blossom">Aprende a cuidar tus flores en verano #1</h2>
                <p className="text-muted small">Publicado el 21 Sept 2025 · por Blossom</p>
                <p className="mb-3">
                  Descubre los trucos fáciles para que tus rosas duren más tiempo, e incluso en los días más
                  calurosos...
                </p>

                <Link to="#" className="btn btn-custom-blossom btn-lg mt-auto align-self-start mt-3">
                  Ver Caso <i className="bi bi-arrow-down-short"></i>
                </Link>
              </div>

              <div className="col-md-6 text-center">
                <img 
                  src="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco/k/archive/500d47a790195ea0350b2bcc6880026194c0cb3e"
                  alt="Imagen hero" 
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
          
          {/* Caso 2 */}
          <div className="card p-4 shadow-lg mb-4">
            <div className="row align-items-stretch">
              <div className="col-md-6 d-flex flex-column">
                <h2 className="fw-bold mb-3 pt-5 text-blossom">El secreto de los tulipanes #2</h2>
                <p className="text-muted small">Publicado el 21 Sept 2025 · por Blossom</p>
                <p className="mb-3">
                  Los tulipanes destacan por sus colores vibrantes, pero tambien tienen significados únicos,
                  desde la pasión hasta el perdón. Descubre qué significa cada color y cuándo debes
                  regalarlos.
                </p>

                <Link to="#" className="btn btn-custom-blossom btn-lg mt-auto align-self-start mt-3">
                  Ver Caso <i className="bi bi-arrow-down-short"></i>
                </Link>
              </div>

              <div className="col-md-6 text-center">
                <img 
                  src="https://c.wallhere.com/photos/a9/48/flowers_colorful_colourfull_tulips-15436.jpg!d"
                  alt="Imagen hero" 
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blogs;