import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';
import ProductButton from '../atoms/ProductButton';
import PriceTag from '../atoms/PriceTag';
import styles from '../../styles/detalleProducto.css';
import { useCart } from '../../contexts/CartContext';
import { productService } from '../../services/productService';

const DetalleProducto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [imagenPrincipal, setImagenPrincipal] = useState('');
    const [tallaSeleccionada, setTallaSeleccionada] = useState('');
    const [cantidad, setCantidad] = useState(1);

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                setLoading(true);
                const data = await productService.getById(id);

                setProducto(data);
                if (data && data.image) {
                    setImagenPrincipal(data.image);
                }
            } catch (error) {
                console.error("Error cargando producto:", error);
                setProducto(null);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchProducto();
        }
    }, [id]);

    const handleTallaSeleccionada = (talla) => {
        setTallaSeleccionada(talla);
    };

    const incrementarCantidad = () => {
        if (cantidad < 10) {
            setCantidad(cantidad + 1);
        }
    };

    const decrementarCantidad = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const { addToCart } = useCart();

    const handleAgregarCarrito = () => {
        if (producto.sizes?.length > 0 && !tallaSeleccionada) {
            alert("Por favor selecciona una talla");
            return;
        }

        addToCart(
            {
                id: producto.id,
                title: producto.title,
                price: parseFloat(producto.price),
                image: producto.image,
                category: producto.category,
            },
            tallaSeleccionada,
            cantidad
        );

        alert(`¡${producto.title} añadido al carrito!`);
    };

    const getCategoriaLink = (categoria) => {
        const cat = categoria ? categoria.toLowerCase() : '';

        switch (cat) {
            case 'camiseta':
            case 'polera':
                return '/camisetas';
            case 'hoodie':
                return '/hoodies';
            case 'accesorio':
                return '/accesorios';
            case 'especial':
                return '/colecciones-especiales';
            default:
                return '/';
        }
    };

    if (loading) {
        return (
            <>
                <Navbar />
                <div className="container mt-4">
                    <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </div>
                        <p className="mt-3">Cargando información del producto...</p>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    if (!producto) {
        return (
            <>
                <Navbar />
                <div className="container mt-4">
                    <div className="alert alert-danger text-center" role="alert">
                        <h4 className="alert-heading">Producto no encontrado</h4>
                        <p>El producto que buscas no está disponible o no existe.</p>
                        <hr />
                        <Link to="/" className="btn btn-primary">Volver al inicio</Link>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />

            <div className="container mt-4">
                <nav aria-label="breadcrumb" className="mb-4">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
                        <li className="breadcrumb-item">
                            <Link to={getCategoriaLink(producto.category)}>{producto.category}</Link>
                        </li>
                        <li className="breadcrumb-item active">{producto.title}</li>
                    </ol>
                </nav>

                <div className={`row ${styles.productoDetalleContainer}`}>
                    <div className="col-md-6 p-4">
                        <div className={styles.contenedorImagenPrincipal}>
                            <img
                                src={imagenPrincipal}
                                className={styles.productoImagenPrincipal}
                                alt={producto.title}
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/500x500/FFD1DC/000000?text=Imagen+No+Disponible';
                                }}
                            />
                        </div>
                    </div>

                    <div className={`col-md-6 p-4 ${styles.productoInfo}`}>
                        <h1 className={styles.productoTitulo}>{producto.title}</h1>

                        <div className={styles.productoPrecio}>
                            <PriceTag price={producto.price} />
                            {/* Lógica para precio original si existe en la API */}
                            {producto.originalPrice && producto.originalPrice > producto.price && (
                                <span className={styles.productoPrecioOriginal} style={{ textDecoration: 'line-through', marginLeft: '10px', color: '#999' }}>
                                    ${producto.originalPrice.toLocaleString('es-CL')}
                                </span>
                            )}
                        </div>

                        <p className={styles.productoDescripcion}>{producto.description}</p>

                        <div className="producto-detalles">
                            <p>{producto.details}</p>
                        </div>

                        {producto.sizes && producto.sizes.length > 0 && (
                            <div className="mb-3 d-flex flex-column align-items-center">
                                <label className="form-label"><strong>Talla:</strong></label>
                                <div className="d-flex flex-wrap justify-content-center">
                                    {producto.sizes.map(talla => (
                                        <button
                                            key={talla}
                                            type="button"
                                            className={`btn btn-sm m-1 ${tallaSeleccionada === talla
                                                ? 'btn-primary'
                                                : 'btn-outline-primary'
                                                }`}
                                            onClick={() => handleTallaSeleccionada(talla)}
                                        >
                                            {talla}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="selector-cantidad mb-3 d-flex flex-column align-items-center">
                            <label className="form-label"><strong>Cantidad:</strong></label>
                            <div className="d-flex align-items-center">
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary btn-sm"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.2rem',
                                        fontWeight: 'bold'
                                    }}
                                    onClick={decrementarCantidad}
                                    disabled={cantidad <= 1}
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    className="form-control mx-2 text-center"
                                    style={{
                                        width: '70px',
                                        height: '40px',
                                        fontSize: '1.1rem',
                                        fontWeight: '600'
                                    }}
                                    value={cantidad}
                                    min="1"
                                    max="10"
                                    onChange={(e) => {
                                        const value = parseInt(e.target.value) || 1;
                                        if (value >= 1 && value <= 10) {
                                            setCantidad(value);
                                        }
                                    }}
                                />
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary btn-sm"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.2rem',
                                        fontWeight: 'bold'
                                    }}
                                    onClick={incrementarCantidad}
                                    disabled={cantidad >= 10}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <ProductButton
                            onClick={handleAgregarCarrito}
                            className={`${styles.btnAgregarCarrito} mt-4`}
                        >
                            <i className="bi bi-cart-plus me-2"></i> Añadir al carrito
                        </ProductButton>

                        <div className={`${styles.infoEnvio} mt-4`}>
                            <p><i className="bi bi-arrow-left-right"></i> <strong>Devoluciones gratuitas</strong> dentro de los 30 días</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default DetalleProducto;