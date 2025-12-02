import React from 'react';
import TableDataCell from '../atoms/TableDataCell';
import Button from '../atoms/Button';

const ProductTableRow = ({ product, onDelete, onEdit }) => {
    return (
        <tr>
            <TableDataCell>{product.id}</TableDataCell>
            <TableDataCell>{product.badge}</TableDataCell>
            <TableDataCell>{product.title}</TableDataCell>
            <TableDataCell>
                <span className="d-inline-block text-truncate" style={{ maxWidth: '150px' }}>
                    {product.description}
                </span>
            </TableDataCell>

            <TableDataCell>${product.price?.toLocaleString('es-CL')}</TableDataCell>

            <TableDataCell>
                <img
                    src={product.image}
                    alt={product.title}
                    className="img-thumbnail"
                    style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                />
            </TableDataCell>

            <TableDataCell>
                <div className="d-flex gap-2">
                    <Button
                        className="btn btn-warning btn-sm"
                        onClick={() => onEdit(product.id)}
                    >
                        <i className="bi bi-pencil-fill"></i>
                    </Button>

                    <Button
                        className="btn btn-danger btn-sm"
                        onClick={() => onDelete(product.id)}
                    >
                        <i className="bi bi-trash-fill"></i>
                    </Button>
                </div>
            </TableDataCell>
        </tr>
    );
};

export default ProductTableRow;