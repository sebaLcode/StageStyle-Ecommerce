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

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/productos" element={<ProductosPage />} />

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
