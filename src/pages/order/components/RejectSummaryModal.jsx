import { useState } from "react";

const RejectSummaryModal = ({
  showRejectSummary,
  setRejectSummery,
  setRejectOrderOf,
}) => {
  const [value, setValue] = useState("");
  return (
    <div className="w-[400px] h-[225px] bg-white rounded-2xl p-3 pt-6">
      <h1 className="text-xl font-semibold">Rejecting order</h1>

      <form action="">
        <div className="bg-[#F4F4F4] p-3 py-5 rounded-lg mt-5">
          <input
            required
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter your reason"
            className="px-3 py-2 w-full bg-white rounded outline outline-gray-200"
          />
        </div>
        <div className="w-full h-[70px] flex items-center justify-center">
          <button
            onClick={() => {
              setRejectOrderOf(showRejectSummary);
              setRejectSummery(value);
            }}
            className="outline-none rounded bg-gray-500 h-9 w-25 text-white cursor-pointer"
          >
            Done
          </button>
        </div>
      </form>
    </div>
  );
};

export default RejectSummaryModal;
