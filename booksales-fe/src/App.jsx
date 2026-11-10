import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Layouts
import PublicLayout from "./layouts/public";
import AdminLayout from "./layouts/admin";

// Pages Public
import Home from "./pages/public/index";
import BooksList from "./pages/public/books"; // Halaman Buku Terlaris Public
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

// Pages Admin
import GenresList from "./pages/admin/genres/index";
import AuthorsList from "./pages/admin/authors/index";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* PUBLIC ROUTES (Bisa diakses tanpa login) */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<BooksList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* PROTECTED ADMIN ROUTES (Hanya role "admin") */}
          <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
            <Route element={<AdminLayout />}>
              <Route path="/admin/dashboard" element={<GenresList />} />
              <Route path="/admin/genres" element={<GenresList />} />
              <Route path="/admin/authors" element={<AuthorsList />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}