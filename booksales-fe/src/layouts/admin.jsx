import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminLayout() {
  const location = useLocation();
  const { user, logout } = useAuth();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col dark:bg-gray-900">
      {/* HEADER ADMIN */}
      <header className="bg-white border-b border-gray-200 px-6 py-3 flex justify-between items-center dark:bg-gray-800 dark:border-gray-700">
        <Link to="/admin/dashboard" className="flex items-center space-x-2 text-xl font-bold text-blue-600 dark:text-blue-500">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-1 11H7v-2h2v2zm0-4H7V7h2v2zm4 4h-2v-2h2v2zm0-4h-2V7h2v2z" />
          </svg>
          <span>Flowbite</span>
        </Link>
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {user?.name || "admin"} ({user?.role || "admin"})
          </span>
          <button
            onClick={logout}
            className="text-xs bg-red-600 text-white px-3 py-1.5 rounded-lg hover:bg-red-700 transition font-medium"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* SIDEBAR ADMIN */}
        <aside className="w-64 bg-white border-r border-gray-200 p-4 dark:bg-gray-800 dark:border-gray-700 min-h-[calc(100vh-60px)]">
          <ul className="space-y-3 font-medium text-gray-700 dark:text-gray-200">
            <li>
              <Link
                to="/admin/dashboard"
                className={`flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  isActive("/admin/dashboard") ? "font-bold text-blue-600 dark:text-blue-400" : ""
                }`}
              >
                <span>📈</span>
                <span className="underline">Overview</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/users"
                className={`flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  isActive("/admin/users") ? "font-bold text-blue-600 dark:text-blue-400" : ""
                }`}
              >
                <span>🗎</span>
                <span className="underline">Users</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/authors"
                className={`flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  isActive("/admin/authors") ? "font-bold text-blue-600 dark:text-blue-400" : ""
                }`}
              >
                <span>🗎</span>
                <span className="underline">Authors</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/genres"
                className={`flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  isActive("/admin/genres") ? "font-bold text-blue-600 dark:text-blue-400" : ""
                }`}
              >
                <span>🗎</span>
                <span className="underline">Genres</span>
              </Link>
            </li>

            <li className="pt-6">
              <Link
                to="/admin/books"
                className={`flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  isActive("/admin/books") ? "font-bold text-blue-600 dark:text-blue-400" : ""
                }`}
              >
                <span>🗎</span>
                <span className="underline">Books</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/transactions"
                className={`flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  isActive("/admin/transactions") ? "font-bold text-blue-600 dark:text-blue-400" : ""
                }`}
              >
                <span>🔒</span>
                <span className="underline">Transaction</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/help"
                className={`flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  isActive("/admin/help") ? "font-bold text-blue-600 dark:text-blue-400" : ""
                }`}
              >
                <span>⚙️</span>
                <span className="underline">Help</span>
              </Link>
            </li>
          </ul>
        </aside>

        {/* KONTEN UTAMA ADMIN */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}