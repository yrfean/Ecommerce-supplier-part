import { useMutation, useQuery } from "@tanstack/react-query";
import { fetcher } from "./fetcher";

export const usePostEventOffers = () => {
  return useMutation({
    mutationFn: async (data) =>
      fetcher({
        method: "Post",
        data: data,
        url: "products/offers/assign/?activity_code=1017",
      }),
  });
};
export const usePostOffers = () => {
  return useMutation({
    mutationFn: async (data) =>
      fetcher({
        method: "Post",
        data: data,
        url: "bogo-offers/?activity_code=1017",
      }),
    refetchOnWindowFocus: false,
  });
};

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
