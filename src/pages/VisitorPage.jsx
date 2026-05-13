import React from "react";
import VisitorLayout from "../layouts/VisitorLayout";
import MenuCard from "../components/visitor/MenuCard";
import ReviewCard from "../components/visitor/ReviewCard";

const VisitorPage = () => {
  // PRODUCT DATA
  const products = [
    {
      id: 1,
      name: "Gourmet Wood-Fired Pizza",
      price: "95.000",
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
    },
    {
      id: 2,
      name: "Double Cheeseburger Supreme",
      price: "80.000",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
    },
    {
      id: 3,
      name: "Chef's Signature Sushi Platter",
      price: "135.000",
      img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500",
    },
  ];

  // REVIEW DATA
  const reviews = [
    {
      id: 1,
      name: "Alex R.",
      comment: "Incredible food and super fast delivery. My new go-to app!",
    },
    {
      id: 2,
      name: "Sarah L.",
      comment: "The best restaurant suggestions. I always find something new.",
    },
    {
      id: 3,
      name: "Michael K.",
      comment: "Excellent service and the food arrives piping hot.",
    },
    {
      id: 4,
      name: "Jessica W.",
      comment: "Love the promo deals! Best quality at great prices.",
    },
    {
      id: 5,
      name: "David M.",
      comment: "Customer service was very helpful. Highly recommend!",
    },
  ];

  return (
    <VisitorLayout>
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col md:flex-row items-center px-10 md:px-20 py-32 bg-gradient-to-br from-white via-orange-50 to-yellow-50 overflow-hidden"
      >
        {/* BACKGROUND BLUR */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200 rounded-full blur-3xl opacity-30"></div>

        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-200 rounded-full blur-3xl opacity-30"></div>

        {/* LEFT */}
        <div data-aos="fade-right" className="flex-1 z-10">
          <span className="text-orange-600 font-bold text-sm tracking-widest uppercase bg-orange-100 px-4 py-1 rounded-full">
            Welcome To Foodies
          </span>

          <h1 className="text-6xl md:text-7xl font-black text-slate-900 leading-tight mt-6">
            Explore
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              {" "}
              Delicious{" "}
            </span>
            <br />
            Food and
            <span className="text-blue-600"> Restaurants</span>
          </h1>

          <p className="text-gray-500 text-lg mt-6 max-w-lg leading-relaxed">
            Discover the best local eats, order for quick delivery, or reserve a
            table. A world of flavor is at your fingertips.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <button className="px-10 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-xl hover:bg-blue-700 transition-all hover:-translate-y-1">
              Get Started Now
            </button>

            <a
              href="#menu"
              className="px-10 py-4 border border-orange-500 text-orange-500 font-bold rounded-xl hover:bg-orange-500 hover:text-white transition-all"
            >
              Explore Menu
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          data-aos="fade-left"
          className="flex-1 relative mt-20 md:mt-0 z-10"
        >
          <img
            src="/img/italian.jpg"
            alt="Food Illustration"
            className="w-full max-w-xl mx-auto drop-shadow-2xl animate-float"
          />
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about">
            <div className="w-8 h-14 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
            </div>
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 px-10 md:px-20 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">
              Our Services
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 leading-tight">
              Provide Creative Services For
              <br />
              Your
              <span className="text-blue-600"> Hunger Strategy</span>
            </h2>
          </div>

          <p className="text-gray-500 max-w-sm hidden md:block leading-relaxed">
            Kami memastikan setiap pesanan Anda ditangani dengan cinta dan
            kecepatan tinggi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              title: "Restaurant Discovery",
              desc: "Cari resto terbaik di sekitarmu dengan mudah.",
              icon: "📍",
            },
            {
              title: "Fast Delivery",
              desc: "Pengiriman kilat kurang dari 30 menit.",
              icon: "⚡",
            },
            {
              title: "Reliable Service",
              desc: "Layanan pelanggan 24/7 untuk kendala Anda.",
              icon: "🤝",
            },
            {
              title: "Best Deals",
              desc: "Promo diskon hingga 70% setiap hari.",
              icon: "🎁",
            },
          ].map((item, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 150}
              className="p-8 border border-gray-100 rounded-3xl hover:shadow-2xl hover:shadow-orange-100 hover:-translate-y-3 transition-all duration-500 group bg-white"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              <h4 className="text-xl font-bold mb-3">{item.title}</h4>

              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="py-32 px-10 md:px-20 bg-slate-50">
        <div className="text-center mb-20">
          <span className="text-orange-500 uppercase font-bold tracking-widest text-sm">
            Featured Menu
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-3">
            Taste Our Most
            <span className="text-orange-500"> Loved Favorites</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((item) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={item.id * 200}
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
                  <span>14 February, 2026</span>

                  <span>Dish of the week</span>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                  {item.name}
                </h3>

                <p className="text-2xl font-black text-slate-900 mb-6">
                  Rp {item.price}
                </p>

                <button className="flex items-center gap-2 font-bold text-slate-800 group-hover:gap-4 transition-all">
                  Add to Cart
                  <span className="text-orange-500">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-32 px-10 md:px-20 bg-white">
        <div className="text-center mb-20">
          <span className="text-orange-500 uppercase font-bold tracking-widest text-sm">
            Testimonials
          </span>

          <h2 className="text-5xl font-bold mt-3">
            Pelanggan
            <span className="text-blue-600"> Puas</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {reviews.map((rev, i) => (
            <div
              key={i}
              data-aos="flip-left"
              data-aos-delay={i * 100}
              className="p-6 bg-orange-50 rounded-2xl text-center hover:bg-orange-100 hover:-translate-y-2 transition-all duration-500"
            >
              <img
                src={`https://i.pravatar.cc/150?u=${rev.id}`}
                alt="avatar"
                className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-white shadow-md"
              />

              <h5 className="font-bold text-slate-900">{rev.name}</h5>

              <div className="text-yellow-400 text-xs mb-3">★★★★★</div>

              <p className="text-xs text-gray-600 italic leading-relaxed">
                "{rev.comment}"
              </p>
            </div>
          ))}
        </div>
      </section>
    </VisitorLayout>
  );
};

export default VisitorPage;
