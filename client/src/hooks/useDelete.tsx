import { useMutation } from "react-query";
import axiosInstance from "src/services/axiosInstance";

interface IParams {
  url: string;
  payload?: any;
  token?: boolean;
}

const del = async ({ url, payload, token = false }: IParams) => {
  let headers: any;
  if (token) {
    const token = localStorage.getItem("token");
    headers = { Authorization: `Bearer ${token}` };
  }

  const { data } = await axiosInstance.delete(url, {
    headers,
    data: payload,
  });
  return data;
};

const useDelete = () => useMutation(del);

export default useDelete;
