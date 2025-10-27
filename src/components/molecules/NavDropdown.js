import React from 'react';
import NavDropdownItem from '../atoms/NavDropdownItem';

function NavDropdown({ title, items }) {
    return (
        <li className="nav-item dropdown">
            <a
                className="nav-link dropdown-toggle"
                href="#"
                id={`${title}Dropdown`}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                {title}
            </a>
            <ul className="dropdown-menu" aria-labelledby={`${title}Dropdown`}>
                {items.map((item) => (
                    <NavDropdownItem key={item.to} to={item.to} text={item.text} />
                ))}
            </ul>
        </li>
    );
}

export default NavDropdown;