import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import LoginPage from './components/pages/LoginPage';
import ProductosPage from './components/pages/ProductosPage';
import RegistrationPage from './components/pages/RegistrationPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/productos" element={<ProductosPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;