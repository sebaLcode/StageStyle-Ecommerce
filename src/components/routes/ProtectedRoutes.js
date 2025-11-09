import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const usuario = JSON.parse(localStorage.getItem('usuarioLogueado'));

    //Si no hay nadie loggeado, al login
    if (!usuario) {
        return <Navigate to="/login" replace />;
    }

    //Si no está permitido, al inicio
    if (!allowedRoles.includes(usuario.tipoUsuario)) {
        return <Navigate to="/" replace />;
    }

    //Si pasa las validaciones, avanza
    return children;
};

export default ProtectedRoute;