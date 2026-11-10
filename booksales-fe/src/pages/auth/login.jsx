import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Logika penentuan role: Jika email mengandung kata "admin", maka role = admin
    const role = email.includes("admin") ? "admin" : "user";

    const userData = {
      name: email.split("@")[0],
      email: email,
      role: role,
    };

    login(userData);

    // Redirect sesuai hak akses
    if (role === "admin") {
      navigate("/admin/genres");
    } else {
      navigate("/");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-2xl font-bold mb-2 text-center text-gray-900 dark:text-white">
          Masuk ke Akun
        </h1>
        <p className="text-xs text-center text-gray-500 mb-6">
          *Gunakan email mengandung "admin" untuk role Admin (misal: admin@mail.com)
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@mail.com atau user@mail.com"
              className="w-full p-2.5 text-sm border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full p-2.5 text-sm border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white p-2.5 rounded-lg text-sm font-medium transition-colors"
          >
            Masuk
          </button>
        </form>
      </div>
    </section>
  );
}