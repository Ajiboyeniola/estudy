import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import GroupsIcon from "@mui/icons-material/Groups";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";

const cards = [
  {
    name: "All Students Enroled",
    figure: "170",
    color: "bg-purple-100",
  },
  {
    name: "Verified Students",
    figure: "120",
    color: "bg-green-100",
  },
  {
    name: "Unverified Students",
    figure: "50",
    color: "bg-red-100",
  },
  {
    name: "Students Studying",
    figure: "48",
    color: "bg-violet-100",
  },
];

const icons = [
  <GroupsIcon fontSize={`medium`} className="text-[#40499D]" />,
  <HowToRegIcon fontSize={`medium`} className="text-[#36907E]" />,
  <NoAccountsIcon fontSize={`medium`} className="text-[#E43334]" />,
  <ImportContactsIcon fontSize={`medium`} className="text-[#4A3AFF]" />,
];

const Cards = () => {
  return (
    <div className="flex gap-[25px]">
      {cards.map((card, icon) => (
        <div className="w-[178px] py-4 px-[16px] bg-white rounded-[12px] border border-solid border-[#e9ebfe80]">
          <div
            className={`flex items-center justify-center w-[40px] h-[40px] ${card.color} rounded-[20px] mb-2`}
          >
            {icons[icon]}
          </div>
          <p className="font-regular text-[#919eab] text-sm">{card.name}</p>

          <h1 className="font-bold text-[#45464e] text-[24px]">
            {card.figure}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Cards;
