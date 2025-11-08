import React, { useEffect, useState } from 'react';
import NavItem from '../molecules/NavItem';
import '../../styles/Navbar.css';

const Navbar = () => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('usuarioLogueado'));
    setUsuario(userData);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('usuarioLogueado');
    window.location.href = '/login';
  };

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
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
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

            {/* Si se logguea user */}
            {usuario ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {usuario.nombre || 'Usuario'}
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="/perfil">
                      Mi perfil
                    </a>
                  </li>
                  {(usuario.tipoUsuario === 'Administrador' || usuario.tipoUsuario === 'Vendedor') && (
                    <li>
                      <a className="dropdown-item" href="/admin">
                        Panel administrador
                      </a>
                    </li>
                  )}
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      Cerrar sesión
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <NavItem href="/login">
                <i className="nav-link-icon"></i> Iniciar Sesión
              </NavItem>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
