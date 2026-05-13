import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">

        {/* LOGO */}
        <div>
          <a href="#home">
            <h1 className="text-4xl font-black text-slate-900 cursor-pointer">
              Foodies<span className="text-green-500">.</span>
            </h1>
          </a>
        </div>

        {/* MENU */}
        <nav className="hidden lg:flex items-center gap-10">

          <a
            href="#home"
            className="font-semibold text-gray-600 hover:text-green-500 hover:-translate-y-1 transition-all duration-300"
          >
            Home
          </a>

          <a
            href="#about"
            className="font-semibold text-gray-600 hover:text-green-500 hover:-translate-y-1 transition-all duration-300"
          >
            About
          </a>

          <a
            href="#menu"
            className="font-semibold text-gray-600 hover:text-green-500 hover:-translate-y-1 transition-all duration-300"
          >
            Menu
          </a>

          <a
            href="#about"
            className="font-semibold text-gray-600 hover:text-green-500 hover:-translate-y-1 transition-all duration-300"
          >
            Services
          </a>

          <a
            href="#review"
            className="font-semibold text-gray-600 hover:text-green-500 hover:-translate-y-1 transition-all duration-300"
          >
            Review
          </a>

          <a
            href="#contact"
            className="font-semibold text-gray-600 hover:text-green-500 hover:-translate-y-1 transition-all duration-300"
          >
            Contact
          </a>

        </nav>

        {/* BUTTON */}
        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="font-semibold text-slate-700 hover:text-green-500 transition-all duration-300"
          >
            Sign In
          </Link>

          <Link
            to="/register"
            className="font-semibold text-slate-700 hover:text-green-500 transition-all duration-300"
          >
            Sign Up
          </Link>

          <Link
            to="/register"
            className="bg-green-500 hover:bg-green-600 hover:-translate-y-1 text-white px-6 py-3 rounded-2xl font-bold shadow-lg transition-all duration-300"
          >
            Try For Free
          </Link>

        </div>

      </div>

    </header>
  );
}