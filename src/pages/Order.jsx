import React from 'react';
import PageHeader from "../components/pageheader";

const orders = [
  {
    name: "Frans",
    menu: "Burger",
    price: "Rp 45.000",
    status: "Delivered",
  },
  {
    name: "Kevin",
    menu: "Pizza",
    price: "Rp 80.000",
    status: "Pending",
  },
  {
    name: "Jordan",
    menu: "Mie Ayam",
    price: "Rp 25.000",
    status: "Canceled",
  },
];

export default function Order() {
  return (
    <div>

      {/* TITLE */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Order List
        </h1>

        <p className="text-gray-400 mt-2">
          Dashboard / Orders
        </p>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 overflow-x-auto">

        <table className="w-full">

          <thead>
            <tr className="border-b border-gray-100 text-left">

              <th className="pb-5 text-gray-400 font-semibold">
                Customer
              </th>

              <th className="pb-5 text-gray-400 font-semibold">
                Menu
              </th>

              <th className="pb-5 text-gray-400 font-semibold">
                Price
              </th>

              <th className="pb-5 text-gray-400 font-semibold">
                Status
              </th>

            </tr>
          </thead>

          <tbody>

            {orders.map((item, index) => (

              <tr
                key={index}
                className="border-b border-gray-50 hover:bg-gray-50 transition-all"
              >

                <td className="py-6 font-semibold text-slate-700">
                  {item.name}
                </td>

                <td className="py-6 text-gray-500">
                  {item.menu}
                </td>

                <td className="py-6 text-gray-500">
                  {item.price}
                </td>

                <td className="py-6">

                  <span
                    className={`px-4 py-2 rounded-xl text-sm font-bold
                    ${
                      item.status === "Delivered"
                        ? "bg-green-100 text-green-600"
                        : item.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {item.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}