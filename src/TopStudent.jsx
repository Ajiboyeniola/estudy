import React from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Path from "./Path";

const students = [
  {
    position: "1st",
    username: "Lateef Bankole",
    email: "lateefbankole@gmail.com",
    percentage: "92%",
    color: "text-green-500",
  },
  {
    position: "2nd",
    username: "Lateef Bankole",
    email: "gbengadavid@gmail.com",
    percentage: "90%",
    color: "text-blue-500",
  },
  {
    position: "3rd",
    username: "Abdulfatai Sanusi",
    email: "abdulfataisanusi@gmail.com",
    percentage: "85%",
    color: "text-yellow-500",
  },
];

const colors = [
  { "1st": "text-green-500", "2nd": "text-blue-500", "3rd": "text-yellow-500" },
];

const TopStudent = () => {
  return (
    <div className="w-[382px] h-[300px]  py-4 px-[16px] bg-white rounded-[12px] border border-solid border-[#e9ebfe80]">
      <div className="flex items-center justify-center justify-between pb-4">
        <h1 className="font-semibold text-base ">Top Performing Students</h1>
        {/* <div className="">
          <span className="text-[12px] font-semibold text-[#A3AED0]">Path</span>
          <ArrowDropDownIcon fontSize="medium" className="text-[#A3AED0]" />
        </div> */}
        <Path />
      </div>

      <div className="flex flex-col gap-[20px] ">
        {students.map((student, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-[12px] px-2 rounded-[14px] border border-solid border-slate-200"
          >
            <div className="flex items-center gap-[16px]">
              <p className={`font-medium italic w-[34px] ${student.color}`}>
                {student.position}
              </p>
              <div className="flex flex-col gap[2px] w-[142px]">
                <p className="text-[14px] font-semibold">{student.username}</p>
                <p className="text-[10px]">{student.email}</p>
              </div>
            </div>
            <p className="font-bold text-sm">{student.percentage}</p>
            <div style={{ color: colors[student.position] }}>
              <EmojiEventsIcon
                fontSize="large"
                className={`${student.color}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopStudent;
