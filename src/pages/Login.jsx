import React, { useState } from "react";
import { authAPI } from "../services/authAPI";
import AlertBox from "../components/AlertBox";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Memanggil fungsi login dari authAPI
      const data = await authAPI.login(email, password);
      
      // Simpan token JWT ke browser jika berhasil
      localStorage.setItem("token", data.access_token);
      
      // Forward bersih ke dashboard utama dan reload state
      window.location.href = "/"; 

    } catch (err) {
      if (err.response?.data?.error_description === "Email not confirmed") {
        setError("Email belum di-confirm! Buka dashboard Supabase -> Auth -> Users -> Klik titik tiga di emailmu -> Confirm Email.");
      } else {
        setError(err.response?.data?.error_description || "Email atau password salah!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Sedap<span className="text-emerald-500">.</span></h1>
          <p className="text-gray-500 mt-2 font-medium">Welcome Back 👋</p>
        </div>

        {error && <AlertBox type="error">{error}</AlertBox>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
            <input
              type="email"
              value={email}
              // PERBAIKAN: Di bawah ini sudah diganti menggunakan e.target.value yang benar
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@gmail.com"
              required
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl shadow-md transition duration-200 disabled:opacity-50"
          >
            {loading ? "Mohon Tunggu..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}