import React from 'react';
import NavItem from '../molecules/NavItem';
import '../../styles/Navbar.css';

const Navbar = () => {
  const dropdownItems = [
    { href: "/camisetas", label: "Camisetas" },
    { href: "/hoddies", label: "Hoodies" },
    { href: "/accesorios", label: "Accesorios" },
    { href: "/coleccionesEspeciales", label: "Colecciones Especiales" }
  ];

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="/">StageStyle</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" aria-controls="navbarNav" 
                aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <NavItem href="/">Inicio</NavItem>
            
            <NavItem href="/productos" isDropdown dropdownItems={dropdownItems}>
              Productos
            </NavItem>
          
            <NavItem href="/nosotros">Nosotros</NavItem>
            <NavItem href="/blogs">Blogs</NavItem>
            <NavItem href="/contacto">Contacto</NavItem>
            <NavItem href="/carrito">
              🛒 <span className="contador-carrito">0</span>
            </NavItem>
            
            <NavItem href="/login">
              <i className="nav-link-icon"></i> Iniciar Sesión
            </NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;