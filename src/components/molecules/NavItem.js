import React from 'react';

const NavItem = ({ href, children, isDropdown = false, dropdownItems = [] }) => {
  if (isDropdown) {
    return (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href={href} role="button" 
           data-bs-toggle="dropdown" aria-expanded="false">
          {children}
        </a>
        <ul className="dropdown-menu">
          {dropdownItems.map((item, index) => (
            <li key={index}>
              <a className="dropdown-item" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  return (
    <li className="nav-item">
      <a className="nav-link" href={href}>
        {children}
      </a>
    </li>
  );
};

export default NavItem;