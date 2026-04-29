import React from 'react';
import PageHeader from "../components/pageheader";

export default function Customers() {
  const koruptorCustomers = [
    "Setya Novanto", "Juliari Batubara", "Djoko Tjandra", "Luthfi Hasan Ishaaq", 
    "Akil Mochtar", "Angelina Sondakh", "M. Nazaruddin", "Gayus Tambunan", 
    "Edhy Prabowo", "Ratu Atut Chosiyah", "Zumi Zola", "Anas Urbaningrum", 
    "Irman Gusman", "Patrialis Akbar", "Suryadharma Ali", "Andi Mallarangeng", 
    "Miranda Goeltom", "Harun Masiku", "Pinangki Sirna Malasari", "Johnny G. Plate", 
    "Syahrul Yasin Limpo", "Harvey Moeis", "Helena Lim", "Rafael Alun Trisambodo", 
    "Fuad Amin", "Tubagus Chaeri Wardana", "Rudy Rubiandini", "Wawan Ridwan", 
    "Herry Nurhayat", "Dadang Suganda"
  ];

  const data = koruptorCustomers.map((name, i) => ({
    id: `KOR${(i + 1).toString().padStart(3, '0')}`,
    name: name,
    email: `${name.toLowerCase().replace(/\s/g, '')}@lps.go.id`, 
    phone: `0812-666-00${(i + 1).toString().padStart(2, '0')}`,
    loyalty: i % 3 === 0 ? "VVIP (Gold)" : i % 3 === 1 ? "Elite (Silver)" : "Member (Bronze)"
  }));

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="animate-bounce-slow">
        <PageHeader title="Direktori Peserta LPS (Customers)" />
      </div>
      
      <div className="mt-8 grid grid-cols-1 gap-4 overflow-hidden rounded-xl">
        <div className="overflow-x-auto shadow-xl border border-gray-200 rounded-xl">
          <table className="w-full text-sm text-left bg-white">
            <thead className="bg-slate-900 text-slate-100">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Nama</th>
                <th className="px-6 py-4">Kontak Resmi</th>
                <th className="px-6 py-4 text-center">Loyalty Level</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="border-b transition-all duration-300 hover:bg-slate-900 hover:text-white group">
                  <td className="px-6 py-4 font-bold text-slate-400 group-hover:text-yellow-500">{item.id}</td>
                  <td className="px-6 py-4 text-lg font-medium">{item.name}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="group-hover:text-blue-300 text-blue-600 transition-colors">{item.email}</span>
                      <span className="text-xs text-gray-400 group-hover:text-gray-300">{item.phone}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-4 py-1 rounded-md text-xs font-black shadow-inner ${
                      item.loyalty.includes('Gold') ? 'bg-yellow-400 text-yellow-900' : 
                      item.loyalty.includes('Silver') ? 'bg-slate-300 text-slate-700' : 
                      'bg-orange-300 text-orange-900'
                    }`}>
                      {item.loyalty}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}