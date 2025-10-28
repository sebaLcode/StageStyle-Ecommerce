import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormGroup from '../molecules/FormGroup';
import Button from '../atoms/Button';
import './LoginForm.css'


function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newFormData = {
      ...formData,
      [name]: value
    };

    setFormData(newFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    // Aquí iría la lógica de envío
  };

  return (
    //Se puede probar con p-3 o p-4
    <form onSubmit={handleSubmit} className="p-3 border rounded shadow-sm bg-light text-start">
      <FormGroup
        label="Correo electrónico"
        type="email"
        name="email"
        placeholder="ejemplo@correo.com"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <FormGroup
        label="Contraseña"
        type="password"
        name="password"
        placeholder="Mínimo 8 caracteres"
        value={formData.password}
        onChange={handleChange}
        required
      />
      
      <Button text="Iniciar Sesión" variant="login" type="submit" />
      <p className="text-center mt-3">
        ¿Aún no tienes cuenta?{' '}
        <Link to="/register" className="text-primary text-decoration-none">
          Crear cuenta
        </Link>
      </p>
    </form>
  );
}

export default LoginForm;