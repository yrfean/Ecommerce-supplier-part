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
    refetchOnWindowFocus: false,
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
    refetchOnWindowFocus: false,
  });
};

export const useGetCategory = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: () => fetcher("/categories/"),
    refetchOnWindowFocus: false,
  });
};

export const useGetBusinnesInsights = () => {
  return useQuery({
    queryKey: ["business insights"],
    queryFn: () => fetcher({ url: "business-insights/" }),
    refetchOnWindowFocus: false,
  });
};

export const useGetOrderPickup = () => {
  return useQuery({
    queryKey: ["today-shipping-orders"],
    queryFn: () => fetcher({ url: "/todays-shipping-orders/" }),
    refetchOnWindowFocus: false,
  });
};

export const useGetBoxDetails = () => {
  return useQuery({
    queryKey: ["box details"],
    queryFn: () => fetcher({ url: "/welcome_suppliercounts/" }),
    refetchOnWindowFocus: false,
  });
};

export const useGetProductIds = () => {
  return useQuery({
    queryKey: ["product ids"],
    queryFn: () => fetcher({ url: "/products/titles/ids/" }),
    refetchOnWindowFocus: false,
  });
};
export const useGetAllBatches = (productId) => {
  return useQuery({
    queryKey: ["all batches", productId],
    queryFn: () => fetcher({ url: `/product/${productId}/all-batches/` }),
    enabled: !!productId,
    refetchOnWindowFocus: false,
  });
};
export const useGetStockDetails = (batchId) => {
  return useQuery({
    queryKey: ["stock details", batchId],
    queryFn: () => fetcher({ url: `/stock-details/batch/${batchId}/` }),
    enabled: !!batchId,
    refetchOnWindowFocus: false,
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
    refetchOnWindowFocus: false,
  });
};

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => fetcher({ url: `/products-create/?activity_code=1001` }),
    refetchOnWindowFocus: false,
  });
};
export const useGetProduct = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: ({ queryKey }) => {
      const [, id] = queryKey;
      return fetcher({ url: `/products-create/${id}/?activity_code=1001` });
    },
    enabled: !!id,
    refetchOnWindowFocus: false,
  });
};

export const useGetProductsByCategory = (supplierId) => {
  return useQuery({
    queryKey: ["products by category", supplierId],
    queryFn: ({ queryKey }) => {
      const [, id] = queryKey;
      return fetcher({
        url: `suppliers/102/categories/?activity_code=1001`,
        //change 102 into actaul supplier id after login and sugnup api integration
      });
    },
    enabled: !!id,
    refetchOnWindowFocus: false,
  });
};

export const useGetCurrentBatches = (id) => {
  return useQuery({
    queryKey: ["current batches", id],
    queryFn: ({ queryKey }) => {
      const [, id] = queryKey;
      return fetcher({
        url: `products/${id}/batches/current/?activity_code=1005`,
      });
    },
    enabled: !!id,
    refetchOnWindowFocus: false,
  });
};
export const useGetBatchHistory = (id) => {
  return useQuery({
    queryKey: ["batch history", id],
    queryFn: ({ queryKey }) => {
      const [, id] = queryKey;
      return fetcher({
        url: `products/${id}/batches/history/?activity_code=1005`,
      });
    },
    enabled: !!id,
    refetchOnWindowFocus: false,
  });
};
