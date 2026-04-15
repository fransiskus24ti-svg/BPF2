import frameworkData from "./framework.json";

export default function FrameworkList() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {frameworkData.map((item) => (
        <div 
          key={item.id} 
          className="border border-gray-300 p-6 mb-5 rounded-xl shadow-sm bg-white max-w-lg"
        >
          {/* Nama Framework */}
          <h2 className="text-2xl font-bold text-slate-800 mb-1">
            {item.name}
          </h2>
          
          {/* Deskripsi */}
          <p className="text-gray-600 text-lg mb-1">
            {item.description}
          </p>
          
          {/* Developer & Tahun */}
          <p className="text-gray-500">
            Developed by: <span className="font-semibold text-gray-700">{item.developer}</span> ({item.year})
          </p>
          
          {/* Link Website */}
          <div className="mt-2">
            <a 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 underline decoration-1 underline-offset-4"
            >
              Visit Website
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}