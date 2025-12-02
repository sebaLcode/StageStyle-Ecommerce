import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormGroup from '../molecules/FormGroup';
import LocationSelector from './LocationSelector';
import regiones from '../../data/locationData.js';
import Button from '../atoms/Button';
import './RegistrationForm.css';
import { auth, db } from '../../firebase-config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

function RegistrationForm() {
  const navigate = useNavigate();
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
  const [loading, setLoading] = useState(false); 

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

    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|duoc\.cl|stagestyle\.com|profesor\.duoc\.cl)$/;
    newErrors.email = emailRegex.test(formData.email) && formData.email.length <= 100;

    // Firebase pide mínimo 6 caracteres contra
    newErrors.password = formData.password.length >= 6;
    newErrors.confirmPassword = formData.password === formData.confirmPassword && formData.confirmPassword.length > 0;

    newErrors.region = formData.region !== '';
    newErrors.comuna = formData.comuna !== '';

    setErrors(newErrors);
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const allValid = Object.values(errors).every(Boolean);

    if (!allValid) {
      alert('Error en el formulario, verifica campos...');
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email.trim(),
        formData.password.trim()
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: formData.name.trim()
      });

      await setDoc(doc(db, "users", user.uid), {
        nombre: formData.name.trim(),
        email: formData.email.trim(),
        telefono: formData.telefono.trim(),
        region: formData.region,
        comuna: formData.comuna,
        role: 'Cliente',
        createdAt: new Date()
      });

      alert('¡Usuario registrado correctamente!');

      navigate('/login');

    } catch (error) {
      console.error("Error registro:", error);
      if (error.code === 'auth/email-already-in-use') {
        alert('Este correo ya está registrado.');
      } else if (error.code === 'auth/weak-password') {
        alert('La contraseña debe tener al menos 6 caracteres.');
      } else {
        alert('Error al registrar usuario: ' + error.message);
      }
    } finally {
      setLoading(false);
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
        placeholder="Mínimo 6 caracteres"
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

      <Button variant="register" disabled={loading}>
        {loading ? 'Registrando...' : 'Registrarse'}
      </Button>

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