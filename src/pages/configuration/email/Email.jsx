const Email = () => {
  return (
    <div className="p-3 px-5">
      <h1 className="text-2xl font-semibold mb-4">Email configuration</h1>
      <div className="bg-[#F6FBF8] rounded-lg space-y-3 p-10 grid grid-cols-2 gap-[4%]">
        <div className="">
          <label htmlFor="fullId" className="mb-2 block">
            SMTP Email
          </label>
          <input
            placeholder="tata"
            type="text"
            className="rounded outline bg-white outline-gray-200 px-3 py-3 w-full"
          />
        </div>
        <div className="">
          <label htmlFor="fullId" className="mb-2 block">
            SMTP Password
          </label>
          <input
            placeholder="...."
            type="password"
            className="rounded outline bg-white outline-gray-200 px-3 py-3 w-full"
          />
        </div>
        <div className="">
          <label htmlFor="fullId" className="mb-2 block">
            SMTP Host
          </label>
          <input
            placeholder="eg:smpt.abcd.com"
            type="text"
            className="rounded outline bg-white outline-gray-200 px-3 py-3 w-full"
          />
        </div>
        <div className="">
          <label htmlFor="fullId" className="mb-2 block">
            SMTP Port
          </label>
          <input
            placeholder="eg:3545"
            type="text"
            className="rounded outline bg-white outline-gray-200 px-3 py-3 w-full"
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-end gap-3 mt-4">
        <div className="cursor-pointer transition-all duration-300  w-40 h-10 flex justify-center items-center bg-white text-[#47BA82] hover:text-white outline outline-[#47BA82] rounded  hover:bg-[#47BA82]/90">
          Clear
        </div>
        <div className="cursor-pointer transition-all duration-300  w-40 h-10 flex justify-center items-center bg-[#47BA82] rounded text-white hover:bg-[#47BA82]/90">
          Save
        </div>
      </div>
    </div>
  );
};

export default Email;
