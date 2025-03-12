import axiosWithConfig from "../api";
import { Movie } from "../type";

export const getMovieDetail = async (id: number) => {
  try {
    const response = await axiosWithConfig.get(`movie/${id}?language=en-US`);
    return response.data as Movie;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return undefined;
  }
};
