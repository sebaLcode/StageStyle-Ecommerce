import React, { useState, useEffect } from 'react';
import FormGroup from '../molecules/FormGroup';
import Button from '../atoms/Button';
import './Contacto.css'; 
import Navbar from '../organisms/Navbar';



const Contacto = () => {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    email: '',
    contenido: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    setFormData({
      nombreCompleto: '',
      email: '',
      contenido: ''
    });
    alert('Mensaje enviado correctamente');
  };

  return (
    <>
      <Navbar />
      <div className="contacto-page">
        {}
        <div className="text-center mb-1">
          <h1 className="main-title-contacto">StageStyle</h1>
        </div>

        <div className="login-form-container">
          <form onSubmit={handleSubmit} className="login-form">
            {/* Título del formulario */}
            <h2 className="form-title-contacto">Formulario de Contacto</h2>

            <div className="form-group-contacto">
              <label className="form-label-contacto">Nombre Completo</label>
              <input 
                type="text"
                className="form-input-contacto"
                name="nombreCompleto"
                value={formData.nombreCompleto}
                onChange={handleChange}
                placeholder="Ingresa tu nombre completo"
                required
              />
            </div>

            <div className="form-group-contacto">
              <label className="form-label-contacto">Correo Electrónico</label>
              <input 
                type="email"
                className="form-input-contacto"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ejemplo@correo.com"
                required
              />
            </div>

            <div className="form-group-contacto">
              <label className="form-label-contacto">Mensaje</label>
              <textarea 
                className="form-input-contacto textarea-contacto"
                name="contenido"
                value={formData.contenido}
                onChange={handleChange}
                placeholder="Escribe tu mensaje aquí..."
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-login-contacto">
              ENVIAR MENSAJE
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contacto;