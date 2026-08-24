import axios from "axios";

const useAxiosPublic = () => {
  const axiosPublic = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 30000,
  });
  axiosPublic.interceptors.request.use((config) => {
    config.headers = {
      ...config.headers,
    };
    return config;
  });

  return axiosPublic;
};

export default useAxiosPublic;