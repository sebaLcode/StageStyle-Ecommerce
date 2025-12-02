import React, { useState, useEffect } from 'react';
import AdminTemplate from '../../components/templates/AdminTemplate';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/Button';
import ProductTable from '../../components/organisms/ProductTable';
import { productService } from '../../services/productService';

const AdminInventory = () => {
    const navigate = useNavigate();
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                setLoading(true);
                const data = await productService.getAll();
                setProductos(data);
            } catch (error) {
                console.error("Error al cargar inventario:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductos();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("¿Estás seguro que deseas eliminar este producto?")) {
            try {
                await productService.delete(id);

                setProductos(prevProductos => prevProductos.filter(p => p.id !== id));

                alert("Producto eliminado correctamente.");
            } catch (error) {
                console.error("Error al eliminar:", error);
                alert("Hubo un error al eliminar el producto.");
            }
        }
    };

    const handleEdit = (id) => {
        navigate(`/admin/inventory/edit/${id}`);
    };

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

                {loading ? (
                    <div className="text-center my-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </div>
                        <p className="mt-2 text-muted">Cargando inventario...</p>
                    </div>
                ) : (
                    <>
                        <ProductTable
                            products={paginated}
                            onDelete={handleDelete}
                            onEdit={handleEdit}
                        />

                        {productos.length > 0 && (
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

                                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
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
                    </>
                )}
            </div>
        </AdminTemplate>
    );
};

export default AdminInventory;