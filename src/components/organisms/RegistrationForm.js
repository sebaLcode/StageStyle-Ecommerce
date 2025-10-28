import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormGroup from '../molecules/FormGroup';
import Button from '../atoms/Button';
import LocationSelector from './LocationSelector';
import './RegistrationForm.css'

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    telefono: '',
    region: '',
    comuna: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Si el usuario cambia la región, la comuna se resetea
    const newFormData = {
      ...formData,
      [name]: value,
      ...(name === 'region' && { comuna: '' })
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
        label="Nombre completo"
        type="text"
        name="name"
        placeholder="Ingresa tu nombre"
        value={formData.name}
        onChange={handleChange}
        required
      />
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
      <FormGroup
        label="Confirmar contraseña"
        type="password"
        name="confirmPassword"
        placeholder="Repite tu contraseña"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />
      <FormGroup
        label="Télefono (opcional)"
        type="tel"
        name="telefono"
        placeholder="+56 9 1234 5678"
        value={formData.telefono}
        onChange={handleChange}
      />
      <div className="row">
        <LocationSelector
          onLocationChange={handleChange}
          regionValue={formData.region}
          comunaValue={formData.comuna}
        />
      </div>

      <Button>
        Registrarse
      </Button>

      <p className="text-center mt-3">
        ¿Ya tienes cuenta?{' '}
        <Link to="/" className="text-primary text-decoration-none">
          Inicia Sesión
        </Link>
      </p>

    </form>
  );
}

export default RegistrationForm;