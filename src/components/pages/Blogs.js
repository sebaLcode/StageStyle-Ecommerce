import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';
import BlogImg1 from '../../assets/images/Blogs 1.png';
import BlogImg2 from '../../assets/images/Blogs 2.png';


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
                <h2 className="fw-bold mb-3 pt-5 text-blossom">StageStyle conquista Vogue</h2>
                <p className="text-muted small">Publicado el 04 Octubre 2025 · por StageStyle</p>
                <p className="mb-3">
                  StageStyle se volvió viral y llamó la atención de Vogue, donde fue destacado por su estilo único. 
                  Artistas de todo el mundo mostraron su apoyo y admiración por la marca
                </p>

                <Link to="#" className="btn btn-custom-blossom btn-lg mt-auto align-self-start mt-3">
                  Ver Caso <i className="bi bi-arrow-down-short"></i>
                </Link>
              </div>

              <div className="col-md-6 text-center">
                <img 
                  src={BlogImg1}
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
                <h2 className="fw-bold mb-3 pt-5 text-blossom">Desfile inolvidable</h2>
                <p className="text-muted small">Publicado el 23 Enero 2025 · por StageStyle</p>
                <p className="mb-3">
                  Gracias a su creciente reconocimiento, StageStyle realizó un desfile de moda espectacular,
                  con la presencia de numerosos artistas celebrando su creatividad y estilo inconfundible.
                </p>

                <Link to="#" className="btn btn-custom-blossom btn-lg mt-auto align-self-start mt-3">
                  Ver Caso <i className="bi bi-arrow-down-short"></i>
                </Link>
              </div>

              <div className="col-md-6 text-center">
                <img 
                  src={BlogImg2}
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