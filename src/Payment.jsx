import React from "react";
import AddCardIcon from "@mui/icons-material/AddCard";
import SouthWestIcon from "@mui/icons-material/SouthWest";
import NorthEastIcon from "@mui/icons-material/NorthEast";

const contents = [
  {
    title: "15 students enroled",
    icon: <NorthEastIcon fontSize="small" />,
    color: "bg-green-500",
  },
  {
    title: "2 spots remaining",
    icon: <SouthWestIcon fontSize="small" />,
    color: "bg-yellow-500",
  },
];

const Payment = () => {
  return (
    <div className="w-[387px] h-[300px] py-4 px-[16px] bg-[#40499D]  rounded-[12px] text-white">
      <div className="flex items-center justify-between mb-8">
        <div className="">
          <p className="text-[16px] font-medium">Total Amount Paid</p>
          <h1 className="text-[34px] font-bold">$2,200</h1>
        </div>
        <div className="w-[46px] h-[46px] rounded-full bg-gradient-to-r from-yellow-100 to-yellow-500 py-2 px-2 flex items-center justify-center">
          <AddCardIcon fontSize="medium" />
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-6">
        {contents.map((content) => (
          <div className="flex items-center gap-2">
            <div
              className={`flex items-center justify-center w-[32px] h-[32px] rounded-full ${content.color}`}
            >
              {content.icon}
            </div>
            <p className="text-[16px] font-medium font-sans">{content.title}</p>
          </div>
        ))}
      </div>

      <button className="w-[355px] py-[16px] bg-white text-[#40499D] font-[14px] font-medium rounded-[10px]">
        Add Payment
      </button>
    </div>
  );
};

export default Payment;
