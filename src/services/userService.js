// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000' || 'http://34.229.184.27:4000';
const API_URL = 'http://34.229.184.27:4000';
const getToken = () => localStorage.getItem('userToken');

export const userService = {
    createUser: async (userData) => {
        const token = getToken();
        const response = await fetch(`${API_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(userData)
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.mensaje || data.error || 'Error al crear usuario');
        return data;
    },

    getUsers: async () => {
        const token = getToken();
        const response = await fetch(`${API_URL}/users`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.mensaje || 'Error al obtener usuarios');
        return data;
    }
};