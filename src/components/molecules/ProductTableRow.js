import React from 'react';
import TableDataCell from '../atoms/TableDataCell';

const ProductTableRow = ({ product }) => {
    return (
        <tr>
            <TableDataCell>{product.id}</TableDataCell>
            <TableDataCell>{product.badge}</TableDataCell>
            <TableDataCell>{product.title}</TableDataCell>
            <TableDataCell>{product.description}</TableDataCell>
            <TableDataCell>{product.price}</TableDataCell>
            <TableDataCell>
                <img
                    src={product.image}
                    alt={product.title}
                    className="img-thumbnail"
                    style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                />
            </TableDataCell>
        </tr>
    );
};

export default ProductTableRow;