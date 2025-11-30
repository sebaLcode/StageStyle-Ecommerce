// src/services/productService.js
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

export const productService = {
    getAll: async (categoria = null) => {
        let url = `${API_URL}/productos`;
        if (categoria) {
            url += `?categoria=${encodeURIComponent(categoria)}`;
        }

        const response = await fetch(url);
        if (!response.ok) throw new Error('Error al cargar productos');
        return await response.json();
    },

    getById: async (id) => {
        const response = await fetch(`${API_URL}/productos/${id}`);
        if (!response.ok) throw new Error('Producto no encontrado');
        return await response.json();
    },

    create: async (productData) => {
        const response = await fetch(`${API_URL}/productos`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productData)
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.mensaje || 'Error al crear');
        return data;
    },

    update: async (id, productData) => {
        const response = await fetch(`${API_URL}/productos/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productData)
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.mensaje || 'Error al actualizar');
        return data;
    },

    delete: async (id) => {
        const response = await fetch(`${API_URL}/productos/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Error al eliminar');
        return true;
    }
};