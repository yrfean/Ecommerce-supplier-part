import { useMutation, useQuery } from "@tanstack/react-query";
import { fetcher } from "../fetcher";

export const useAddProduct = () => {
  return useMutation({
    mutationFn: (data) =>
      fetcher({ params: { activity_code: 1000 }, method: "post", data: data }),
  });
};

export const useGetGST = () => {
  return useQuery({
    queryKey: ["gst"],
    queryFn: () => fetcher({ url: "/gst" }),
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

export const useGetProductCategoriesForDropDown = (supplierId) => {
  return useQuery({
    queryKey: ["products by category", supplierId],
    queryFn: ({ queryKey }) => {
      const [, supplierId] = queryKey;
      return fetcher({
        url: `suppliers/${supplierId}/categories`,
        //change 102 into actaul supplier id after login and sugnup api integration
      });
    },
    enabled: !!supplierId,
    refetchOnWindowFocus: false,
  });
};

export const useGetProductsByCategory = (id) => {
  return useQuery({
    queryKey: ["products by category", id],
    queryFn: ({ queryKey }) => {
      const [, id] = queryKey;
      return fetcher({
        url: `/products-create/?activity_code=1001&category=${id}`,
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