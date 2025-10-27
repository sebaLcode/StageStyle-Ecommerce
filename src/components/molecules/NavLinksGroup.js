// src/components/molecules/NavLinksGroup.jsx
import React from 'react';
import NavLinkItem from '../atoms/NavLinkItem';
import NavDropdown from './NavDropdown';
import CartIcon from '../atoms/CartIcon';

function NavLinksGroup() {
    const productos = [
        { to: '/camisetas', text: 'Camisetas' },
        { to: '/hoddies', text: 'Hoodies' },
        { to: '/accesorios', text: 'Accesorios' },
        { to: '/colecciones-especiales', text: 'Colecciones Especiales' },
    ];

    return (
        <ul className="navbar-nav ms-auto align-items-lg-center">
            <NavLinkItem to="/" text="Inicio" />
            <NavDropdown title="Productos" items={productos} />
            <NavLinkItem to="/ofertas" text="Ofertas" />
            <NavLinkItem to="/nosotros" text="Nosotros" />
            <NavLinkItem to="/contacto" text="Contacto" />
            <CartIcon count={0} />
            <NavLinkItem to="/login" text="Iniciar Sesión" />
        </ul>
    );
}

export default NavLinksGroup;