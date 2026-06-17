import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Notes from "./pages/Notes";
import Login from "./pages/Login"; // Pastikan kamu membuat file Login.jsx di folder pages
import NotFound from "./pages/NotFound";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  // Ambil token untuk mengecek status login user
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Routes>
      {/* 1. Jalur Bebas: Halaman Login */}
      {/* Jika user sudah login tapi mencoba buka /login, lempar otomatis ke Dashboard (/) */}
      <Route 
        path="/login" 
        element={isAuthenticated ? <Navigate to="/" /> : <Login />} 
      />

      {/* 2. Jalur Proteksi: Semua Halaman Admin Dashboard */}
      {/* Jika user belum login (tidak punya token), lempar paksa ke /login */}
      <Route
        path="/*"
        element={
          isAuthenticated ? (
            <div id="app-container" className="bg-gray-100 min-h-screen flex">
              <div id="layout-wrapper" className="flex flex-row flex-1">
                <Sidebar />
                <div id="main-content" className="flex-1 p-4">
                  <Header />
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/notes" element={<Notes />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
              </div>
            </div>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
}

export default App;