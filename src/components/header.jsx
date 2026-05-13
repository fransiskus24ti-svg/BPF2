import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 px-10 py-6 flex items-center justify-between">

      {/* LEFT */}
      <div className="flex items-center gap-3">

        <div className="w-11 h-11 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xl">
          F
        </div>

        <h1 className="text-3xl font-bold text-slate-800">
          Foodies<span className="text-orange-500">.</span>
        </h1>

      </div>

      {/* CENTER MENU */}
      <nav className="hidden lg:flex items-center gap-10">

        <a className="text-gray-600 hover:text-orange-500 font-semibold transition-all">
          Home
        </a>

        <a className="text-gray-600 hover:text-orange-500 font-semibold transition-all">
          Menu
        </a>

        <a className="text-gray-600 hover:text-orange-500 font-semibold transition-all">
          Promo
        </a>

        <a className="text-gray-600 hover:text-orange-500 font-semibold transition-all">
          Tentang
        </a>

        <a className="text-gray-600 hover:text-orange-500 font-semibold transition-all">
          Kontak
        </a>

      </nav>

      {/* RIGHT */}
      <div className="flex items-center gap-5">

        <Link
          to="/login"
          className="font-semibold text-slate-700 hover:text-orange-500"
        >
          Sign In
        </Link>

        <Link
          to="/register"
          className="bg-[#0F1020] text-white px-7 py-3 rounded-xl font-bold hover:scale-105 transition-all"
        >
          Sign Up
        </Link>

      </div>
    </header>
  );
}