import React from 'react';
import SocialIcon from '../molecules/SocialIcon';
import '../../styles/Footer.css';

const Footer = () => {
  const categories = [
    "Camisetas", "Hoodies", "Accesorios", 
    "Colecciones Especiales", "Condiciones de compra", "Idols Referencia"
  ];

  const socialPlatforms = [
    { platform: "instagram", href: "#" },
    { platform: "facebook", href: "#" },
    { platform: "pinterest", href: "#" },
    { platform: "tiktok", href: "#" }
  ];

  return (
    <section id="contacto">
      <footer className="footer">
        <div className="container">
          <div className="row">
            {/* Categorías */}
            <div className="col-md-4 mb-4">
              <h5>Categorías</h5>
              <ul className="list-unstyled text-start">
                {categories.map((category, index) => (
                  <li key={index}><a href="#">{category}</a></li>
                ))}
              </ul>
            </div>

            {/* Información */}
            <div className="col-md-4 mb-4">
              <h5>Información</h5>
              <p><i className="bi bi-envelope"></i> Correo: contacto@tiendaStageStyle.cl</p>
              <p><i className="bi bi-telephone"></i> Teléfono: +56 9 478390678</p>
            </div>

            {/* Redes sociales */}
            <div className="col-md-4 mb-4">
              <h5>Síguenos</h5>
              <div className="social-icons">
                {socialPlatforms.map((social, index) => (
                  <SocialIcon
                    key={index}
                    platform={social.platform}
                    href={social.href}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="divider"></div>

          <div className="text-center store-info">
            <p>Tienda online enfocada en tener el mejor estilo junto a tu idol favorito.</p>
          </div>

          <div className="copyright">
            <p>© 2025 Tienda StageStyle. Todos los derechos reservados</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;