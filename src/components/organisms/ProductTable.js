import React from 'react';
import TableHeaderCell from '../atoms/TableHeaderCell';
import ProductTableRow from '../molecules/ProductTableRow';

const ProductTable = ({ products }) => {
    return (
        <div className="table-responsive shadow-sm rounded">
            <table className="table table-striped align-middle">
                <thead>
                    <tr>
                        <TableHeaderCell>id</TableHeaderCell>
                        <TableHeaderCell>badge</TableHeaderCell>
                        <TableHeaderCell>title</TableHeaderCell>
                        <TableHeaderCell>description</TableHeaderCell>
                        <TableHeaderCell>price</TableHeaderCell>
                        <TableHeaderCell>image</TableHeaderCell>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p) => (
                        <ProductTableRow key={p.id} product={p} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
