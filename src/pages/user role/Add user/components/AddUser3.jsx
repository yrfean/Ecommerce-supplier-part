import { useState } from "react";
import Swal from "sweetalert2";

const names = ["Batch Offer", "Edit Offer", "Offer Add", "Edit Offerr"];

const AddUser3 = () => {
  const [showOffers, setShowOffers] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [showOrderManagement, setShowOrderManagement] = useState(false);
  const [choseModules, setChoseModules] = useState([]);

  return (
    <>
      <div className="bg-[#F6FBF8] rounded-lg w-full h-[395px] p-5 overflow-y-auto custom-scrollbar">
        <h1 className="font-semibold text-xl">User Modules</h1>

        <p className="text-gray-500 mb-8">Choose user modules</p>

        {/* offers */}
        <div>
          <div className="flex gap-2 items-center">
            <div
              onClick={() => setShowOffers((prev) => !prev)}
              className="p-[2px] cursor-pointer flex items-center justify-center shadow w-5 h-5 bg-white rounded-full"
            >
              <div
                className={`rounded-full w-full transition-all duration-300 h-full ${
                  showOffers ? "bg-[#47BA82]" : "bg-[#C0C0C0]"
                }`}
              />
            </div>
            <label className="text-lg">Offers</label>
          </div>
          {showOffers ? (
            <div className="w-[50%] pl-8 grid grid-cols-3 gap-3 mt-3">
              {names.map((name) => (
                <div
                  key={name}
                  onClick={() => {
                    setChoseModules((prev) => {
                      return prev.includes(name)
                        ? prev.filter((moduleName) => moduleName !== name)
                        : [...prev, name];
                    });
                  }}
                  className={`outline-2 cursor-pointer p-3 px-2 outline-[#47BA82] transition-all duration-300  rounded-lg flex flex-col items-center justify-center gap-1 h-10 w-30 ${
                    choseModules.includes(name)
                      ? "bg-[#47BA82] text-white"
                      : "bg-white text-[#47BA82]"
                  }`}
                >
                  <p className=" text- text-wrap text-center">{name}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {/* Product */}
        <div className="mt-4">
          <div className="flex gap-2 items-center">
            <div
              onClick={() => setShowProduct((prev) => !prev)}
              className="p-[2px] cursor-pointer flex items-center justify-center shadow w-5 h-5 bg-white rounded-full"
            >
              <div
                className={`rounded-full w-full transition-all duration-300 h-full ${
                  showProduct ? "bg-[#47BA82]" : "bg-[#C0C0C0]"
                }`}
              />
            </div>
            <label className="text-lg">Product</label>
          </div>
          {showProduct ? (
            <div className="w-[50%] pl-8 grid grid-cols-3 gap-3 mt-3">
              {names.map((name) => (
                <div
                  key={name}
                  onClick={() => {
                    setChoseModules((prev) => {
                      return prev.includes(name)
                        ? prev.filter((moduleName) => moduleName !== name)
                        : [...prev, name];
                    });
                  }}
                  className={`outline-2 cursor-pointer p-3 px-2 outline-[#47BA82] transition-all duration-300  rounded-lg flex flex-col items-center justify-center gap-1 h-10 w-30 ${
                    choseModules.includes(name)
                      ? "bg-[#47BA82] text-white"
                      : "bg-white text-[#47BA82]"
                  }`}
                >
                  <p className=" text- text-wrap text-center">{name}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
        {/* Order Management */}
        <div className="mt-4">
          <div className="flex gap-2 items-center">
            <div
              onClick={() => setShowOrderManagement((prev) => !prev)}
              className="p-[2px] cursor-pointer flex items-center justify-center shadow w-5 h-5 bg-white rounded-full"
            >
              <div
                className={`rounded-full w-full transition-all duration-300 h-full ${
                  showOrderManagement ? "bg-[#47BA82]" : "bg-[#C0C0C0]"
                }`}
              />
            </div>
            <label className="text-lg">Order Management</label>
          </div>
          {showOrderManagement ? (
            <div className="w-[50%] pl-8 grid grid-cols-3 gap-3 mt-3">
              {names.map((name) => (
                <div
                  key={name}
                  onClick={() => {
                    setChoseModules((prev) => {
                      return prev.includes(name)
                        ? prev.filter((moduleName) => moduleName !== name)
                        : [...prev, name];
                    });
                  }}
                  className={`outline-2 cursor-pointer p-3 px-2 outline-[#47BA82] transition-all duration-300  rounded-lg flex flex-col items-center justify-center gap-1 h-10 w-30 ${
                    choseModules.includes(name)
                      ? "bg-[#47BA82] text-white"
                      : "bg-white text-[#47BA82]"
                  }`}
                >
                  <p className=" text- text-wrap text-center">{name}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex w-full h-[60px] items-end justify-end gap-3 pr-10">
        <button
          onClick={() => setPageNumber(2)}
          type="button"
          className="w-[130px] transition-all duration-300 shadow font-bold tracking-wider text-white rounded-lg h-[40px] cursor-pointer text-center bg-[#47BA82] hover:bg-[#3DA372]"
        >
          Back
        </button>
        <button
          onClick={() => {
            Swal.fire({
              title: "User Created Succesfully!",
              icon: "success",
              confirmButtonText: "Done",
              confirmButtonColor: "#47BA82",
            }).then((result) => {
              if (result.isConfirmed) {
                location.href = "/user-role";
              }
            });
          }}
          type="button"
          className="w-[130px] transition-all duration-300 shadow font-bold tracking-wider text-white rounded-lg h-[40px] cursor-pointer text-center bg-[#47BA82] hover:bg-[#3DA372]"
        >
          Done
        </button>
      </div>
    </>
  );
};

export default AddUser3;
