import { useQuery } from "@tanstack/react-query";
import { fetcher } from "./../fetcher";

export const useGetBusinnesInsights = () => {
  return useQuery({
    queryKey: ["business insight"],
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
