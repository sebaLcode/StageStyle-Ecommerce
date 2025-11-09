import React from 'react';

const TableHeaderCell = ({ children }) => (
    <th className="text-uppercase fw-semibold text-center align-middle bg-dark text-white">
        {children}
    </th>
);

export default TableHeaderCell;