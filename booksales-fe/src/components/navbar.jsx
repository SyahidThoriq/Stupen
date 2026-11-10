import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const location = useLocation();
  const { user, logout } = useAuth();
  
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* LOGO BRAND */}
        <Link to="/" className="flex items-center space-x-3">
          <span className="self-center text-2xl font-bold text-blue-600 dark:text-blue-500">
            📚 BookSales
          </span>
        </Link>

        {/* MENU TENGAH (HOME & BUKU TERLARIS) */}
        <div className="flex items-center space-x-8 font-medium">
          <Link
            to="/"
            className={
              isActive("/")
                ? "text-blue-700 font-bold dark:text-blue-500"
                : "text-gray-900 hover:text-blue-700 dark:text-white"
            }
          >
            Home
          </Link>
          <Link
            to="/books"
            className={
              isActive("/books")
                ? "text-blue-700 font-bold dark:text-blue-500"
                : "text-gray-900 hover:text-blue-700 dark:text-white"
            }
          >
            Buku Terlaris
          </Link>
        </div>

        {/* TOMBOL KANAN (STATUS LOGIN / MASUK / DAFTAR) */}
        <div className="flex items-center space-x-3">
          {user ? (
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Hi, <strong>{user.name}</strong> ({user.role})
              </span>
              {user.role === "admin" && (
                <Link
                  to="/admin/genres"
                  className="text-xs bg-purple-700 text-white px-3 py-2 rounded-lg hover:bg-purple-800"
                >
                  Dashboard Admin
                </Link>
              )}
              <button
                onClick={logout}
                className="text-xs bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 font-medium rounded-lg text-sm px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Masuk
              </Link>
              <Link
                to="/register"
                className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                Daftar
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}