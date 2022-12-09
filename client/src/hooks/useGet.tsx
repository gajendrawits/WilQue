import { useQuery } from "react-query";
import axiosInstance from "src/services/axiosInstance";

const useGet = (key: string, url: string, token?: any) => {
  const get = async () => {
    let headers: any;
    if (token) {
      const token = localStorage.getItem("token");
      headers = { Authorization: `Bearer ${token}` };
    }

    const { data } = await axiosInstance.get(url);
    return data;
  };
  const defaultConfig = {
    enabled: false,
    refetchOnWindowFocus: false,
    retry: false,
  };
  return useQuery(key, get, defaultConfig);
};

export default useGet;
