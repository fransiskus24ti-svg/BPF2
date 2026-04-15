import frameworkData from "./framework.json";
import { useState } from "react";

export default function FrameworkListSearchFilter() {
 
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const _searchTerm = searchTerm.toLowerCase();

  
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = selectedTag
      ? framework.tags.includes(selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-lg mb-6">
        {}
        <input
          type="text"
          placeholder="Search framework..."
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />

        {}
        <select
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
        >
          <option value="">All Tags</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {}
      <div className="space-y-5">
        {filteredFrameworks.length > 0 ? (
          filteredFrameworks.map((item) => (
            <div
              key={item.id}
              className="border border-gray-300 p-6 rounded-xl shadow-sm bg-white max-w-lg"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-1">
                {item.name}
              </h2>
              <p className="text-gray-600 text-lg mb-1">{item.description}</p>
              <p className="text-gray-500 text-sm">
                Developed by:{" "}
                <span className="font-semibold text-gray-700">
                  {item.developer}
                </span>{" "}
                ({item.year})
              </p>
              
              <div className="mt-2">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 underline text-sm"
                >
                  Visit Website
                </a>
              </div>

              
              {/* <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div> */}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No frameworks found.</p>
        )}
      </div>
    </div>
  );
}