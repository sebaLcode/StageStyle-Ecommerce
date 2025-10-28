import React from 'react';

const Badge = ({ children, variant = 'sale', className = '' }) => {
  return (
    <span className={`badge-${variant} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;