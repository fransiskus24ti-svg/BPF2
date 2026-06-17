import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
// Perbaikan import: Satukan semua icon MD ke dalam /md
import { MdDashboard, MdPeople, MdFastfood } from "react-icons/md"; 
import { BiNotepad, BiLogOut } from "react-icons/bi";
import { AiOutlineFileText } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";

export default function Sidebar() {
  const navigate = useNavigate();

  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2
        ${isActive
      ? "text-hijau bg-green-200 font-extrabold"
      : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
    }`;

  // Fungsi penanganan logout
  const handleLogout = () => {
    const konfirmasi = confirm("Apakah kamu yakin ingin keluar dari aplikasi Sedap?");
    if (konfirmasi) {
      localStorage.removeItem("token"); // Hapus token dari browser
      window.location.href = "/login"; // Forward paksa ke halaman login
    }
  };

  return (
    <div
      id="sidebar"
      className="flex min-h-screen w-[360px] flex-col bg-white p-10 shadow-lg"
    >
      {/* Logo */}
      <div id="sidebar-logo" className="flex flex-col">
        <span
          id="logo-title"
          className="font-poppins-extrabold text-[48px] text-gray-900 font-[1000]"
        >
          sedap
          <b id="logo-dot" className="text-hijau">
            .
          </b>
        </span>
        <span id="logo-subtitle" className="font-semibold text-gray-400">
          Modern Admin Dashboard
        </span>
      </div>

      {/* List Menu */}
      <div id="sidebar-menu" className="mt-10 flex-1">
        <ul id="menu-list" className="space-y-3">
          <li>
            <NavLink id="menu-1" to="/" className={menuClass}>
              <MdDashboard className="mr-4 text-xl" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-2" to="/orders" className={menuClass}>
              <BiNotepad className="mr-4 text-xl" />
              <span>Orders</span>
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-3" to="/customers" className={menuClass}>
              <MdPeople className="mr-4 text-xl" />
              <span>Customers</span>
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-4" to="/products" className={menuClass}>
              <MdFastfood className="mr-4 text-xl" />
              <span>Products</span>
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-notes" to="/notes" className={menuClass}>
              <AiOutlineFileText className="mr-4 text-xl" />
              <span>Notes</span>
            </NavLink>
          </li>

          {/* TOMBOL LOGOUT UTK FORWARD KE LOGIN */}
          <li>
            <button
              onClick={handleLogout}
              className="w-full flex cursor-pointer items-center rounded-xl p-4 space-x-2 text-red-500 hover:bg-red-50 font-semibold transition-all duration-200 text-left"
            >
              <BiLogOut className="mr-4 text-xl" />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div id="sidebar-footer" className="mt-auto mb-10 flex flex-col gap-4">
        <div
          id="footer-card"
          className="bg-hijau px-4 py-3 rounded-md shadow-lg flex items-center justify-between text-white text-sm"
        >
          <div id="footer-text" className="flex flex-col w-2/3">
            <span>Please organize your menus through button below!</span>
            <div
              id="add-menu-button"
              className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2 text-gray-600 cursor-pointer"
            >
              <FaPlus />
              <span className="font-bold">Add Menus</span>
            </div>
          </div>
          <img
            id="footer-avatar"
            className="w-20 rounded-full"
            src="https://avatar.iran.liara.run/public/28"
            alt="Chef Avatar"
          />
        </div>
        <div className="flex flex-col mt-4">
          <span id="footer-brand" className="font-bold text-gray-400">
            Sedap Restaurant Admin Dashboard
          </span>
          <p id="footer-copyright" className="font-light text-gray-400">
            &copy; 2025 All Right Reserved
          </p>
        </div>
      </div>
    </div>
  );
}