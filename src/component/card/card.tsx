import React from "react";
import { Movie } from "../../services/type";

interface CardProps {
  data: Movie;
}

const Card: React.FC<CardProps> = ({ data }) => {
  const {
    original_title,
    original_name,
    poster_path,
    release_date,
    first_air_date,
  } = data;
  return (
    <div className=" w-full h-[250px] sm:h-[335px] flex flex-col shadow-lg rounded-xl overflow-hidden bg-[#0a1435] max-w-sm md:max-w-md lg:max-w-lg mx-auto transition-transform transform hover:scale-105 duration-300">
      <img
        className="h-40 md:h-60 lg:h-60 w-full object-cover"
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={original_title ?? original_name}
      />
      <div className="p-2 md:p-4 space-y-2 flex flex-col flex-grow">
        <h1 className="font-semibold text-lg md:text-[16px] text-white">
          {original_name ?? original_title}
        </h1>
        <p className="font-semibold text-lg md:text-[12px] text-white">
          {release_date ?? first_air_date}
        </p>
      </div>
    </div>
  );
};

export default Card;
