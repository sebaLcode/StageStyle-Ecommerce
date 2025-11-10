// components/atoms/PriceTag.js
import React from 'react';

const PriceTag = ({ amount, currency = '$' }) => {
    return (
        <span className="price-tag">
            {currency}{amount}
        </span>
    );
};

export default PriceTag;