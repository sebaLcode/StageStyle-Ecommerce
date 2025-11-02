import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationPage from './components/pages/RegistrationPage';
import Home from './components/pages/Home';
import './App.css';
import LoginPage from './components/pages/LoginPage';
import ProductosPage from './components/pages/ProductosPage';



function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/productos" element={<ProductosPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;