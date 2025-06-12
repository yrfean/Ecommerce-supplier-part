import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetcher } from "./../fetcher";

export const useGetOrderList = () => {
  return useQuery({
    queryKey: ["order list"],
    queryFn: () =>
      fetcher({ url: "orders_list/", params: { activity_code: 1010 } }),
    refetchOnWindowFocus: false,
  });
};

export const useGetOrderStatusCount = () => {
  return useQuery({
    queryKey: ["order status count"],
    queryFn: () => fetcher({ url: "orders/status-count/" }),
    refetchOnWindowFocus: false,
  });
};

export const usePostOrderAccept = () => {
  return useMutation({
    mutationFn: (orderId) =>
      fetcher({
        method: "put",
        url: `update-order-status/${orderId}/`,
        data: {
          status: "accepted",
        },
      }),
  });
};

export const usePostOrderReject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) =>
      fetcher({
        method: "put",
        url: `orders/${data.id}/reject/`,
        data: {
          reject_reason: data.reason,
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["order list"]);
      queryClient.invalidateQueries(["order status count"]);
    },
  });
};
