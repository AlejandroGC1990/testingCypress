import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

const App = () => {
  const isAuthenticated = false; // Cambia esto para probar la autenticación

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
