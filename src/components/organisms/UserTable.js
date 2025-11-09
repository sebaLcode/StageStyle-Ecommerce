import React from 'react';
import TableHeaderCell from '../atoms/TableHeaderCell';
import UserTableRow from '../molecules/UserTableRow';

const UserTable = ({ users }) => {
    return (
        <div className="table-responsive shadow-sm rounded">
            <table className="table table-striped align-middle">
                <thead>
                    <tr>
                        <TableHeaderCell>id</TableHeaderCell>
                        <TableHeaderCell>nombre</TableHeaderCell>
                        <TableHeaderCell>email</TableHeaderCell>
                        <TableHeaderCell>password</TableHeaderCell>
                        <TableHeaderCell>telefono</TableHeaderCell>
                        <TableHeaderCell>region</TableHeaderCell>
                        <TableHeaderCell>comuna</TableHeaderCell>
                        <TableHeaderCell>tipoUsuario</TableHeaderCell>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u) => (
                        <UserTableRow key={u.id} user={u} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;