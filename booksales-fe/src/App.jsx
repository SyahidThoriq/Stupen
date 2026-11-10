import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Layouts
import PublicLayout from "./layouts/public";
import AdminLayout from "./layouts/admin";

// Pages Public
import Home from "./pages/public/index";
import BooksListPublic from "./pages/public/books";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

// Pages Admin
import AdminDashboard from "./pages/admin/dashboard";
import GenresList from "./pages/admin/genres/index";
import AuthorsList from "./pages/admin/authors/index";
import AdminBooksList from "./pages/admin/books/index";

// Komponen Placeholder untuk Menu Pelengkap (Users, Transactions, Help)
const DummyPage = ({ title }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{title}</h1>
    <p className="text-gray-500 text-sm dark:text-gray-400">
      Fitur ini adalah menu opsional template UI dan dalam tahap pengembangan.
    </p>
  </div>
);

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<BooksListPublic />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* PROTECTED ADMIN ROUTES */}
          <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
            <Route element={<AdminLayout />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/genres" element={<GenresList />} />
              <Route path="/admin/authors" element={<AuthorsList />} />
              <Route path="/admin/books" element={<AdminBooksList />} />
              
              {/* RUTE PELENGKAP AGAR TIDAK WHITE SCREEN */}
              <Route path="/admin/users" element={<DummyPage title="Manajemen Users" />} />
              <Route path="/admin/transactions" element={<DummyPage title="Daftar Transaksi" />} />
              <Route path="/admin/help" element={<DummyPage title="Pusat Bantuan" />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}