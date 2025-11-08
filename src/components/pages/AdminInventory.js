import React, { useState, useEffect } from 'react';
import AdminTemplate from '../../components/templates/AdminTemplate';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/Button';
import ProductTable from '../../components/organisms/ProductTable';
import productosBase from '../../data/productsData';

const AdminInventory = () => {
    const navigate = useNavigate();
    const [productos, setProductos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Combinamos productos y LocalStorage
    useEffect(() => {
        const almacenados = JSON.parse(localStorage.getItem('productos')) || [];

        const combinados = [
            ...productosBase,
            ...almacenados.filter(
                (nuevo) => !productosBase.some((base) => base.id === nuevo.id)
            ),
        ];

        setProductos(combinados);
    }, []);

    const totalPages = Math.ceil(productos.length / itemsPerPage);
    const paginated = productos.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <AdminTemplate>
            <div className="container-fluid py-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h1 className="fw-bold">Productos</h1>
                    <Button variant="dark" onClick={() => navigate('/admin/inventory/new')}>
                        <i className="bi bi-plus-circle me-2"></i>Nuevo producto
                    </Button>
                </div>

                <ProductTable products={paginated} />

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

export default AdminInventory;