import NormalTable from "../../../components/NormalTable";

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

const Active = () => {
  return (
    <div className="w-full h-[445px] overflow-auto">
      <NormalTable titles={titles} values={productOfferDetails} />
    </div>
  );
};

export default Active;
