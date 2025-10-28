import React from 'react';

const PriceTag = ({ price, className = '' }) => {
  return (
    <span className={`price ${className}`}>
      {price}
    </span>
  );
};

export default PriceTag;