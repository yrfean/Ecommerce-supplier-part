import React, { useEffect, useRef, useState } from "react";
import NormalTable from "./../../../components/NormalTable";
import { motion, useMotionValue, useTransform,animate  } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Wallet = () => {
  const containerRef = useRef(null);
  const chevronWidth = 40;
  const paddingLeft = 16;

  const [isRedeemed, setIsRedeemed] = useState(false);
  const x = useMotionValue(paddingLeft);

  const greenBarWidth = useTransform(
    x,
    (latestX) => latestX + chevronWidth / 2
  );

  const handleDragEnd = () => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const dragX = x.get();

    if (dragX >= containerWidth - chevronWidth - 32) {
      setIsRedeemed(true);
      animate(x, containerWidth - chevronWidth - paddingLeft);
    } else {
      setIsRedeemed(false);
      animate(x, paddingLeft);
    }
  };
  return (
    <div className="p-3">
      <h1 className="text-2xl font-medium mb-1">Wallet</h1>
      <div className="flex px-10 pr-30 justify-between rounded-lg items-center text-white bg-[#47BA82] w-full h-16">
        <h2 className="font-semibold text-3xl">Callsouq Wallet</h2>
        <p className="text-xl">
          Total Wallet Point :{" "}
          <span className="font-semibold text-2xl">$19000</span>
        </p>
      </div>

      {/*  */}
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-[#F4F4F4] rounded-lg flex flex-col mt-2 justify-center items-center h-18">
          <p className="text-gray-400 text-xl">Radeemed</p>
          <p className="text-xl font-medium">$896.00</p>
        </div>
        <div className="bg-[#F4F4F4] rounded-lg flex flex-col mt-2 justify-center items-center h-18">
          <p className="text-gray-400 text-xl">On the way</p>
          <p className="text-xl font-medium">$896.00</p>
        </div>
        <div className="bg-[#F4F4F4] rounded-lg flex flex-col mt-2 justify-center items-center h-18">
          <p className="text-gray-400 text-xl">Radeemable</p>
          <p className="text-xl font-medium">$896.00</p>
        </div>
      </div>

      {/*Redeem Swiping options  */}
      <div
        ref={containerRef}
        style={{
          position: "relative",
          width: 940,
          height: 72,
          borderRadius: 12,
          backgroundColor: "#F4F4F4",
          userSelect: "none",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin:"5px 0px 0px 0px",
        }}
      >
        {/* Green progress bar */}
        <motion.div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            borderRadius: 12,
            backgroundColor: "#47BA82",
            width: greenBarWidth,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        {/* Draggable chevron */}
        <motion.div
          drag="x"
          dragConstraints={containerRef}
          dragElastic={0}
          dragMomentum={false}
          style={{
            x,
            position: "absolute",
            left: 0,
            top: "50%",
            translateY: "-50%",
            width: chevronWidth,
            height: chevronWidth,
            backgroundColor: "#47BA827D",
            borderRadius: 12,
            cursor: isRedeemed ? "default" : "grab",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            userSelect: "none",
            pointerEvents: isRedeemed ? "none" : "auto",
          }}
          onDragEnd={handleDragEnd}
          initial={{ x: paddingLeft }}
        >
          <ChevronRight size={24} />
        </motion.div>

        {/* Text */}
        <p
          style={{
            position: "relative",
            zIndex: 2,
            fontWeight: 600,
            fontSize: 20,
            userSelect: "none",
            pointerEvents: "none",
            color: isRedeemed ? "white" : "#333",
          }}
        >
          {isRedeemed ? "Redeemed!" : "Swipe to Redeem"}
        </p>
      </div>

      <h1 className="font-medium text-xl mt-3">Wallet History</h1>
      <div className="h-[260px] overflow-auto mt-1">
        <NormalTable
          titles={[["Order ID"], ["Date"], ["Amount"], ["Status"]]}
          values={[
            [["#ID67829"], ["10/12/2023"], ["$895"], ["Credited"]],
            [["#ID67829"], ["10/12/2023"], ["$895"], ["Credited"]],
            [["#ID67829"], ["10/12/2023"], ["$895"], ["Credited"]],
            [["#ID67829"], ["10/12/2023"], ["$895"], ["Credited"]],
            [["#ID67829"], ["10/12/2023"], ["$895"], ["Credited"]],
            [["#ID67829"], ["10/12/2023"], ["$895"], ["Credited"]],
            [["#ID67829"], ["10/12/2023"], ["$895"], ["Credited"]],
          ]}
        />
      </div>
    </div>
  );
};

export default Wallet;
