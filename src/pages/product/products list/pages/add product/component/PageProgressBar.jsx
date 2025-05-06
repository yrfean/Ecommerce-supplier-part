const PageProgressBar = ({ pageNumber = 2 }) => {
  return (
    <div className="px-4 flex gap-3 items-center">
      {/* round */}
      <div
        className={`w-4 h-4  rounded-full border-2 border-white bg-[#47BA82] drop-shadow-[0_0_8px_rgba(71,186,130,0.8)]`}
      />
      {/* line */}
      <div
        className={`w-[250px] h-1 border-b-3 border-dotted  my-6 animate-pulse ${
          pageNumber > 1 ? "border-[#47BA82]" : "border-gray-300"
        }`}
      />
      {/* round */}
      <div
        className={`w-4 h-4 rounded-full border-2 border-white ${
          pageNumber >= 2
            ? "bg-[#47BA82] drop-shadow-[0_0_8px_rgba(71,186,130,0.8)]"
            : "drop-shadow-[0_0_8px_rgba(160,165,175,0.8)] bg-gray-300"
        }`}
      />
      {/* line */}
      <div
        className={`w-[250px] h-1 border-b-3 border-dotted  my-6 animate-pulse ${
          pageNumber > 2 ? "border-[#47BA82]" : "border-gray-300"
        }`}
      />
      {/* round */}
      <div
        className={`w-4 h-4  rounded-full border-2 border-white ${
          pageNumber >= 3
            ? "bg-[#47BA82] drop-shadow-[0_0_8px_rgba(71,186,130,0.8)]"
            : "drop-shadow-[0_0_8px_rgba(160,165,175,0.8)] bg-gray-300"
        }`}
      />
      {/* line */}
      <div
        className={`w-[250px] h-1 border-b-3 border-dotted  my-6 animate-pulse ${
          pageNumber > 3 ? "border-[#47BA82]" : "border-gray-300"
        }`}
      />
      {/* round */}
      <div
        className={`w-4 h-4  rounded-full border-2 border-white ${
          pageNumber >= 4
            ? "bg-[#47BA82] drop-shadow-[0_0_8px_rgba(71,186,130,0.8)]"
            : "drop-shadow-[0_0_8px_rgba(160,165,175,0.8)] bg-gray-300"
        }`}
      />
    </div>
  );
};

export default PageProgressBar;
