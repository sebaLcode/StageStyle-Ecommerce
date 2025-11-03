import React from 'react';
import { Link } from 'react-router-dom';

function ProductButton({ to, text }) {
    return (
        <Link to={to} className="btn btn-primary boton-app">
            {text}
        </Link>
    );
}

export default ProductButton;
