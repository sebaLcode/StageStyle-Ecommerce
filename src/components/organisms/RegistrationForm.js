import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FormGroup from '../molecules/FormGroup';
import Button from '../atoms/Button';
import LocationSelector from './LocationSelector';
import regiones from '../../data/locationData.js';
import './RegistrationForm.css';
import Button from '../atoms/Button';



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

  const [errors, setErrors] = useState({}); //Acá controlamos el is-valid / invalid
  const [comunas, setComunas] = useState([]);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   // Si el usuario cambia la región, la comuna se resetea
  //   const newFormData = {
  //     ...formData,
  //     [name]: value,
  //     ...(name === 'region' && { comuna: '' })
  //   };

  //   setFormData(newFormData);
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'region' ? { comuna: '' } : {}) // resetear comuna si cambia región
    }));

    // Si el usuario cambia la región, la comuna se resetea
    // const newFormData = {
    //   ...formData,
    //   [name]: value,
    //   ...(name === 'region' && { comuna: '' })
    // };

    // setFormData(newFormData);

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
      alert('Usuario registrado correctamente');
      console.log('Datos enviados:', formData);
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
      alert('Errores en los campos');
    }
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
        placeholder="Mínimo 8 caracteres"
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
        <Link to="/login" className="login-link">
          Inicia Sesión
        </Link>
      </p>



        {/* <LocationSelector 
            onLocationChange={handleChange}
            regionValue={formData.region}
            comunaValue={formData.comuna}
        />
      </div>
      <Button text="Registrarse" variant="register" type="submit" /> */}

    </form>
  );
}

export default RegistrationForm;