// components/atoms/PriceTag.js
//TODO: CAMBIÓ ACÁ
import React from 'react';

//OLD
// const PriceTag = ({ amount, currency = '$' }) => {
//     return (
//         <span className="price-tag">
//             {currency}{amount}
//         </span>
//     );
// };

// export default PriceTag;

//NEW

const clpFormatter = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  minimumFractionDigits: 0, 
});

const PriceTag = ({ price, className = '' }) => {
  return (
    <span className={`price ${className}`}>
      {clpFormatter.format(price)}
    </span>
  );
};

export default PriceTag;