import { Checkbox, Input } from "@mui/material";
import React from "react";
import { useState } from "react";
// import FontAwesomeIcon from "@fortawesome/fontawesome-svg-core";
// import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

const header = [
  {
    id: "1",
    title: "Student",
  },
  {
    id: "2",
    title: "Path",
  },
  {
    id: "3",
    title: "Phone-number",
  },
  {
    id: "4",
    title: "Gender",
  },
  {
    id: "5",
    title: "Class",
  },
  {
    id: "6",
    title: "Status",
  },
  {
    id: "7",
    title: "Action",
  },
];

const tableData = [
  {
    id: "1",
    initial: "EK",
    name: "Eniola Kanyinsola",
    path: "Science",
    phone: "07076543466",
    gender: "Male",
    class: "SS 3",
    status: "Verified",
  },
  {
    id: "2",
    initial: "AV",
    name: "Anene Victoria",
    path: "Art",
    phone: "07076543466",
    gender: "Female",
    class: "SS 1",
    status: "Verified",
  },
  {
    id: "3",
    initial: "AA",
    name: "Adeleye Adedolapo",
    path: "Commercial",
    phone: "07076543466",
    gender: "Female",
    class: "SS 2",
    status: "Unverified",
  },
];

const colors = [
  "red",
  "green",
  "green",
  "amber",
  "yellow",
  "blue",
  "brown",
  "purple",
];

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Table = () => {
  return (
    <div>
      <div className="">
        <table className="w-full border-solid border border-slate-300 divide-y divide-slate-300">
          <thead className="">
            <tr>
              <th>
                <Checkbox {...label} />
              </th>
              {header.map((header) => (
                <th className="font-sans text-xl font-medium tracking-wide text-left px-6 py-6">
                  {header.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-300 ">
            {tableData.map((data, i) => (
              <tr className="">
                <td>
                  <Checkbox {...label} />
                </td>
                <td className="inline-flex items-center font-sans text-xl font-base tracking-wide text-left px-6 py-6">
                  <div
                    className={`w-12 h-12 mr-2 bg-${colors[i]}-100 rounded-full flex items-center justify-center`}
                  >
                    {data.initial}
                  </div>
                  {data.name}
                </td>
                <td className="font-sans text-xl font-base tracking-wide text-left px-6 py-6">
                  {data.path}
                </td>
                <td className="font-sans text-xl font-base tracking-wide text-left px-6 py-6">
                  {data.phone}
                </td>
                <td className="font-sans text-xl font-base tracking-wide text-left px-6 py-6">
                  {data.gender}
                </td>
                <td className="font-sans text-xl font-base tracking-wide text-left px-6 py-6">
                  {data.class}
                </td>

                {data.status === "Verified" && (
                  <td className="inline-flex items-center px-6 py-2 rounded-full text-xl font-medium text-green-900 bg-green-50">
                    <div className="h-2 w-2 mr-2 bg-green-900 rounded-full"></div>
                    {data.status}
                  </td>
                )}
                {data.status === "Unverified" && (
                  <td className=" inline-flex items-center px-6 py-2  rounded-full text-xl font-medium text-red-600 bg-red-50 p-4 font-sans">
                    <div className="h-2 w-2 mr-2 bg-red-600 rounded-full"></div>
                    {data.status}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
