import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3">
          <span className="self-center text-2xl font-bold text-blue-600 dark:text-blue-500">
            📚 BookSales
          </span>
        </Link>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-row space-x-8 font-medium">
            <li>
              <Link
                to="/"
                className={isActive("/") ? "text-blue-700 font-bold" : "text-gray-900 hover:text-blue-700"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/books"
                className={isActive("/books") ? "text-blue-700 font-bold" : "text-gray-900 hover:text-blue-700"}
              >
                Buku Terlaris
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex md:order-2 space-x-2">
          <Link
            to="/login"
            className="text-gray-800 hover:bg-gray-100 border border-gray-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Masuk
          </Link>
          <Link
            to="/register"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2"
          >
            Daftar
          </Link>
        </div>
      </div>
    </nav>
  );
}