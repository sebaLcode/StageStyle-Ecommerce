import React from 'react';
import { Link } from 'react-router-dom';

function CartIcon({ count = 0 }) {
    return (
        <li className="nav-item">
            <Link className="nav-link carrito-icon" to="/carrito">
                🛒 <span className="contador-carrito">{count}</span>
            </Link>
        </li>
    );
}

export default CartIcon;