import React from 'react';

const ProductImage = ({ src, alt, className = '' }) => {
  return (
    <div className="product-image-container">
      <img 
        src={src} 
        alt={alt} 
        className={`product-image ${className}`}
      />
    </div>
  );
};

export default ProductImage;