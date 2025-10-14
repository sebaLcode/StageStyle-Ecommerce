import React from 'react';
import RegistrationForm from '../organisms/RegistrationForm';

function RegistrationTemplate() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">
        Formulario de Registro
      </h2>
      <RegistrationForm />
    </div>
  );
}

export default RegistrationTemplate;