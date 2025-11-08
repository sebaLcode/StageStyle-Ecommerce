import React, { useState, useEffect } from 'react';
import AdminTemplate from '../../components/templates/AdminTemplate';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/Button';
import UserTable from '../../components/organisms/UserTable';
import usuariosBase from '../../data/usersData';

const AdminCustomers = () => {
    const navigate = useNavigate();
    const [usuarios, setUsuarios] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    //Cargamos los del LocalStorage y los unimos con la simulación de BD
    useEffect(() => {
        const almacenados = JSON.parse(localStorage.getItem('usuarios')) || [];
        const combinados = [
            ...usuariosBase,
            ...almacenados.filter(
                (nuevo) => !usuariosBase.some((base) => base.email === nuevo.email)
            ),
        ];
        setUsuarios(combinados);
    }, []);

    const clientesFiltrados = usuarios.filter(
        (c) => c.tipoUsuario?.toLowerCase() === 'cliente'
    );

    const totalPages = Math.ceil(clientesFiltrados.length / itemsPerPage);
    const paginated = clientesFiltrados.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <AdminTemplate>
            <div className="container-fluid py-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h1 className="fw-bold">Clientes</h1>
                    <Button variant="dark" onClick={() => navigate('/admin/newUser')}>
                        <i className="bi bi-plus-circle me-2"></i>Nuevo cliente
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
                                className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}
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

export default AdminCustomers;
