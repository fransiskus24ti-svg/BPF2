export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-20">

      <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-4 gap-10">

        <div>
          <h1 className="text-4xl font-black">
            Foodies.
          </h1>
        </div>

        <div>
          <h3 className="font-bold text-xl">
            Contact
          </h3>

          <p className="mt-5 text-gray-400">
            foodies@gmail.com
          </p>

          <p className="mt-2 text-gray-400">
            +62 812345678
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl">
            Social Media
          </h3>

          <p className="mt-5 text-gray-400">
            Instagram
          </p>

          <p className="mt-2 text-gray-400">
            Facebook
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl">
            Partners
          </h3>

          <p className="mt-5 text-gray-400">
            GoFood
          </p>

          <p className="mt-2 text-gray-400">
            GrabFood
          </p>
        </div>

      </div>

    </footer>
  );
}