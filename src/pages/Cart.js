import React from 'react';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { items, removeFromCart, clearCart, totalPrice } = useCart();

  if (!items || items.length === 0) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Tu carrito está vacío 🛒</div>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Tu Carrito</h2>
      {items.map((item, index) => (
        <div key={index} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
          <strong>{item.nombre}</strong> - ${item.precio.toLocaleString()} x {item.cantidad}
          <button 
            onClick={() => removeFromCart(index)}
            style={{ marginLeft: '1rem', background: 'red', color: 'white', border: 'none', borderRadius: '4px', padding: '0.3rem 0.7rem' }}
          >
            Eliminar
          </button>
        </div>
      ))}
      <div style={{ marginTop: '1rem', fontSize: '1.2rem', fontWeight: 'bold' }}>
        Total: ${totalPrice.toLocaleString()}
      </div>
      <button 
        onClick={clearCart} 
        style={{ 
          marginTop: '1rem',
          background: 'black', 
          color: 'white', 
          padding: '0.5rem 1rem', 
          border: 'none', 
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Vaciar carrito
      </button>
    </div>
  );
};

export default Cart;