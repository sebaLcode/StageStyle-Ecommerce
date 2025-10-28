import React from 'react';
import ProductCard from '../molecules/ProductCard';
import '../../styles/Products.css';

const ProductGrid = ({ products, title = "Productos destacados" }) => {
  return (
    <div className="container" id="products">
      <h2 className="category-title">{title}</h2>
      
      {/* Primera fila */}
      <div className="row">
        {products.slice(0, 4).map(product => (
          <div key={product.id} className="col-md-6 col-lg-3">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      
      {/* Segunda fila */}
      <div className="row mt-4">
        {products.slice(4, 8).map(product => (
          <div key={product.id} className="col-md-6 col-lg-3">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;