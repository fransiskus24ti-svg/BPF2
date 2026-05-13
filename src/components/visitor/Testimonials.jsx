import reviewData from "../../data/reviewData";

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6"> {}
        
        <h2 className="text-5xl font-black text-center text-slate-900">
          Testimoni Pelanggan
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {reviewData.map((item) => ( 
            <div 
              key={item.id} 
              className="bg-[#F8FAFC] p-10 rounded-[2rem] border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-5">
                <img 
                  src={`https://i.pravatar.cc/150?u=${item.id}`} // Sesuai perintah soal pake generator
                  className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
                  alt={item.name}
                />
                <div>
                  <h4 className="font-bold text-slate-900">{item.name}</h4>
                  <div className="flex text-orange-400 text-xs">
                    ★★★★★
                  </div>
                </div>
              </div>
              
              <p className="mt-6 text-slate-600 italic leading-relaxed">
                "{item.comment}"
              </p>
            </div>
          ))} {/* Penutup map yang bener */}
        </div>
      </div>
    </section>
  );
}