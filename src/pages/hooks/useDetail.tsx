import { useEffect, useState } from "react";
import { Movie } from "../../services/type";
import axiosWithConfig from "../../services/api";

export const useDetail = (endpoint: string) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await axiosWithConfig.get(endpoint);
        setMovie(response.data);
      } catch (err) {
        setError("Failed to load movie details");
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [endpoint]);

  return { movie, loading, error };
};
