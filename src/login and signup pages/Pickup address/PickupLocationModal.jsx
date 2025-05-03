import { useState } from "react";
import Searchbar from "../../components/Searchbar";
import { Locate, MapPinHouse, Plus } from "lucide-react";

const PickupLocationModal = ({
  setNewLocationModal,
  handleUseCurrentLocation,
}) => {
  return (
    <div>
      {/* top things */}
      <h1 className="text-xl font-semibold mt-3 mb-3">
        Select pickup location
      </h1>
      <div>
        <Searchbar placeholder={"Search your Location"} />
      </div>
      <div className="mt-5">
        {/* use my current loc */}
        <div
          onClick={() => handleUseCurrentLocation()}
          className="flex gap-3 px-3 items-center bg-[#F4F4F4] -mx-2 py-2 border-b border-gray-300 cursor-pointer"
        >
          <Locate className="text-[#47BA82] w-4 h-4" />
          <p>Use my current Location</p>
        </div>
        {/* add new addres */}
        <div
          onClick={() => setNewLocationModal(true)}
          className="flex gap-3 px-3 items-center bg-[#F4F4F4] -mx-2 py-2 cursor-pointer"
        >
          <Plus className="text-[#47BA82] w-4 h-4" />
          <p>Add new Address</p>
        </div>
      </div>
      {/* bottom things */}
      <div>
        <h1 className="mt-3 mb-2 text-xl font-semibold">Selected location</h1>

        <div className="flex items-center gap-2 mb-2">
          <MapPinHouse className="text-gray-500 w-4 h-4" />
          <p>Address</p>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      {/* next */}
      <div className="w-full flex justify-center">
        <button className="w-[70%] mt-9 py-1 cursor-pointer hover:bg-[#3DA372] bg-[#47BA82] rounded-lg text-white font-semibold">
          Next
        </button>
      </div>
    </div>
  );
};

export default PickupLocationModal;
