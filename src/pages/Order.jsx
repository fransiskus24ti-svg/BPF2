import React from 'react';
import PageHeader from "../components/pageheader";

export default function Orders() {
  const koruptorOrders = [
    "Setya Novanto", "Juliari Batubara", "Djoko Tjandra", "Luthfi Hasan Ishaaq", 
    "Akil Mochtar", "Angelina Sondakh", "M. Nazaruddin", "Gayus Tambunan", 
    "Edhy Prabowo", "Ratu Atut Chosiyah", "Zumi Zola", "Anas Urbaningrum", 
    "Irman Gusman", "Patrialis Akbar", "Suryadharma Ali", "Andi Mallarangeng", 
    "Miranda Goeltom", "Harun Masiku", "Pinangki Sirna Malasari", "Johnny G. Plate", 
    "Syahrul Yasin Limpo", "Harvey Moeis", "Helena Lim", "Rafael Alun Trisambodo", 
    "Fuad Amin", "Tubagus Chaeri Wardana", "Rudy Rubiandini", "Wawan Ridwan", 
    "Herry Nurhayat", "Dadang Suganda"
  ];

  const data = koruptorOrders.map((name, i) => ({
    id: `ORD${(i + 1).toString().padStart(3, '0')}`,
    name: name,
    status: ["Pending", "Completed", "Cancelled"][i % 3],
    price: (Math.floor(Math.random() * 500) + 100) + ".000.000.000", 
    date: `2024-03-${((i + 1) % 30) + 1}`
  }));

  return (
    <div className="p-6 min-h-screen bg-slate-50 animate-in fade-in duration-700">
      <div className="hover:scale-[1.01] transition-transform duration-300">
        <PageHeader title="Daftar Aliran Dana (Orders)" />
      </div>
      
      <div className="mt-8 overflow-hidden shadow-2xl rounded-2xl border border-white/60">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-white uppercase bg-gradient-to-r from-blue-600 to-indigo-700">
            <tr>
              <th className="px-6 py-5">Order ID</th>
              <th className="px-6 py-5">Nama "Customer"</th>
              <th className="px-6 py-5">Status</th>
              <th className="px-6 py-5 text-right">Total Price (Rp)</th>
              <th className="px-6 py-5 text-center">Tanggal</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {data.map((item) => (
              <tr key={item.id} className="group hover:bg-blue-50/50 transition-all duration-200 cursor-default">
                <td className="px-6 py-4 font-mono text-blue-600 group-hover:scale-110 transition-transform">{item.id}</td>
                <td className="px-6 py-4 font-semibold text-gray-700 group-hover:text-blue-700">{item.name}</td>
                <td className="px-6 py-4">
                  <span className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm transition-all group-hover:ring-2 ${
                    item.status === 'Completed' ? 'bg-emerald-100 text-emerald-700 ring-emerald-300' : 
                    item.status === 'Pending' ? 'bg-amber-100 text-amber-700 ring-amber-300' : 
                    'bg-rose-100 text-rose-700 ring-rose-300'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right font-black text-slate-900 group-hover:text-indigo-600">{item.price}</td>
                <td className="px-6 py-4 text-center text-gray-400 group-hover:text-gray-600 italic">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}