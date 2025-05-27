import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar';
import ProductForm from './Components/ProductForm';
import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
  return <h2>Welcome to the Home Page</h2>;
}

function About() {
  return <h2>About Our E-Commerce Site</h2>;
}

function App() {
  return (
    <Router>
      <header className="bg-primary text-white text-center py-3">
        <h1>Simple E-Commerce</h1>
      </header>

      <Navbar />

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<ProductForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;