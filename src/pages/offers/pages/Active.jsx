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

const productOfferDetails = [
  [
    "ID 12345",
    "Demo name",
    "10%",
    "20%",
    "00.00",
    "20.00",
    "12/44/55",
    "12/3/45",
  ],
  [
    "ID 12345",
    "Demo name",
    "10%",
    "20%",
    "00.00",
    "20.00",
    "12/44/55",
    "12/3/45",
  ],
  [
    "ID 12345",
    "Demo name",
    "10%",
    "20%",
    "00.00",
    "20.00",
    "12/44/55",
    "12/3/45",
  ],
  [
    "ID 12345",
    "Demo name",
    "10%",
    "20%",
    "00.00",
    "20.00",
    "12/44/55",
    "12/3/45",
  ],
  [
    "ID 12345",
    "Demo name",
    "10%",
    "20%",
    "00.00",
    "20.00",
    "12/44/55",
    "12/3/45",
  ],
  [
    "ID 12345",
    "Demo name",
    "10%",
    "20%",
    "00.00",
    "20.00",
    "12/44/55",
    "12/3/45",
  ],
  [
    "ID 12345",
    "Demo name",
    "10%",
    "20%",
    "00.00",
    "20.00",
    "12/44/55",
    "12/3/45",
  ],
  [
    "ID 12345",
    "Demo name",
    "10%",
    "20%",
    "00.00",
    "20.00",
    "12/44/55",
    "12/3/45",
  ],
  [
    "ID 12345",
    "Demo name",
    "10%",
    "20%",
    "00.00",
    "20.00",
    "12/44/55",
    "12/3/45",
  ],
];

const columns = [
  { label: "Product ID", accessor: "product_id" },
  { label: "Product Name", accessor: "product_title" },
  { label: "Offer per product", accessor: "product_offer_discount_percentage" },
  { label: "Offer per bulk", accessor: "bulk_discount_percentage" },
  { label: "Discount Price", accessor: "bulk_discount_percentage" },
];

const Active = () => {
  const { data: activeOffers } = useGetActiveOffers();
  return (
    <div className="w-full h-[445px] overflow-auto">
      <NormalTable titles={titles} values={productOfferDetails} />
    </div>
  );
};

export default Active;
