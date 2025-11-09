import React from 'react';
import ProductCard from '../molecules/ProductCard';
import image1 from '../../assets/images/jhope.png'
import image2 from '../../assets/images/jkVerde.png'
import image3 from '../../assets/images/newjeens.png'

function ProductGrid() {
    const products = [
        {
            id: 1,
            badge: 'J-hope',
            image: image1,
            title: 'J-hope Hoodies',
            description: 'Varsity Jacket black.',
            price: '$40.000',
            link: '/detalle-producto/1',
        },
        {
            id: 2,
            badge: 'Jungkook',
            image: image2,
            title: 'Jungkook verde',
            description: 'Polerón verde con diseño Golden de Jungkook.',
            price: '$75.000',
            link: '/detalle-producto/2',
        },
        {
            id: 3,
            badge: 'New Jeans',
            image: image3,
            title: 'Hoodies New Jeans',
            description:
                'Sudadera con capucha Rabbit Logo Merch Jerseys edición especial.',
            price: '$38.500',
            link: '/detalle-producto/3',
        },
    ];

    return (
        <div className="container mt-4">
            <div className="row">
                {products.map((p) => (
                    <div key={p.id} className="col-12 col-md-6 col-lg-4 mb-4">
                        <ProductCard product={p} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductGrid;
