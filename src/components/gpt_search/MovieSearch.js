import React, { useState } from "react";
import { IMAGE_CDN_URL } from "../../utils/constant";

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {};

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Movie Search</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleSearch}
          className="ml-2 p-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </div>

      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {searchResults.map((movie) => (
            <div key={movie.id} className="mb-8">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full h-64 object-cover"
                  src={`${IMAGE_CDN_URL}/${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{movie.title}</div>
                  <p className="text-gray-700 text-base">{movie.overview}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default MovieSearch;
