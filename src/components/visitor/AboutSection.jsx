export default function AboutSection() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-[1200px] mx-auto px-6 text-center">

        <h2 className="text-5xl font-black text-slate-900">
          Tentang Foodies
        </h2>

        <p className="text-gray-500 mt-6 text-xl leading-relaxed">
          Foodies adalah platform modern untuk memesan makanan
          dengan cepat dan mudah.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-[#F8FAFC] p-10 rounded-3xl">
            <h3 className="text-2xl font-bold">
              Tujuan Aplikasi
            </h3>

            <p className="text-gray-500 mt-4">
              Mempermudah pemesanan makanan secara online.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-10 rounded-3xl">
            <h3 className="text-2xl font-bold">
              Layanan Utama
            </h3>

            <p className="text-gray-500 mt-4">
              Delivery cepat dan dashboard restoran modern.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-10 rounded-3xl">
            <h3 className="text-2xl font-bold">
              Keunggulan
            </h3>

            <p className="text-gray-500 mt-4">
              UI modern, cepat, aman, dan mudah digunakan.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}