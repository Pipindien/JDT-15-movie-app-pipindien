import React from "react";
import { useTrendingData } from "../hooks/useTrendingData";
import Card from "../../component/card/card";
import { Movie } from "../../services/type";
import Slider from "../../component/card/slider";
import { Link } from "react-router-dom"; // Perbaikan import

const Home: React.FC = () => {
  const { trending, paginationInfo, setPaginationInfo } = useTrendingData();

  const handlePrevButton = () => {
    if (paginationInfo.page > 1) {
      setPaginationInfo({ page: paginationInfo.page - 1 });
    }
  };

  const handleNextButton = () => {
    if (paginationInfo.page !== paginationInfo.total_pages) {
      setPaginationInfo({ page: paginationInfo.page + 1 });
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Slider */}
      <section className="relative w-full mb-4">
        {trending && trending.length > 0 && <Slider data={trending} />}
      </section>

      {/* Trending Movies */}
      <section className="flex flex-col px-4 md:px-16">
        <h1 className="font-semibold text-xl md:text-3xl text-center pt-3">
          Trending Movie
        </h1>

        {/* Grid yang lebih responsif */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5 p-4 md:p-6">
          {trending?.map((item: Movie) => (
            <Link
              key={item.id}
              to={`/detail/${item.id}`}
              className="block w-full"
            >
              <Card data={item} />
            </Link>
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex flex-row justify-center gap-6 mt-6">
          <button
            onClick={handlePrevButton}
            className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed w-full sm:w-auto"
            disabled={paginationInfo.page === 1}
          >
            ← Previous
          </button>

          <button
            onClick={handleNextButton}
            className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed w-full sm:w-auto"
            disabled={paginationInfo.page === paginationInfo.total_pages}
          >
            Next →
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
