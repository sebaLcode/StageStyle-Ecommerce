import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FormGroup from '../molecules/FormGroup';
import Button from '../atoms/Button';
import usuarios from '../../data/usersData';
import './LoginForm.css'


function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const newErrors = {};

    const regex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|duoc\.cl|profesor\.duoc\.cl)$/;
    newErrors.email = regex.test(formData.email) && formData.email.length <= 100;

    newErrors.password =
      formData.password.length >= 4 && formData.password.length <= 10;

    setErrors(newErrors);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const allValid = Object.values(errors).every(Boolean);

    if (!allValid) {
      alert('Correo o contraseña incorrectos');
      return;
    }


    const user = usuarios.find(
      (u) =>
        u.email === formData.email.trim() && u.password === formData.password.trim()
    );

    if (!user) {
      alert('Correo o contraseña incorrectos');
      return;
    }

    localStorage.setItem('usuarioLogueado', JSON.stringify(user));

    if (user.tipoUsuario === 'Administrador' || user.tipoUsuario === 'Vendedor') {
      window.location.href = '/admin/home';
    } else {
      window.location.href = '/';
    }
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
        isValid={errors.email}
        isInvalid={formData.email && !errors.email}
      />
      <FormGroup
        label="Contraseña"
        type="password"
        name="password"
        placeholder="Mínimo 8 caracteres"
        value={formData.password}
        onChange={handleChange}
        required
        isValid={errors.password}
        isInvalid={formData.password && !errors.password}
      />

      {/* <Button text="Iniciar Sesión" variant="login" type="submit" /> */}
      <Button variant='login'>
        Iniciar Sesión
      </Button>
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