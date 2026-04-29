import {Link} from "react-router-dom";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        {/* Badge 404 */}
        <p className="text-base font-semibold text-indigo-600 uppercase tracking-wide">
          404 Error
        </p>
        
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Halaman Tidak Ditemukan
        </h1>
        
        <p className="mt-6 text-base leading-7 text-gray-600">
          Maaf, sepertinya halaman yang kamu cari telah pindah ke lain hati atau tidak pernah ada.
        </p>
        
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-all duration-200"
          >
            Kembali ke Beranda
          </a>
          
          <a href="#" className="text-sm font-semibold text-gray-900 hover:text-indigo-600">
            Hubungi Support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  ); // <--- Pastikan ada penutup kurung dan semicolon ini
} // <--- Pastikan ada penutup kurung kurawal ini