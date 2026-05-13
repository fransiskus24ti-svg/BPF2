export default function ReviewCard({ rev, i }) {
  return (
    <div
      data-aos="flip-left"
      data-aos-delay={i * 100}
      className="p-6 bg-orange-50 rounded-2xl text-center hover:bg-orange-100 hover:-translate-y-2 transition-all duration-500"
    >

      <img
        src={rev.avatar}
        alt="avatar"
        className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-white shadow-md object-cover"
      />

      <h5 className="font-bold text-slate-900">
        {rev.name}
      </h5>

      <div className="text-yellow-400 text-xs mb-3">
        ★★★★★
      </div>

      <p className="text-xs text-gray-600 italic leading-relaxed">
        "{rev.comment}"
      </p>

    </div>
  );
}