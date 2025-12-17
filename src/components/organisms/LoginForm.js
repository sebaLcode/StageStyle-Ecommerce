import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormGroup from '../molecules/FormGroup';
import Button from '../atoms/Button';
import './LoginForm.css';
import { auth, db } from '../../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: false, password: false });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const newErrors = {};
    const regex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|duoc\.cl|stagestyle\.com|profesor\.duoc\.cl)$/;
    newErrors.email = regex.test(formData.email) && formData.email.length <= 100;
    newErrors.password = formData.password.length >= 4;
    setErrors(newErrors);
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const allValid = Object.values(errors).every(Boolean);
    if (!allValid) {
      alert('Por favor revisa el formato del correo o la contraseña.');
      return;
    }

    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, formData.email.trim(), formData.password.trim());
      const user = userCredential.user;

      //Acá firebase nos da el token para la sesión
      const token = await user.getIdToken();
      localStorage.setItem('userToken', token);

      let tipoUsuario = 'Cliente';
      let nombreUsuario = user.displayName || "Usuario";

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        tipoUsuario = data.role || 'Cliente';
        nombreUsuario = data.nombre || nombreUsuario;
      } else {
        if (user.email === 'admin@stagestyle.com') {
          tipoUsuario = 'Administrador';
        }
      }

      console.log(`Usuario logueado: ${user.email}, Rol detectado: ${tipoUsuario}`);

      const usuarioLogueado = {
        email: user.email,
        uid: user.uid,
        tipoUsuario: tipoUsuario,
        nombre: nombreUsuario
      };

      localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioLogueado));

      if (tipoUsuario === 'Administrador' || tipoUsuario === 'Vendedor') {
        navigate('/admin');
      } else {
        navigate('/');
      }

    } catch (error) {
      console.error("Error login:", error);
      let mensaje = 'Error al iniciar sesión.';
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
        mensaje = 'Correo o contraseña incorrectos.';
      } else if (error.code === 'auth/too-many-requests') {
        mensaje = 'Demasiados intentos fallidos. Intenta más tarde.';
      }
      alert(mensaje);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded shadow-sm bg-light text-start">
      <FormGroup
        label="Correo electrónico" type="email" name="email"
        placeholder="ejemplo@gmail.cl"
        value={formData.email} onChange={handleChange} required
        isValid={errors.email} isInvalid={formData.email && !errors.email}
      />
      <FormGroup
        label="Contraseña" type="password" name="password"
        placeholder="Tu contraseña"
        value={formData.password} onChange={handleChange} required
        isValid={errors.password} isInvalid={formData.password && !errors.password}
      />
      <Button variant="login" disabled={loading}>
        {loading ? 'Verificando...' : 'Iniciar Sesión'}
      </Button>
      <p className="text-center mt-3">
        ¿Aún no tienes cuenta?{' '}
        <Link to="/register" className="text-primary text-decoration-none">Crear cuenta</Link>
      </p>
    </form>
  );
}

export default LoginForm;