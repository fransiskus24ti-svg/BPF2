import React, { Suspense, useEffect } from "react";
import "./assets/tailwind.css";

import { Route, Routes } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

// Loading
import Loading from "./components/Loading";

// Layouts
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));

// Visitor
const VisitorPage = React.lazy(() => import("./pages/VisitorPage"));

// Admin Pages
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Order"));
const Customers = React.lazy(() => import("./pages/Customer"));

// Auth Pages
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

// Not Found
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {

  // AOS Animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Suspense fallback={<Loading />}>

      <Routes>

        {/* ================= VISITOR PAGE ================= */}
        <Route path="/" element={<VisitorPage />} />

        {/* ================= ADMIN ================= */}
        <Route element={<MainLayout />}>

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />

        </Route>

        {/* ================= AUTH ================= */}
        <Route element={<AuthLayout />}>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />

        </Route>

        {/* ================= 404 ================= */}
        <Route path="*" element={<NotFound />} />

      </Routes>

    </Suspense>
  );
}

export default App;