import axios from "axios";

const axiosWithConfig = axios.create();

axiosWithConfig.interceptors.request.use((axiosConfig: any) => {
  axiosConfig.baseURL = "https://api.themoviedb.org/3/";
  axiosConfig.headers.Authorization =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTA0MjI3MGM3ZmUyNTIwNWRiNDQ5YWEyODMxMTExMiIsIm5iZiI6MTc0MTc0NjYzNC43NzEwMDAxLCJzdWIiOiI2N2QwZjFjYTEzOTkwYTA1OGI2MGE1OGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NGMGjboamcbZxjcGuIVdaXYsxpwtZfkj8Q860DzgZDs";
  return axiosConfig;
});

export default axiosWithConfig;
