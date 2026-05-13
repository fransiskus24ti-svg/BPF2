<section
  id="home"
  className="min-h-screen bg-orange-50 flex items-center"
>
  <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

    {/* LEFT */}
    <div>

      <p className="text-orange-500 font-semibold mb-3">
        Welcome to Foodies
      </p>

      <h1 className="text-6xl font-bold leading-tight mb-6">
        Delicious Food
        Delivered Fast
      </h1>

      <p className="text-gray-600 mb-8 text-lg">
        Nikmati makanan terbaik dengan pelayanan cepat
        dan tampilan modern.
      </p>

      <div className="flex gap-4">

        <button className="bg-orange-500 text-white px-7 py-3 rounded-full hover:scale-105 transition">
          Order Now
        </button>

        <button className="border border-orange-500 text-orange-500 px-7 py-3 rounded-full hover:bg-orange-500 hover:text-white transition">
          Explore Menu
        </button>

      </div>
    </div>

    {/* RIGHT */}
    <div className="relative">

      <img
        src="/images/hero-food.png"
        alt="Food"
        className="w-full animate-bounce"
      />

    </div>

  </div>
</section>