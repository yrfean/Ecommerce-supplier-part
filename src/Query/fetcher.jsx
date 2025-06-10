import { api } from "../axios/axios";
export const fetcher = async ({
  method = "get",
  url,
  data = {},
  params = {},
}) => {
  const response = await api({
    method,
    url,
    data,
    params,
  });
  return response.data;
};
