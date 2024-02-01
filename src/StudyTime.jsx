import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Path from "./Path";

const headers = [
  {
    id: "1",
    title: "#",
  },
  {
    id: "2",
    title: "Student",
  },
  {
    id: "3",
    title: "Level progress",
  },
  {
    id: "4",
    title: "Time spent",
  },
];

const tableData = [
  {
    id: "01",
    username: "Chinedu Wisdom",
    email: "chineduwisdom@gmail.com",
    time: "46hrs",
  },
  {
    id: "02",
    username: "Goodness Elijah",
    email: "lateefbankole@gmail.com",
    time: "35",
  },
  {
    id: "03",
    username: "King Joseph",
    email: "lateefbankole@gmail.com",
    time: "29",
  },
  {
    id: "03",
    username: "Ademola Nadia",
    email: "lateefbankole@gmail.com",
    time: "16",
  },
];

const StudyTime = () => {
  return (
    <div className="w-[789px] h-[300px] py-4 px-[16px] bg-white rounded-[12px] border border-solid border-[#e9ebfe80]">
      <div className="flex justify-between pb-4">
        <h1 className="font-semibold text-base ">Study Time</h1>
        <div className="flex gap-4">
          <Path />
          <Path />
        </div>
      </div>
      <table className="">
        <thead className="w-[755px] flex justify-between ">
          {headers.map((header) => (
            <tr className="divide-y divide-slate-200">
              <th className="font-sans text-[12px] text-[#919EAB] font-medium tracking-wide text-left py-[4px] w-[142px]">
                {" "}
                {header.title}{" "}
              </th>
            </tr>
          ))}
        </thead>

        <tbody className="w-[755px] flex flex-col gap-2 divide-y divide-slate-200">
          {tableData.map((data) => (
            <tr className="flex items-center justify-between px-[4px] py-[4px]">
              <td className="w-[142px]">{data.id}</td>
              <td className="flex flex-col w-[142px]">
                <h1 className="font-medium text-[14px] text-[#212B36]">
                  {data.username}
                </h1>
                <p className="font-regular text-[10px] text-[#919EAB]">
                  {data.email}
                </p>
              </td>
              <td className="w-[142px] h-[8px] bg-green-300 rounded-full"></td>
              <td className="w-[142px]">{data.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudyTime;
