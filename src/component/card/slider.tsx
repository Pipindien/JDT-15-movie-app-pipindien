import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Movie } from "../../services/type";

interface SliderProps {
  data: Movie[];
}

const Slider: React.FC<SliderProps> = ({ data }) => {
  return (
    <div className="relative w-full h-[500px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Tambahkan Autoplay
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000, // Waktu jeda antar slide (ms)
          disableOnInteraction: false, // Tetap autoplay meskipun diinteraksi
        }}
        className="w-full h-full"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-full">
              <img
                className="w-full h-full object-cover"
                src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                alt={item.original_title || item.original_name}
              />
              <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black to-transparent w-full text-white">
                <h2 className="text-2xl font-bold">
                  {item.original_title || item.original_name}
                </h2>
                <p className="text-lg">Type : {item.media_type}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
