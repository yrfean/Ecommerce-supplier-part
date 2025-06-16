import NormalTable from "../../../components/NormalTable";
import { useGetActiveOffers } from "../../../Query/offers queries/OffersApi";

const titles = [
  "Product ID",
  "Product Name",
  "Offer in per product",
  "Offer in bulk",
  "Discount Price",
  "Actual Price",
  "From date",
  "To date",
];


const columns = [
  { label: "Product ID", acr: "product_id" },
  { label: "Product Name", acr: "product_title" },
  { label: "Offer per product", acr: "product_offer_discount_percentage" },
  { label: "Offer per bulk", acr: "bulk_discount_percentage" },
  { label: "Discount Price", acr: "bulk_discount_percentage" },
  { label: "Actual Price", acr: "bulk_discount_percentage" },
  { label: "From Date", acr: "offer_from" },
  { label: "To Date", acr: "offer_to" },
];

const Active = () => {
  const { data: activeOffers } = useGetActiveOffers();

  return (
    <div className="w-full h-[445px] overflow-auto">
      <NormalTable
        columns={columns}
        values={activeOffers?.data.map((item) => ({
          ...item,
          offer_from: new Date(item.offer_from).toLocaleDateString("en-GB"),
          offer_to: new Date(item.offer_to).toLocaleDateString("en-GB"),
        }))}
      />
    </div>
  );
};

export default Active;
