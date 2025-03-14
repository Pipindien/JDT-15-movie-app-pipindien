import axiosWithConfig from "../api";
import { ResponseData } from "../type";

export const getTrending = async (page: number) => {
  try {
    const response = await axiosWithConfig.get(
      `trending/all/day?language=en-US&page=${page}`
    );

    if (response.data) {
      response.data.results = response.data.results.slice(0, 10);
      return response.data as ResponseData;
    }

    return undefined;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return undefined;
  }
};
