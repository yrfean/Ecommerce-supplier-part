import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "../axios/axios";
import { fetcher } from "./fetcher";

export const useAddProduct = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post("/products-create/", data, {
        params: { activity_code: 1000 },
      });
      return response.data;
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err) => {
      console.log(err);
    },
  });
};

export const useGetGST = () => {
  return useQuery({
    queryKey: ["gst"],
    queryFn: () => fetcher({ url: "" / gst / "" }),
  });
};

export const useGetUnits = (catId) => {
  return useQuery({
    queryKey: ["units", catId],
    queryFn: async () => {
      const response = await api.get(`/units/category/${catId}/`);
      return response.data;
    },
    enabled: !!catId,
  });
};

export const useGetCategory = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: () => fetcher("/categories/"),
  });
};

export const useGetBusinnesInsights = () => {
  return useQuery({
    queryKey: ["business insights"],
    queryFn: () => fetcher({ url: "business-insights/" }),
  });
};

export const useGetOrderPickup = () => {
  return useQuery({
    queryKey: ["today-shipping-orders"],
    queryFn: () => fetcher({ url: "/todays-shipping-orders/" }),
  });
};

export const useGetBoxDetails = () => {
  return useQuery({
    queryKey: ["box details"],
    queryFn: () => fetcher({ url: "/welcome_suppliercounts/" }),
  });
};

export const useGetProductIds = () => {
  return useQuery({
    queryKey: ["product ids"],
    queryFn: () => fetcher({ url: "/products/titles/ids/" }),
  });
};
export const useGetAllBatches = (productId) => {
  return useQuery({
    queryKey: ["all batches", productId],
    queryFn: () => fetcher({ url: `/product/${productId}/all-batches/` }),
    enabled: !!productId,
  });
};
export const useGetStockDetails = (batchId) => {
  return useQuery({
    queryKey: ["stock details", batchId],
    queryFn: () => fetcher({ url: `/stock-details/batch/${batchId}/` }),
    enabled: !!batchId,
  });
};

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
  });
};
