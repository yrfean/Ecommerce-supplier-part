import React from "react";
import NormalTable from "../../../components/NormalTable";

const titles = [
  "Product ID",
  "Product Name",
  "Category",
  "Offer in per Product",
  "Offer in bulk",
];

const offerHistoryDetails = [
  ["ID 3456", "Demo Name", "Category/SubCategory", "10%", "20%"],
  ["ID 3457", "Demo Name 2", "Category2/SubCategory2", "15%", "25%"],
  ["ID 3458", "Demo Name 3", "Category3/SubCategory3", "12%", "22%"],
  ["ID 3459", "Demo Name 4", "Category4/SubCategory4", "18%", "28%"],
  ["ID 3460", "Demo Name 5", "Category5/SubCategory5", "20%", "30%"],
];

const History = () => {
  return (
    <div className="w-full h-[445px] overflow-auto">
      <NormalTable titles={titles} values={offerHistoryDetails} />
    </div>
  );
};

export default History;
