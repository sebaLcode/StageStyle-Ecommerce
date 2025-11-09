import React from 'react';
import LoginForm from '../organisms/LoginForm';
import Navbar from '../organisms/Navbar';
import './LoginTemplate.css'

function LoginTemplate() {
  return (
    <div className='loginTemplate'>
      <Navbar />
      <div className="container mt-5 d-flex justify-content-center align-items-center" style={{minHeight: '80vh'}}>
        <div className="card p-4" style={{ maxWidth: '600px', width: '100%' }}>
          <div className='brand-header'>

            <h2 className="mb-4 text-center">
              StageStyle
            </h2>
            <p className="mb-4 text-center">Inicia Sesión</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default LoginTemplate;