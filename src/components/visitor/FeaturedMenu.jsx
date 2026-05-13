import menuData from "../../data/menuData";

export default function FeaturedMenu() {
  return (
    <section className="py-24">

      <div className="max-w-[1400px] mx-auto px-6">

        <h2 className="text-5xl font-black text-center text-slate-900">
          Menu Favorit
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {menuData.map((menu) => (

            <div
              key={menu.id}
              className="bg-white rounded-[30px] overflow-hidden shadow-sm border border-gray-100 hover:-translate-y-2 transition-all"
            >

              <img
                src={menu.image}
                className="w-full h-[280px] object-cover"
              />

              <div className="p-8">

                <h3 className="text-2xl font-bold">
                  {menu.name}
                </h3>

                <p className="text-green-500 text-xl font-bold mt-3">
                  {menu.price}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}