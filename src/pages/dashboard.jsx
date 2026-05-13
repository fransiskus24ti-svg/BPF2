import {
  FaShoppingCart,
  FaTruck,
  FaBan,
  FaDollarSign,
} from "react-icons/fa";

const cards = [
  {
    title: "Total Orders",
    value: "75",
    icon: <FaShoppingCart />,
    bg: "bg-green-500",
  },
  {
    title: "Total Delivered",
    value: "175",
    icon: <FaTruck />,
    bg: "bg-blue-500",
  },
  {
    title: "Total Canceled",
    value: "40",
    icon: <FaBan />,
    bg: "bg-red-500",
  },
  {
    title: "Total Revenue",
    value: "Rp.128K",
    icon: <FaDollarSign />,
    bg: "bg-yellow-500",
  },
];

export default function Dashboard() {
  return (
    <div>

      {/* TITLE */}
      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Dashboard
          </h1>

          <p className="text-gray-400 mt-1">
            Dashboard / Order List
          </p>
        </div>

        <button className="bg-green-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg">
          Add Button
        </button>

      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {cards.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-400 font-medium">
                  {item.title}
                </p>

                <h2 className="text-4xl font-black text-slate-800 mt-3">
                  {item.value}
                </h2>

              </div>

              <div
                className={`${item.bg} text-white p-5 rounded-2xl text-2xl`}
              >
                {item.icon}
              </div>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
}