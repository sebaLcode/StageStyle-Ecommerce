import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationPage from './components/pages/RegistrationPage';
import LoginPage from './components/pages/LoginPage';

const HomePage = () => <h2>¡Bienvenido a la página principal!</h2>;

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;