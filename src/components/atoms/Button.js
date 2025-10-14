import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const btnClass = `btn btn-${variant} ${size === 'lg' ? 'btn-lg' : ''} ${className}`;
  
  return (
    <button className={btnClass} {...props}>
      {children}
    </button>
  );
};


export default Button;