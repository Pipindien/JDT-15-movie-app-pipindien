import React from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useDetail } from "../hooks/useDetail";

const Detail: React.FC = () => {
  const { id } = useParams();

  const { movie, loading, error } = useDetail(`movie/${id}?language=en-US`);

  if (loading)
    return (
      <p className="text-center text-gray-400 text-lg mt-10">Loading...</p>
    );

  if (error)
    return (
      <p className="text-center text-red-500 text-lg mt-10">
        Error loading movie.
      </p>
    );

  if (!movie)
    return (
      <p className="text-center text-gray-400 text-lg mt-10">
        Movie not found.
      </p>
    );

  return (
    <div className="min-h-screen bg-[#0d0233] text-white">
      <div className="container mx-auto px-6 lg:px-20 py-10">
        <div className="flex flex-col md:flex-row gap-10 py-10">
          <img
            className="w-full md:w-1/3 rounded-lg shadow-lg object-cover"
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
          />

          <div className="flex-1">
            <h1 className="text-4xl font-bold">{movie.title}</h1>
            <div className="flex items-center gap-2 mt-2">
              <FaStar className="text-yellow-400 text-xl" />
              <span className="text-lg">{movie.vote_average.toFixed(1)}</span>
            </div>

            <p className="text-gray-300 mt-3">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
