// components/molecules/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import ProductBadge from '../atoms/ProductBadge';
import ProductButton from '../atoms/ProductButton';
import PriceTag from '../atoms/PriceTag';

const ProductCard = ({ product }) => {
    return (
        <div className="card product-card h-100">
            <ProductBadge>{product.artist}</ProductBadge>
            <div className="product-image-container">
                <img src={product.image} className="product-image" alt={product.alt} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <PriceTag amount={product.price} />
                    <Link 
                        to={`/detalle-producto/${product.id}`} 
                        className="btn btn-primary"
                    >
                        Ver Detalles
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;