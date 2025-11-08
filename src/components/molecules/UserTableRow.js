import React from 'react';
import TableDataCell from '../atoms/TableDataCell';

const UserTableRow = ({ user }) => {
    return (
        <tr>
            <TableDataCell>{user.id}</TableDataCell>
            <TableDataCell>{user.nombre}</TableDataCell>
            <TableDataCell>{user.email}</TableDataCell>
            <TableDataCell>{user.password}</TableDataCell>
            <TableDataCell>{user.telefono}</TableDataCell>
            <TableDataCell>{user.region}</TableDataCell>
            <TableDataCell>{user.comuna}</TableDataCell>
            <TableDataCell>{user.tipoUsuario}</TableDataCell>
        </tr>
    );
};

export default UserTableRow;