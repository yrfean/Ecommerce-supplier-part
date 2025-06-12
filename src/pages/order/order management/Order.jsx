import React, { useEffect, useState } from "react";
import FilterOrSorting from "../../../components/FilterOrSorting";
import { ArrowDownZA, Funnel, Search } from "lucide-react";
import OrdersTable from "../components/OrdersTable";
import {
  useGetOrderList,
  useGetOrderStatusCount,
  usePostOrderAccept,
  usePostOrderReject,
} from "../../../Query/order queries/OrderApi";
import RejectSummaryModal from "../components/RejectSummaryModal";

const boxorderStatus = [
  {
    title: "New Order",
    quantity: 9,
    bg: "bg-[#F3FFFA]",
    noBg: "bg-[#47BA82]",
  },
  { title: "Shipped", quantity: 0, bg: "bg-[#FFFFEE]", noBg: "bg-[#FFDE6A]" },
  {
    title: "Delivered",
    quantity: 0,
    bg: "bg-[#EEF4FF]",
    noBg: "bg-[#88A4FF]",
  },
  {
    title: "Cancelled",
    quantity: 0,
    bg: "bg-[#FFF3F8]",
    noBg: "bg-[#E79EBB]",
  },
];

const columns = [
  { label: "Order ID", acr: "order_number" },
  { label: "Product Name", acr: "product_title" },
  { label: "Category", acr: "product_category" },
  { label: "Dispatch Date", acr: "customer_expected_dispatch_date" },
  { label: "Quantity", acr: "quantity" },
  { label: "Exp.Dt", acr: "order_date" },
];

const Order = () => {
  const { data: orderList } = useGetOrderList();
  const { data: orderStatuses } = useGetOrderStatusCount();
  const acceptOrder = usePostOrderAccept();
  const rejectOrder = usePostOrderReject();
  const [orderStatus, setOrderStatus] = useState(boxorderStatus);
  const [showRejectSummary, setShowRejectSummary] = useState(false);
  const [rejectSummery, setRejectSummery] = useState(null);
  const [acceptOrderOf, setAcceptOrderOf] = useState(null);
  const [rejectOrderOf, setRejectOrderOf] = useState(null);

  useEffect(() => {
    if (!orderStatuses?.data) return;

    const updatedStatus = boxorderStatus.map((order) => {
      let updatedQuantity = 0;

      switch (order.title) {
        case "New Order":
          updatedQuantity = orderStatuses.data.new;
          break;
        case "Delivered":
          updatedQuantity = orderStatuses.data.delivered;
          break;
        case "Shipped":
          updatedQuantity = orderStatuses.data.shipped;
          break;
        case "Cancelled":
          updatedQuantity = orderStatuses.data.cancelled;
          break;
        default:
          updatedQuantity = order.quantity;
      }

      return { ...order, quantity: updatedQuantity ?? 0 };
    });

    setOrderStatus(updatedStatus);
  }, [orderStatuses]);

  useEffect(() => {
    if (acceptOrderOf) acceptOrder.mutate(acceptOrderOf);
  }, [acceptOrderOf]);

  useEffect(() => {
    if ((rejectOrderOf, rejectSummery)) {
      rejectOrder.mutate({ id: rejectOrderOf, reason: rejectSummery });
      setShowRejectSummary(false);
    }
  }, [rejectSummery]);

  return (
    <div className="p-3">
      <div
        onClick={() => setShowRejectSummary(null)}
        className={`fixed z-100 translation-all ease-in-out duration-500 bg-black/30 inset-0 ${
          showRejectSummary ? "" : "hidden"
        }`}
      ></div>
      {/* reject summary modal */}
      <div
        className={`fixed z-1000 transition-all duration-300 ${
          showRejectSummary
            ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            : "top-0 left-1/2 -translate-x-1/2 -translate-y-full"
        }`}
      >
        <RejectSummaryModal
          showRejectSummary={showRejectSummary}
          setRejectSummery={setRejectSummery}
          setRejectOrderOf={setRejectOrderOf}
        />
      </div>

      <h1 className="text-2xl font-bold my-1 mb-5">Order Managemment</h1>

      {/* boxes */}
      <div className="w-full grid gap-3 grid-cols-4 mb-3">
        {orderStatus?.map((order, index) => (
          <div
            key={index}
            className={`${order.bg} rounded-lg h-[90px] flex items-center justify-center gap-5`}
          >
            <p className="font-semibold text-xl">{order.title} </p>
            <div
              className={`${order.noBg} rounded-full flex items-center justify-center aspect-square min-w-11 p-2 text-center`}
            >
              <p className="text-xl text-white font-semibold">
                {order.quantity}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* table*/}
      <div className="w-full mt-6">
        <OrdersTable
          data={orderList?.data.map((order) => ({
            ...order,
            order_date: new Date(order.order_date).toLocaleDateString(),
          }))}
          columns={columns}
          getIdOfOrderForAccept={setAcceptOrderOf}
          getIdOfOrderForReject={setShowRejectSummary}
          trueOrFalse={true}
        />
      </div>
    </div>
  );
};

export default Order;
