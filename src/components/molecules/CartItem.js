import React from "react";
import Button from "../atoms/Button";
import PriceTag from "../atoms/PriceTag";

const CartItem = ({ item, index, updateQuantity, removeFromCart }) => {
    const subtotal = item.price * item.cantidad;

    return (
        <div className="card mb-3 shadow-sm">
            <div className="card-body d-flex align-items-center justify-content-between flex-wrap">
                <div className="d-flex align-items-center gap-3">
                    <img
                        src={item.image}
                        alt={item.title}
                        style={{
                            width: 80,
                            height: 80,
                            objectFit: "cover",
                            borderRadius: "8px",
                        }}
                    />
                    <div>
                        <h6 className="mb-1">{item.title}</h6>
                        {item.talla && <p className="text-muted mb-0">Talla: {item.talla}</p>}
                        <PriceTag price={item.price} />
                    </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                    <Button
                        variant="outline-secondary"
                        onClick={() => updateQuantity(index, item.cantidad - 1)}
                    >
                        -
                    </Button>
                    <span>{item.cantidad}</span>
                    <Button
                        variant="outline-secondary"
                        onClick={() => updateQuantity(index, item.cantidad + 1)}
                    >
                        +
                    </Button>
                </div>

                <div className="text-end">
                    <strong>${subtotal.toLocaleString("es-CL")}</strong>
                    <Button
                        variant="danger"
                        className="ms-3"
                        onClick={() => removeFromCart(index)}
                    >
                        <i className="bi bi-trash"></i>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;