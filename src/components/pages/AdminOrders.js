import React, { useEffect, useState } from "react";
import AdminTemplate from "../templates/AdminTemplate";
import Button from '../../components/atoms/Button';

const AdminOrders = () => {
    const [orders, setOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
        setOrders(storedOrders);
    }, []);

    const handleClearOrders = () => {
        if (window.confirm('¿Seguro que deseas eliminar todas las órdenes?')) {
            localStorage.removeItem('orders');
            setOrders([]);
        }
    };

    const totalPages = Math.ceil(orders.length / itemsPerPage);
    const paginated = orders.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <AdminTemplate>
            <div className="container-fluid py-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h1 className="fw-bold">Órdenes</h1>

                    {orders.length > 0 && (
                        <Button variant="danger" onClick={handleClearOrders}>
                            <i className="bi bi-trash3 me-2"></i>Eliminar todas
                        </Button>
                    )}
                </div>

                {orders.length > 0 ? (
                    <div className="table-responsive">
                        <table className="table table-striped align-middle">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Cliente</th>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Productos</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginated.map((order, index) => (
                                    <tr key={order.id || index}>
                                        <td>{order.id || index + 1}</td>
                                        <td>{order.user || 'Invitado'}</td>
                                        <td>{new Date(order.date).toLocaleString('es-CL')}</td>
                                        <td>
                                            {order.items?.map((item, i) => (
                                                <div key={i}>
                                                    {item.title} x{item.quantity || 1}
                                                </div>
                                            ))}
                                        </td>
                                        <td>${order.total?.toLocaleString('es-CL') || 0}</td>
                                        <td>
                                            <span
                                                className={`badge ${order.status === 'Completada'
                                                        ? 'bg-success'
                                                        : order.status === 'Pendiente'
                                                            ? 'bg-warning text-dark'
                                                            : 'bg-secondary'
                                                    }`}
                                            >
                                                {order.status || 'Completada'}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="alert alert-info text-center">
                        Todavía no tienes órdenes.
                    </div>
                )}

                {orders.length > itemsPerPage && (
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
                )}
            </div>
        </AdminTemplate>
    );
};

export default AdminOrders;
