import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import LoginPage from './components/pages/LoginPage';
import ProductosPage from './components/pages/ProductosPage';
import RegistrationPage from './components/pages/RegistrationPage';
import AdminPage from './components/pages/AdminHome';
import AdminInventory from './components/pages/AdminInventory';
import AdminNewProduct from './components/pages/AdminNewProduct';
import AdminCustomers from './components/pages/AdminCustomers';
import AdminEmployees from './components/pages/AdminEmployees';
import AdminNewUser from './components/pages/AdminNewUser';
import ProtectedRoute from './components/routes/ProtectedRoutes';
import Camisetas from './components/pages/Camisetas';
import Hoodies from './components/pages/Hoodies';
import Accesorios from './components/pages/Accesorios';
import ColeccionesEspeciales from './components/pages/ColeccionesEspeciales';
import DetalleProducto from './components/pages/DetalleProducto';
import Nosotros from './components/pages/Nosotros';
import Blogs from './components/pages/Blogs';
import CartPage from './components/pages/CartPage';
import AdminOrders from './components/pages/AdminOrders';
import Contacto from './components/pages/Contacto';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/camisetas" element={<Camisetas />} />
          <Route path="/hoodies" element={<Hoodies />} />
          <Route path="/accesorios" element={<Accesorios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/colecciones-especiales" element={<ColeccionesEspeciales />} />
          <Route path="/detalle-producto/:id" element={<DetalleProducto />} />
          <Route path="/carrito" element={<CartPage />} />

          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={['Administrador', 'Vendedor']}>
                <AdminPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/inventory"
            element={
              <ProtectedRoute allowedRoles={['Administrador', 'Vendedor']}>
                <AdminInventory />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/inventory/new"
            element={
              <ProtectedRoute allowedRoles={['Administrador', 'Vendedor']}>
                <AdminNewProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/customers"
            element={
              <ProtectedRoute allowedRoles={['Administrador', 'Vendedor']}>
                <AdminCustomers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/employees"
            element={
              <ProtectedRoute allowedRoles={['Administrador', 'Vendedor']}>
                <AdminEmployees />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/newUser"
            element={
              <ProtectedRoute allowedRoles={['Administrador']}>
                <AdminNewUser />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/orders"
            element={
              <ProtectedRoute allowedRoles={['Administrador', 'Vendedor']}>
                <AdminOrders />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
