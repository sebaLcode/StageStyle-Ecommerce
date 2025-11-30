const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

const getToken = () => localStorage.getItem('userToken');

export const orderService = {
    createOrder: async (orderData) => {
        const response = await fetch(`${API_URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.mensaje || 'Error al procesar la orden');
        }
        return data;
    },

    getOrders: async () => {
        const token = getToken();
        const response = await fetch(`${API_URL}/orders`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.mensaje || 'Error al cargar ventas');
        return data;
    }
};