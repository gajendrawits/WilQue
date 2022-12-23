import { useMutation } from "react-query";
import axiosInstance from "src/services/axiosInstance";

interface IParams {
  url: string;
  payload?: any;
  token?: boolean;
}

const post = async ({ url, payload, token }: IParams) => {
  let headers: any;
  if (token) {
    const authToken = localStorage.getItem("token");
    headers = { Authorization: `Bearer ${authToken}` };
  }
  const { data } = await axiosInstance.post(url, payload, { headers });
  return data;
};

const usePost = () => useMutation(post);

export default usePost;
