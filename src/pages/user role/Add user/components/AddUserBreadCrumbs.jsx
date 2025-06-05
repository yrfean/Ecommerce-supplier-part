export const AddUserBreadCrumbs = ({ pageNumber }) => {
  return (
    <div
      style={{ backgroundColor: "#F6FBF8" }}
      className="rounded-2xl overflow-hidden w-full h-[55px] bg-[#F6FBF8] flex items-center justify-center"
    >
      {/* Step 1 */}
      <div className="w-[33.333333%] relative h-full font-semibold flex items-center justify-start bg-[#47BA82] px-10 text-white">
        {pageNumber === 1 ? (
          <div
            style={{
              position: "absolute",
              top: 0,
              right: "-1px",
              width: 0,
              height: 0,
              zIndex: 100,
              borderTop: "28px solid transparent",
              borderBottom: "28px solid transparent",
              borderRight: "45px solid #F6FBF8",
            }}
          />
        ) : (
          <>
            <div className="absolute h-full w-1 bg-white right-0" />{" "}
          </>
        )}
        <span className="px-2 text-sm aspect-square rounded-full bg-white text-[#47BA82] mt-[1px] mr-1">
          1
        </span>
        Basic Details
      </div>

      {/* Step 2 */}
      <div
        className={`w-[33.333333%] relative h-full flex items-center justify-start px-10 text-[#47BA82] ${
          pageNumber === 2 | pageNumber === 3
            ? "bg-[#47BA82] text-white"
            : "bg-[#F6FBF8]"
        }`}
      >
        {pageNumber === 2 ? (
          <div
            style={{
              position: "absolute",
              top: 0,
              right: "-1px",
              width: 0,
              height: 0,
              zIndex: 100,
              borderTop: "28px solid transparent",
              borderBottom: "27px solid transparent",
              borderRight: "45px solid #F6FBF8",
            }}
          />
        ) : (
          <>
            <div className="absolute h-full w-1 bg-white right-0" />{" "}
          </>
        )}
        <span
          className={`${
            pageNumber === 2 |pageNumber=== 3
              ? "px-2 text-sm aspect-square text-center rounded-full bg-white text-[#47BA82] mt-[1px] mr-2"
              : "mr-2"
          }`}
        >
          2
        </span>
        Modules
      </div>

      {/* Step 3 */}
      <div
        className={`w-[33.333333%] relative h-full flex items-center justify-start px-10 text-[#47BA82] ${
          pageNumber === 3 ? "bg-[#47BA82] text-white" : ""
        }`}
      >
        <span
          className={`${
            pageNumber === 3
              ? "px-2 text-sm aspect-square text-center rounded-full bg-white text-[#47BA82] mt-[1px] mr-2"
              : "mr-2"
          }`}
        >
          3
        </span>
        Sub Modules
      </div>
    </div>
  );
};
