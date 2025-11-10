import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const stored = localStorage.getItem("cart");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, talla = null, cantidad = 1) => {
        setCart((prevCart) => {
            const existingIndex = prevCart.findIndex(
                (p) => p.id === product.id && p.talla === talla
            );
            if (existingIndex >= 0) {
                const updated = [...prevCart];
                updated[existingIndex].cantidad += cantidad;
                return updated;
            } else {
                return [...prevCart, { ...product, talla, cantidad }];
            }
        });
    };

    const updateQuantity = (index, newQty) => {
        setCart((prevCart) => {
            if (newQty < 1) return prevCart.filter((_, i) => i !== index);
            const updated = [...prevCart];
            updated[index].cantidad = newQty;
            return updated;
        });
    };

    const removeFromCart = (index) => {
        setCart((prevCart) => prevCart.filter((_, i) => i !== index));
    };

    const clearCart = () => setCart([]);

    const total = cart.reduce((sum, i) => sum + i.price * i.cantidad, 0);
    const totalItems = cart.reduce((sum, i) => sum + i.cantidad, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                updateQuantity,
                removeFromCart,
                clearCart,
                total,
                totalItems,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
