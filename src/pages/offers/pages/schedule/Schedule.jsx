import { useEffect, useRef, useState } from "react";
import SeasonalAndSmartInputs from "./comps/SeasonalAndSmartInputs";
import BuyMoreGetMore from "./comps/BuyMoreGetMore";
import DropdownInput from "../../../product/products list/pages/add product/component/DropdownInput";


const offerTypes = [
  { name: "Smart Offer", id: "smart" },
  { name: "Seasonal offer", id: "seasonal" },
  { name: "Buy more get more", id: "" },
];

const Schedule = () => {
  const [offerType, setOfferType] = useState("seasonal");

  // useEffect(() => {
  //   if (allBatches) console.log("product ids:", allBatches);
  // }, [allBatches]);
  return (
    <>
      <div className="bg-[#F8F8F8] p-3 h-[441px] w-full rounded-lg scroll-auto">
        <div className="mb-2 w-[45%] ">
          <DropdownInput
            options={offerTypes.map((offer) => offer.name)}
            setValue={(value) => {
              if (value === "Smart Offer") {
                setOfferType("smart");
              } else if (value === "Seasonal offer") {
                setOfferType("seasonal");
              } else {
                setOfferType("buyMoreGetMore");
              }
            }}
            label={"Offer Type"}
            placeholder={"Select Offer Type"}
          />
        </div>
        <div>
          {offerType === "smart" || offerType === "seasonal" ? (
            <SeasonalAndSmartInputs offerType={offerType} />
          ) : (
            <BuyMoreGetMore />
          )}
        </div>
      </div>
    </>
  );
};

export default Schedule;
