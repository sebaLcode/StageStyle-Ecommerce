import React from 'react';
import Badge from '../atoms/Badge';
import ProductImage from '../atoms/ProductImage';
import PriceTag from '../atoms/PriceTag';
import Button from '../atoms/Button';

const ProductCard = ({ product }) => {
  const { badge, image, title, description, price } = product;

  return (
    <div className="card product-card h-100">
      <Badge>{badge}</Badge>
      <ProductImage src={image} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <PriceTag price={price} />
          <Button>
            Añadir al carrito
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;