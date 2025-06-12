import { useMutation, useQuery } from "@tanstack/react-query";
import { fetcher } from "./fetcher";

export const useGetNearExpiryProduct = () => {
  return useQuery({
    queryKey: ["Near expiry product"],
    queryFn: () => fetcher({ url: "near-expiry-products-count/" }),
  });
};
export const useGetLowStockAlert = () => {
  return useQuery({
    queryKey: ["Low stock alert"],
    queryFn: () => fetcher({ url: "low-stock-alert/" }),
  });
};
