import React from 'react';

//TODO: CAMBIO ACÁ
const ProductButton = ({ children, variant = 'primary', onClick, className = '', ...props }) => {
    const buttonClass = `btn btn-${variant} ${className}`;
    
    return (
        <button className={buttonClass} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default ProductButton;