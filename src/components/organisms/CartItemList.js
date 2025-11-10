import React from "react";
import CartItem from "../molecules/CartItem";

const CartItemList = ({ items, updateQuantity, removeFromCart }) => {
    return (
        <div>
            {items.map((item, index) => (
                <CartItem
                    key={index}
                    item={item}
                    index={index}
                    updateQuantity={updateQuantity}
                    removeFromCart={removeFromCart}
                />
            ))}
        </div>
    );
};

export default CartItemList;
