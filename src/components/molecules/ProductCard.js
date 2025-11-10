// components/molecules/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../atoms/Badge';
// import ProductButton from '../atoms/ProductButton';
import PriceTag from '../atoms/PriceTag';

//TODO:CAMBIO ACA
const ProductCard = ({ product }) => {
    const {id, badge, image, title, description, price} = product
    return (
        <div className="card product-card h-100">
            <Badge>{badge}</Badge>
            <div className="product-image-container">
                <img src={image} className="product-image" alt={product.alt} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <PriceTag price={price} />
                    <Link 
                        to={`/detalle-producto/${id}`} 
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