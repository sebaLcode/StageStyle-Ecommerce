import React, { createContext, useReducer, useContext } from 'react';
export const CartContext = createContext();
// Crear el contexto

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id
      );
      
      if (existingItemIndex > -1) {
       
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].cantidad += action.payload.cantidad;
        
        return {
          ...state,
          items: updatedItems
        };
      } else {
      
        return {
          ...state,
          items: [...state.items, action.payload]
        };
      }
    
    case 'REMOVE_FROM_CART':
    
      return {
        ...state,
        items: state.items.filter((_, index) => index !== action.payload)
      };
    
    case 'UPDATE_QUANTITY':
      
      if (action.payload.cantidad < 1) {
      
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
      
      return {
        ...state,
        items: []
      };
    
    default:
      return state;
  }
};


export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });


  const addToCart = (product) => {
    console.log("Producto recibido en addToCart:", product);
    
  
    let precioNumerico;
    if (typeof product.price === 'string') {
      precioNumerico = parseInt(
        product.price.replace('$', '').replace('.', '').replace(',', '')
      );
    } else {
      precioNumerico = product.price;
    }
    
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
    console.log('Estado actual del carrito (antes del render):', state.items);

  };

  
  const removeFromCart = (index) => {
    dispatch({ 
      type: 'REMOVE_FROM_CART', 
      payload: index 
    });
  };


  const updateQuantity = (index, cantidad) => {
    dispatch({ 
      type: 'UPDATE_QUANTITY', 
      payload: { index, cantidad } 
    });
  };

  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

 
  const totalItems = state.items.reduce((sum, item) => sum + item.cantidad, 0);
  
  
  const totalPrice = state.items.reduce(
    (sum, item) => sum + (item.precio * item.cantidad), 
    0
  );

 
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


export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider');
  }
  return context;
};