import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'; // Importa el CSS de Tailwind

import Home from './components/component/inicio/Home';
import Catalog from './components/component/catalogo/Catalog';
import { Contact } from './components/component/contacto/Contact';
import Footer from './components/component/Footer';
import Navbar from './components/component/Navbar';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
