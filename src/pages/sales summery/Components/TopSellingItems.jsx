const TopSellingItems = () => {
  return (
    <div className="p-3">
      <h1 className="text-lg font-semibold mb-3">Top Selling Items</h1>

      {/* progress bar */}
      <div className="rounded-full flex overflow-hidden bg-white h-[30px]">
        <div className="h-full bg-[#47BA82] " style={{ width: "30%" }} />
        <div className="h-full bg-[#6AD0A4] " style={{ width: "10%" }} />
        <div className="h-full bg-[#B4E8D2] " style={{ width: "20%" }} />
        <div className="h-full bg-[#DCF2E8] " style={{ width: "30%" }} />
        <div className="h-full bg-white " style={{ width: "10%" }} />
      </div>

      {/* items and colors */}
      <div className="mt-3 w-full px-4 flex flex-col gap-1">
        <div className="w-full flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <div className="w-[40px] h-[20px] rounded-full bg-[#47BA82] shadow" />
            <p className="text-lg ">Item 1</p>
          </div>
          <div className="text-xl">0</div>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <div className="w-[40px] h-[20px] rounded-full bg-[#6AD0A4] shadow" />
            <p className="text-lg ">Item 2</p>
          </div>
          <div className="text-xl">0</div>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <div className="w-[40px] h-[20px] rounded-full bg-[#B4E8D2] shadow" />
            <p className="text-lg ">Item 3</p>
          </div>
          <div className="text-xl">0</div>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <div className="w-[40px] h-[20px] rounded-full bg-[#DCF2E8] shadow" />
            <p className="text-lg ">Item 4</p>
          </div>
          <div className="text-xl">0</div>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <div className="w-[40px] h-[20px] rounded-full bg-white shadow" />
            <p className="text-lg ">Item 5</p>
          </div>
          <div className="text-xl">0</div>
        </div>
      </div>
    </div>
  );
};

export default TopSellingItems;
