import React, { createContext, useReducer, useContext } from 'react';


// Crear el contexto
const CartContext = createContext();

// Reducer para manejar las acciones del carrito
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Buscar si el producto ya está en el carrito
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id
      );
      
      if (existingItemIndex > -1) {
        // Si ya existe, aumentar la cantidad
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].cantidad += action.payload.cantidad;
        
        return {
          ...state,
          items: updatedItems
        };
      } else {
        // Si no existe, agregar nuevo producto
        return {
          ...state,
          items: [...state.items, action.payload]
        };
      }
    
    case 'REMOVE_FROM_CART':
      // Eliminar producto por índice
      return {
        ...state,
        items: state.items.filter((_, index) => index !== action.payload)
      };
    
    case 'UPDATE_QUANTITY':
      // Actualizar cantidad de un producto
      if (action.payload.cantidad < 1) {
        // Si cantidad es 0, eliminar el producto
        return {
          ...state,
          items: state.items.filter((_, index) => index !== action.payload.index)
        };
      }
      
      return {
        ...state,
        items: state.items.map((item, index) =>
          index === action.payload.index
            ? { ...item, cantidad: action.payload.cantidad }
            : item
        )
      };
    
    case 'CLEAR_CART':
      // Vaciar todo el carrito
      return {
        ...state,
        items: []
      };
    
    default:
      return state;
  }
};

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  // Función para agregar producto al carrito
  const addToCart = (product) => {
    // Convertir el precio de string a número (ej: "$29.990" → 29990)
    const precioNumerico = parseInt(
      product.price.replace('$', '').replace('.', '')
    );
    
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        nombre: product.title,
        precio: precioNumerico,
        imagen: product.image,
        artista: product.badge,
        cantidad: 1
      }
    });
  };

  // Función para eliminar producto del carrito
  const removeFromCart = (index) => {
    dispatch({ 
      type: 'REMOVE_FROM_CART', 
      payload: index 
    });
  };

  // Función para actualizar cantidad
  const updateQuantity = (index, cantidad) => {
    dispatch({ 
      type: 'UPDATE_QUANTITY', 
      payload: { index, cantidad } 
    });
  };

  // Función para vaciar el carrito
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  // Calcular total de items
  const totalItems = state.items.reduce((sum, item) => sum + item.cantidad, 0);
  
  // Calcular precio total
  const totalPrice = state.items.reduce(
    (sum, item) => sum + (item.precio * item.cantidad), 
    0
  );

  // Valores que estarán disponibles en el contexto
  const value = {
    items: state.items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider');
  }
  return context;
};