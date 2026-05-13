export default function MenuCard({ item }) {
  return (
    <div
      data-aos="fade-up"
      className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group"
    >

      <div className="h-64 overflow-hidden">

        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

      </div>

      <div className="p-8">

        <div className="flex justify-between text-xs font-bold text-orange-500 mb-4 uppercase tracking-widest">

          <span>Best Seller</span>

          <span>Foodies</span>

        </div>

        <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
          {item.name}
        </h3>

        <p className="text-2xl font-black text-slate-900 mb-6">
          Rp {item.price}
        </p>

        <button className="flex items-center gap-2 font-bold text-slate-800 group-hover:gap-4 transition-all">

          Add to Cart

          <span className="text-orange-500">
            →
          </span>

        </button>

      </div>

    </div>
  );
}