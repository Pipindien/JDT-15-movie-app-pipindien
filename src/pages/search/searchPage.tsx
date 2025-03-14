import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const API_KEY = "b5042270c7fe25205db449aa28311112";
const BASE_URL = "https://api.themoviedb.org/3";

const SearchPage: React.FC = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query) {
      axios
        .get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
        .then((response) => setMovies(response.data.results))
        .catch((error) =>
          console.error("Error fetching search results:", error)
        );
    }
  }, [query]);

  return (
    <div className="max-w-[1440px] mx-auto p-10 text-white">
      <h1 className="text-3xl font-bold mb-5">Search Results for: "{query}"</h1>
      {movies.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {movies.map((movie: any) => (
            <div key={movie.id} className="bg-gray-800 p-3 rounded-lg">
              <img
                className="w-full h-64 object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h2 className="mt-3 text-lg font-semibold">{movie.title}</h2>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-lg">No results found.</p>
      )}
    </div>
  );
};

export default SearchPage;
