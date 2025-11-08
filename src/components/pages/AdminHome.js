import React from 'react';
import AdminTemplate from '../templates/AdminTemplate';

function AdminHome() {
    const user = JSON.parse(localStorage.getItem('usuarioLogueado'));

    return (
        <AdminTemplate>
            <div className="d-flex justify-content-between align-items-center">
                <h1>¡Hola {user?.nombre || 'Administrador'}!</h1>
                <i className="fs-4 bi-bell-fill"></i>
            </div>

            <p className="mt-3">
                Bienvenido al panel de administración de StageStyle.
            </p>
        </AdminTemplate>
    );
}

export default AdminHome;
