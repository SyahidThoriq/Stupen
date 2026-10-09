import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Team from './pages/Team';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="container">
        {/* Navbar Component */}
        <Navbar />

        {/* Declarative Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer className="py-3 my-4 border-top">
          <ul className="nav justify-content-center pb-3 mb-3">
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-body-secondary">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/team" className="nav-link px-2 text-body-secondary">Team</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link px-2 text-body-secondary">Contact</Link>
            </li>
          </ul>
          <p className="text-center text-body-secondary">&copy; 2026 Bookstore, Inc. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;