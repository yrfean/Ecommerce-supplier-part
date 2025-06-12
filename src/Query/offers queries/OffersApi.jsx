import { useMutation, useQuery } from "@tanstack/react-query";
import { fetcher } from "../fetcher";

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

export const useGetActiveOffers = () => {
  return useQuery({
    queryKey: ["active offers"],
    queryFn: () => fetcher({ url: "product-offers_active/" }),
    refetchOnWindowFocus: false,
  });
};
export const useGetHistoryOffers = () => {
  return useQuery({
    queryKey: ["history offers"],
    queryFn: () => fetcher({ url: "product-offers-history/" }),
    refetchOnWindowFocus: false,
  });
};
