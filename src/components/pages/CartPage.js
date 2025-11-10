import React from "react";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import Button from "../atoms/Button";
import { useCart } from "../../contexts/CartContext";
import CartItemList from "../organisms/CartItemList";

const CartPage = () => {
    const { cart, updateQuantity, removeFromCart, clearCart, total } = useCart();

    return (
        <>
            <Navbar />

            <div className="container py-4">
                <h2 className="fw-bold mb-4">Tu carrito</h2>

                {cart.length === 0 ? (
                    <div className="text-center py-5">
                        <i className="bi bi-cart-x" style={{ fontSize: "3rem", color: "#ccc" }}></i>
                        <h4 className="mt-3">Tu carrito está vacío</h4>
                        <a href="/" className="btn btn-primary mt-3">
                            Seguir comprando
                        </a>
                    </div>
                ) : (
                    <div className="row">
                        <div className="col-md-8">
                            <CartItemList
                                items={cart}
                                updateQuantity={updateQuantity}
                                removeFromCart={removeFromCart}
                            />
                            <Button variant="outline-danger" onClick={clearCart} className="mt-3">
                                Vaciar carrito
                            </Button>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="fw-bold">Resumen de compra</h5>
                                    <hr />
                                    <div className="d-flex justify-content-between mb-3">
                                        <span>Total:</span>
                                        <strong>${total.toLocaleString("es-CL")}</strong>
                                    </div>
                                    <Button variant="primary" className="w-100">
                                        Finalizar compra
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </>
    );
};

export default CartPage;
