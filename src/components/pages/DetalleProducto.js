// components/pages/DetalleProducto.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';
import ProductBadge from '../atoms/ProductBadge';
import ProductButton from '../atoms/ProductButton';
import PriceTag from '../atoms/PriceTag';
import styles from '../../styles/detalleProducto.css';

import JennieBlanco from '../../assets/images/JennieBlanco.png';
import LisaRoja from '../../assets/images/LisaRoja.png';
import ZicoPolera from '../../assets/images/ZicoPolera.png';
import JkVerde from '../../assets/images/jkVerde.png';
import NewJeans from '../../assets/images/newjeens.png';
import AespaBlanco from '../../assets/images/aespaBlanco.png';
import TxtBolso from '../../assets/images/ToteKattesyes.png';
import JenniePantalones from '../../assets/images/JenniePantalones.png';
import LisaTote from '../../assets/images/LisaTote.png';
import CortisPulsera from '../../assets/images/CortisPulsera.png';


const productos = {
    1: {
        id: 1,
        nombre: "Ruby Red Eye Baby Tee",
        precio: 40000,
        precioOriginal: 49990,
        categoria: "Camisetas",
        artista: "Jennie",
        imagenes: [JennieBlanco],
        descripcion: "Ruby Red Eye design printed on a white, unisex, baby tee.",
        detalles: "90% Cotton/ 10% Polyester, 1x1 baby rib, Crew neck, Full-length fit",
        tallas: ["XS", "S", "M", "L", "XL"],
        disponible: true
    },
    2: {
        id: 2,
        nombre: "Alter Ego Comic Jersey",
        precio: 75000,
        precioOriginal: 89900,
        categoria: "Camisetas",
        artista: "Lisa",
        imagenes: [LisaRoja],
        descripcion: "Alter Ego Comic Character Jersey.",
        detalles: "Please note this is a preorder product expected to ship late August 2025. Your order will ship when all items are in stock.",
        tallas: ["S", "M", "L"],
        disponible: true
    },
    3: {
        id: 3,
        nombre: "S/S T-Shirt (Charcoal)",
        precio: 38500,
        precioOriginal: 45000,
        categoria: "Camisetas",
        artista: "ZICO",
        imagenes: [ZicoPolera],
        descripcion: "S/S T-Shirt in Charcoal color.",
        detalles: "Premium quality t-shirt with official ZICO branding.",
        tallas: ["S", "M", "L", "XL"],
        disponible: true
    },
    4: {
        id: 4,
        nombre: "Golden – Jungkook Hoodie",
        precio: 75000,
        precioOriginal: 80000,
        categoria: "Hoodies",
        artista: "Jungkook",
        imagenes: [JkVerde],
        descripcion: "Polerón verde con especial diseño Golden de Jungkook.",
        detalles: "Cuenta con capucha y bolsillos canguro. Material: Algodón y Poliéster.",
        tallas: ["S", "M", "L", "XL"],
        disponible: true
    },
    5: {
        id: 5,
        nombre: "NJWMX Rabbit Logo Hoodie",
        precio: 38500,
        precioOriginal: 45000,
        categoria: "Hoodies",
        artista: "New Jeans",
        imagenes: [NewJeans],
        descripcion: "Nuevos Jeans NJWMX Sudaderas con Capucha Rabbit Logo Merch Jerseys",
        detalles: "Hecho de materiales de alta calidad, ajuste cómodo. Disponible en una variedad de tamaños.",
        tallas: ["S", "M", "L", "XL", "XXL"],
        disponible: true
    },
    6: {
        id: 6,
        nombre: "Aespa Synk Tour Shoulder Bag",
        precio: 14327,
        precioOriginal: 17900,
        categoria: "Accesorios",
        artista: "Aespa",
        imagenes: [AespaBlanco],
        descripcion: "Aespa-Synk : Aexis Line 2025 Live Tour Official MD",
        detalles: "Size: 55 x 85 mm, Material: PA. Random Trading Card Set X Version included.",
        disponible: true
    },
    7: {
        id: 7,
        nombre: "TXT Mini Cross Bag",
        precio: 38500,
        precioOriginal: 45000,
        categoria: "Accesorios",
        artista: "TXT",
        imagenes: [TxtBolso],
        descripcion: "MINI CROSS BAG oficial de TXT",
        detalles: "SHELL: 100% POLYESTER, LINING: 100% POLYESTER. Size: 26 x 19.5 x 11 x 135cm",
        disponible: true
    },
    8: {
        id: 8,
        nombre: "Ruby Tracklist Sweatpants",
        precio: 90000,
        precioOriginal: 110000,
        categoria: "Colecciones Especiales",
        artista: "Jennie",
        imagenes: [JenniePantalones],
        descripcion: "Ruby track list printed on the left leg and icons on the right of black, unisex sweatpants.",
        detalles: "Elastic band waistband for comfort. Released: 12th May, 2025",
        tallas: ["S", "M", "L", "XL"],
        disponible: true
    },
    9: {
        id: 9,
        nombre: "Alter Ego Comic Tote",
        precio: 25000,
        precioOriginal: 32000,
        categoria: "Colecciones Especiales",
        artista: "Lisa",
        imagenes: [LisaTote],
        descripcion: "Alter Ego Comic design printed on the front of a black, canvas tote.",
        detalles: "100% Cotton, 6oz, 14.7×14.9°F, 2\" handles",
        disponible: true
    },
    10: {
        id: 10,
        nombre: "CORTIS Chain",
        precio: 45500,
        precioOriginal: 55000,
        categoria: "Colecciones Especiales",
        artista: "CORTIS",
        imagenes: [CortisPulsera],
        descripcion: "CORTIS The 1st EP [COLOR OUTSIDE THE LINES] RELEASE PARTY CORTIS Chain",
        detalles: "Official merchandise from CORTIS. Limited edition item.",
        disponible: true
    }
};


