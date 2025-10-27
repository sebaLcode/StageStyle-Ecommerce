import React from 'react';
import { Link } from 'react-router-dom';

function NavLinkItem({ to, text, icon }) {
    return (
        <li className="nav-item">
            <Link className="nav-link" to={to}>
                {icon && <span className="me-1">{icon}</span>}
                {text}
            </Link>
        </li>
    );
}

export default NavLinkItem;