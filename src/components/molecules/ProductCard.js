import React from 'react';

// import Badge from '../atoms/Badge';
// import ProductImage from '../atoms/ProductImage';
// import PriceTag from '../atoms/PriceTag';
// import Button from '../atoms/Button';

// const ProductCard = ({ product }) => {
//   const { badge, image, title, description, price } = product;

//   return (
//     <div className="card product-card h-100">
//       <Badge>{badge}</Badge>
//       <ProductImage src={image} alt={title} />
//       <div className="card-body">
//         <h5 className="card-title">{title}</h5>
//         <p className="card-text">{description}</p>
//         <div className="d-flex justify-content-between align-items-center">
//           <PriceTag price={price} />
//           <Button>
//             Añadir al carrito
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

import ProductBadge from '../atoms/ProductBadge';
import ProductImage from '../atoms/ProductImage';
import ProductPrice from '../atoms/ProductPrice';
import ProductButton from '../atoms/ProductButton';
import './ProductCard.css'

// function ProductCard({ product }) {
//     return (
//         <div className="col-md-6 col-lg-3 mb-4">
//             <div className="card product-card h-100">
//                 <ProductBadge text={product.badge} />
//                 <ProductImage src={product.image} alt={product.title} />
//                 <div className="card-body d-flex flex-column">
//                     <h5 className="card-title">{product.title}</h5>
//                     <p className="card-text flex-grow-1">{product.description}</p>
//                     <div className="d-flex justify-content-between align-items-center">
//                         <ProductPrice price={product.price} />
//                         <ProductButton to={product.link} text="Ver Detalles" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ProductCard;
function ProductCard({ product }) {
    return (
        <div className="col-md-6 col-lg-3 mb-4">
            <div className="card product-card h-100 rounded-4 position-relative">
                <ProductBadge text={product.badge} />
                <ProductImage src={product.image} alt={product.title} />

                <div className="card-body d-flex flex-column p-3 bg-white">
                    <h5 className="card-title fw-bold text-dark">{product.title}</h5>
                    <p className="card-text text-muted flex-grow-1 small">{product.description}</p>

                    <div className="d-flex justify-content-between align-items-center">
                        <ProductPrice price={product.price} />
                        <ProductButton to={product.link} text="Ver Detalles" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductCard;