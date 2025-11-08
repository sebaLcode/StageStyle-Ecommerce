import React, { useState } from 'react';
import AdminTemplate from '../../components/templates/AdminTemplate';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/Button';
import UserTable from '../../components/organisms/UserTable';
import usuarios from '../../data/usersData';

const AdminEmployees = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const empleadosFiltrados = usuarios.filter(
        (e) => e.tipoUsuario?.toLowerCase() === 'vendedor' ||
        e.tipoUsuario?.toLowerCase() === 'administrador'
    );

    const totalPages = Math.ceil(empleadosFiltrados.length / itemsPerPage);

    const paginated = empleadosFiltrados.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <AdminTemplate>
            <div className="container-fluid py-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h1 className="fw-bold">Empleados</h1>
                    <Button variant="dark" onClick={() => navigate('/admin/newUser')}>
                        <i className="bi bi-plus-circle me-2"></i>Nuevo empleado
                    </Button>
                </div>

                <UserTable users={paginated} />

                <div className="d-flex justify-content-center mt-3">
                    <nav>
                        <ul className="pagination">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <button
                                    className="page-link"
                                    onClick={() => setCurrentPage(currentPage - 1)}
                                >
                                    Previous
                                </button>
                            </li>

                            {[...Array(totalPages)].map((_, i) => (
                                <li
                                    key={i}
                                    className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
                                >
                                    <button
                                        className="page-link"
                                        onClick={() => setCurrentPage(i + 1)}
                                    >
                                        {i + 1}
                                    </button>
                                </li>
                            ))}

                            <li
                                className={`page-item ${currentPage === totalPages ? 'disabled' : ''
                                    }`}
                            >
                                <button
                                    className="page-link"
                                    onClick={() => setCurrentPage(currentPage + 1)}
                                >
                                    Next
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </AdminTemplate>
    );
};

export default AdminEmployees;