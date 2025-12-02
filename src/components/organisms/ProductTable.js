import React from 'react';
import TableHeaderCell from '../atoms/TableHeaderCell';
import ProductTableRow from '../molecules/ProductTableRow';

const ProductTable = ({ products, onDelete, onEdit }) => {
    return (
        <div className="table-responsive shadow-sm rounded">
            <table className="table table-striped align-middle">
                <thead className="table-dark">
                    <tr>
                        <TableHeaderCell>ID</TableHeaderCell>
                        <TableHeaderCell>Badge</TableHeaderCell>
                        <TableHeaderCell>Título</TableHeaderCell>
                        <TableHeaderCell>Descripción</TableHeaderCell>
                        <TableHeaderCell>Precio</TableHeaderCell>
                        <TableHeaderCell>Imagen</TableHeaderCell>
                        <TableHeaderCell>Acciones</TableHeaderCell>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p) => (
                        <ProductTableRow
                            key={p.id}
                            product={p}
                            onDelete={onDelete}
                            onEdit={onEdit}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;