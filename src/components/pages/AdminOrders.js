import React, { useEffect, useState } from "react";
import AdminTemplate from "../../components/templates/AdminTemplate";
import { orderService } from "../../services/orderService";

const AdminOrders = () => {
    const [orders, setOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                setLoading(true);
                const data = await orderService.getOrders();
                setOrders(data);
            } catch (error) {
                console.error("Error cargando órdenes:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);


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
                </div>

                {loading ? (
                    <div className="text-center my-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </div>
                    </div>
                ) : orders.length > 0 ? (
                    <div className="table-responsive">
                        <table className="table table-striped align-middle">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col"># ID</th>
                                    <th scope="col">Cliente</th>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Productos</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginated.map((order) => (
                                    <tr key={order.id}>
                                        <td>
                                            <small className="text-muted" title={order.id}>
                                                {order.id.substring(0, 8)}...
                                            </small>
                                        </td>
                                        <td>{order.user || 'Invitado'}</td>
                                        <td>
                                            {order.date ? new Date(order.date).toLocaleString('es-CL') : 'Sin fecha'}
                                        </td>
                                        <td>
                                            {order.items?.map((item, i) => (
                                                <div key={i} className="small">
                                                    - {item.title} (x{item.quantity})
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
                                                        : 'bg-primary' // Generada
                                                    }`}
                                            >
                                                {order.status || 'Generada'}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="alert alert-info text-center">
                        Todavía no hay órdenes registradas en el sistema.
                    </div>
                )}

                {!loading && orders.length > itemsPerPage && (
                    <div className="d-flex justify-content-center mt-3">
                        <nav>
                            <ul className="pagination">
                                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                    <button
                                        className="page-link"
                                        onClick={() => setCurrentPage(currentPage - 1)}
                                    >
                                        Anterior
                                    </button>
                                </li>
                                {[...Array(totalPages)].map((_, i) => (
                                    <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                        <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                                            {i + 1}
                                        </button>
                                    </li>
                                ))}
                                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                    <button
                                        className="page-link"
                                        onClick={() => setCurrentPage(currentPage + 1)}
                                    >
                                        Siguiente
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