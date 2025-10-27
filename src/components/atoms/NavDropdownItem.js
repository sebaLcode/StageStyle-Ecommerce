import React from 'react';
import { Link } from 'react-router-dom';

function NavDropdownItem({ to, text }) {
    return (
        <li>
            <Link className="dropdown-item" to={to}>
                {text}
            </Link>
        </li>
    );
}

export default NavDropdownItem;