const DetalleProducto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [imagenPrincipal, setImagenPrincipal] = useState('');
    const [tallaSeleccionada, setTallaSeleccionada] = useState('');
    const [cantidad, setCantidad] = useState(1);

    useEffect(() => {
        if (id && productos[id]) {
            const productoData = productos[id];
            setProducto(productoData);
            setImagenPrincipal(productoData.imagenes[0]);
            setLoading(false);
        } else {
            setLoading(false);
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

    const handleAgregarCarrito = () => {
        if (producto.tallas && producto.tallas.length > 0 && !tallaSeleccionada) {
            alert('Por favor selecciona una talla');
            return;
        }

        console.log('Agregando al carrito:', {
            producto: producto.nombre,
            talla: tallaSeleccionada,
            cantidad: cantidad
        });

        alert(`¡${producto.nombre} añadido al carrito!`);
    };

    const getCategoriaLink = (categoria) => {
        switch (categoria) {
            case 'Camisetas': return '/camisetas';
            case 'Hoodies': return '/hoodies';
            case 'Accesorios': return '/accesorios';
            case 'Colecciones Especiales': return '/colecciones-especiales';
            default: return '/';
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
                            <Link to={getCategoriaLink(producto.categoria)}>{producto.categoria}</Link>
                        </li>
                        <li className="breadcrumb-item active">{producto.nombre}</li>
                    </ol>
                </nav>

                <div className={`row ${styles.productoDetalleContainer}`}>
                    <div className="col-md-6 p-4">
                        <div className={styles.contenedorImagenPrincipal}>
                            <img
                                src={imagenPrincipal}
                                className={styles.productoImagenPrincipal}
                                alt={producto.nombre}
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/500x500/FFD1DC/000000?text=Imagen+No+Disponible';
                                }}
                            />
                        </div>
                        {producto.imagenes.length > 1 && (
                            <div className={styles.miniaturasContainer}>
                                {producto.imagenes.map((imagen, index) => (
                                    <img
                                        key={index}
                                        src={imagen}
                                        className={`${styles.miniatura} ${imagen === imagenPrincipal ? styles.miniaturaActiva : ''
                                            }`}
                                        alt={`Miniatura ${index + 1}`}
                                        onClick={() => setImagenPrincipal(imagen)}
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/80x80/FFD1DC/000000?text=Imagen+No+Disponible';
                                        }}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    <div className={`col-md-6 p-4 ${styles.productoInfo}`}>
                        <ProductBadge>{producto.artista}</ProductBadge>
                        <h1 className={styles.productoTitulo}>{producto.nombre}</h1>

                        <div className={styles.productoPrecio}>
                            <PriceTag amount={producto.precio} />
                            {producto.precioOriginal && (
                                <span className={styles.productoPrecioOriginal}>
                                    ${producto.precioOriginal.toLocaleString('es-CL')}
                                </span>
                            )}
                        </div>

                        <p className={styles.productoDescripcion}>{producto.descripcion}</p>

                        <div className="producto-detalles">
                            <h5>Detalles del producto</h5>
                            <p>{producto.detalles}</p>
                        </div>

                        {producto.tallas && producto.tallas.length > 0 && (
                            <div className="mb-3">
                                <label className="form-label"><strong>Talla:</strong></label>
                                <div className="d-flex flex-wrap">
                                    {producto.tallas.map(talla => (
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
                        <div className="selector-cantidad mb-3">
                            <label className="form-label me-3"><strong>Cantidad:</strong></label>
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
                            className={styles.btnAgregarCarrito}
                        >
                            <i className="bi bi-cart-plus me-2"></i> Añadir al carrito
                        </ProductButton>

                        <div className={styles.infoEnvio}>
                            <p><i className="bi bi-truck"></i> <strong>Envío gratuito</strong> en compras superiores a $50.000</p>
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