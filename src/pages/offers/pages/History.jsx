import NormalTable from "../../../components/NormalTable";
import { useGetHistoryOffers } from "../../../Query/offers queries/OffersApi";

const columns = [
  { label: "Product ID", acr: "product_id" },
  { label: "Product Name", acr: "product_title" },
  { label: "Category", acr: "product_category_name" },
  { label: "Offer per product", acr: "product_offer_discount_percentage" },
  { label: "Offer per bulk", acr: "bulk_discount_percentage" },
];

const History = () => {
  const { data: historyOffers } = useGetHistoryOffers();

  return (
    <div className="w-full h-[445px] overflow-auto">
      <NormalTable columns={columns} values={historyOffers?.data} />
    </div>
  );
};

export default History;
