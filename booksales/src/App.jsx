import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import Home from './pages/Home';
import Book from './pages/Book';
import Team from './pages/Team';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <Link to="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
              <i className="fa-solid fa-book fa-2x text-primary"></i>
              <span className="ms-2 fs-4 fw-bold">Bookstore</span>
            </Link>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><NavLink to="/" className={({ isActive }) => `nav-link px-3 py-2 rounded-pill fw-semibold me-1 ${isActive ? 'bg-primary text-white' : 'text-dark'}`}>Home</NavLink></li>
            <li><NavLink to="/books" className={({ isActive }) => `nav-link px-3 py-2 rounded-pill fw-semibold me-1 ${isActive ? 'bg-primary text-white' : 'text-dark'}`}>Books</NavLink></li>
            <li><NavLink to="/team" className={({ isActive }) => `nav-link px-3 py-2 rounded-pill fw-semibold me-1 ${isActive ? 'bg-primary text-white' : 'text-dark'}`}>Team</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => `nav-link px-3 py-2 rounded-pill fw-semibold ${isActive ? 'bg-primary text-white' : 'text-dark'}`}>Contact</NavLink></li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Book />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="py-3 my-4 border-top">
          <p className="text-center text-body-secondary">&copy; 2026 Bookstore, Inc. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;