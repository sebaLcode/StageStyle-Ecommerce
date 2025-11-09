import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FormGroup from '../molecules/FormGroup';
import LocationSelector from './LocationSelector';
import regiones from '../../data/locationData.js';
import Button from '../atoms/Button';
import usuarios from '../../data/usersData.js';

import './RegistrationForm.css';

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

  const [errors, setErrors] = useState({});
  const [comunas, setComunas] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'region' ? { comuna: '' } : {})
    }));
  };

  useEffect(() => {
    if (formData.region) {
      const regionSeleccionada = regiones.regiones.find(
        (r) => r.region === formData.region
      );
      setComunas(regionSeleccionada ? regionSeleccionada.comunas : []);
    } else {
      setComunas([]);
    }
  }, [formData.region]);

  useEffect(() => {
    const newErrors = {};

    newErrors.name = formData.name.trim().length > 0 && formData.name.length <= 150;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|duoc\.cl|profesor\.duoc\.cl)$/;
    newErrors.email = emailRegex.test(formData.email) && formData.email.length <= 100;

    newErrors.password = formData.password.length >= 4 && formData.password.length <= 10;
    newErrors.confirmPassword = formData.password === formData.confirmPassword && formData.confirmPassword.length > 0;

    newErrors.region = formData.region !== '';
    newErrors.comuna = formData.comuna !== '';

    setErrors(newErrors);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const allValid = Object.values(errors).every(Boolean);

    if (allValid) {
      const nuevoUsuario = {
        id: usuarios.length ? usuarios[usuarios.length - 1].id + 1 : Date.now(),
        nombre: formData.name.trim(),
        email: formData.email.trim(),
        password: formData.password.trim(),
        telefono: formData.telefono.trim(),
        region: formData.region,
        comuna: formData.comuna,
        tipoUsuario: 'Cliente'
      };

      const usuariosExistentes = JSON.parse(localStorage.getItem('usuarios')) || usuarios;

      const existe = usuariosExistentes.some(u => u.email === nuevoUsuario.email);
      if (existe) {
        alert('Ya existe ese usuario.');
        return;
      }
      const actualizados = [...usuariosExistentes, nuevoUsuario];
      usuarios.push(nuevoUsuario);
      localStorage.setItem('usuarios', JSON.stringify(actualizados));
      alert('Usuario registrado correctamente');
      console.log('Usuario agregado:', nuevoUsuario);

      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        telefono: '',
        region: '',
        comuna: ''
      });
      setErrors({});
    } else {
      alert('Error en el formulario, verifica campos...');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded shadow-sm bg-light text-start">
      <FormGroup
        label="Nombre completo"
        type="text"
        name="name"
        placeholder="Ingresa tu nombre"
        value={formData.name}
        onChange={handleChange}
        required
        isValid={errors.name === true}
        isInvalid={errors.name === false && formData.name !== ''}
      />
      <FormGroup
        label="Correo electrónico"
        type="email"
        name="email"
        placeholder="ejemplo@correo.com"
        value={formData.email}
        onChange={handleChange}
        required
        isValid={errors.email === true}
        isInvalid={errors.email === false && formData.email !== ''}
      />
      <FormGroup
        label="Contraseña"
        type="password"
        name="password"
        placeholder="Mínimo 4 caracteres"
        value={formData.password}
        onChange={handleChange}
        required
        isValid={errors.password === true}
        isInvalid={errors.password === false && formData.password !== ''}
      />
      <FormGroup
        label="Confirmar contraseña"
        type="password"
        name="confirmPassword"
        placeholder="Repite tu contraseña"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
        isValid={errors.confirmPassword === true}
        isInvalid={errors.confirmPassword === false && formData.confirmPassword !== ''}
      />
      <FormGroup
        label="Teléfono (opcional)"
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

      <Button variant="register">Registrarse</Button>

      <p className="text-center mt-3">
        ¿Ya tienes cuenta?{' '}
        <Link to="/login" className="login-link">
          Inicia Sesión
        </Link>
      </p>
    </form>
  );
}

export default RegistrationForm;
