import React, { useState, useEffect } from 'react';
import AdminTemplate from '../../components/templates/AdminTemplate';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/Button';
import UserTable from '../../components/organisms/UserTable';
import { userService } from '../../services/userService';

const AdminEmployees = () => {
    const navigate = useNavigate();
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchEmpleados = async () => {
            try {
                setLoading(true);
                const data = await userService.getUsers();

                const empleados = data.filter(
                    (u) => {
                        const rol = (u.tipoUsuario || u.role || '').toLowerCase();
                        return rol === 'administrador' || rol === 'vendedor';
                    }
                );

                setUsuarios(empleados);
            } catch (error) {
                console.error("Error cargando empleados:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchEmpleados();
    }, []);

    const totalPages = Math.ceil(usuarios.length / itemsPerPage);
    const paginated = usuarios.slice(
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

                {loading ? (
                    <div className="text-center my-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </div>
                    </div>
                ) : (
                    <>
                        <UserTable users={paginated} />

                        {usuarios.length > 0 && (
                            <div className="d-flex justify-content-center mt-3">
                                <nav>
                                    <ul className="pagination">
                                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                            <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
                                        </li>
                                        {[...Array(totalPages)].map((_, i) => (
                                            <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                                <button className="page-link" onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
                                            </li>
                                        ))}
                                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                            <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        )}
                    </>
                )}
            </div>
        </AdminTemplate>
    );
};

export default AdminEmployees;