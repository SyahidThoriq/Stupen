import React from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Dashboard Admin
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Selamat datang di panel kelola data admin BookSales.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          to="/admin/genres"
          className="p-5 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 hover:border-blue-500"
        >
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            Kelola Genre 📚
          </h2>
          <p className="text-sm text-gray-500">Lihat dan atur daftar genre buku.</p>
        </Link>

        <Link
          to="/admin/authors"
          className="p-5 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 hover:border-blue-500"
        >
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            Kelola Author ✍️
          </h2>
          <p className="text-sm text-gray-500">Lihat dan atur daftar penulis buku.</p>
        </Link>
      </div>
    </div>
  );
}