import React from 'react';
import RegistrationForm from '../organisms/RegistrationForm';
import NavbarApp from '../organisms/NavbarApp';
import './RegistrationTemplate.css'

function RegistrationTemplate() {
  return (
    <>
      <NavbarApp />
      <div className="container mt-5 d-flex justify-content-center align-items-center">
        <div className="card p-4" style={{ maxWidth: '600px', width: '100%' }}>
          <div className='brand-header'>

            <h2 className="mb-4 text-center">
              StageStyle
            </h2>
            <p className="mb-4 text-center">Crear una nueva cuenta</p>
          </div>
          <RegistrationForm />
        </div>
      </div>
    </>
  );
}

export default RegistrationTemplate;