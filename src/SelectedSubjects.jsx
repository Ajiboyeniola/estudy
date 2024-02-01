import FolderIcon from "@mui/icons-material/Folder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect, useState } from "react";
import Path from "./Path";

const students = [
  {
    initial: "GS",
    username: "Gbenga Sokoya",
    email: "gbengasokoya@gmail.com",
    path: "Science",
  },
  {
    initial: "BA",
    username: "Buari Abdulfatai ",
    email: "buariabdulfatai@gmail.com",
    path: "Art",
  },
  {
    initial: "GE",
    username: "Goodness Elijah",
    email: "gbengasokoya@gmail.com",
    path: "Science",
  },
  {
    initial: "KJ",
    username: "King Joseph ",
    email: "kingjoseph@gmail.com",
    path: "Commercial",
  },
  {
    initial: "AD",
    username: "Ademola Nadia ",
    email: "ademolanadia@gmail.com",
    path: "Art",
  },
  {
    initial: "RA",
    username: "Redeem Abdul ",
    email: "redeemabdul@gmail.com",
    path: "Commercial",
  },
];

const colors = [
  "bg-red-200",
  "bg-yellow-200",
  "bg-green-200",
  "bg-blue-200",
  "bg-purple-200",
  "bg-teal-200",
  "bg-violet-200",
];

// const [searchValue, setSearchValue] = useState("");
//   const [filteredStudents, setFilteredStudents] = useState(students);

//   const handleSearch = (value) => {
//     setSearchValue(value);
//     setFilteredStudents(
//       students.filter(
//         (val) =>
//           val.email.includes(value.toLowerCase()) ||
//           val.username.includes(value.toLowerCase())
//       )
//     );
//   };

const SelectedSubjects = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredStudents, setFilteredStudents] = useState(students);
  const [selectedPath, setSelectedPath] = useState("All");

  const handleSearch = (value) => {
    setSearchValue(value);
    filterStudents(selectedPath, value);
  };

  const handlePathChange = (path) => {
    setSelectedPath(path);
    setFilteredStudents(() => {
      if (path !== "All") {
        return students.filter((stud) => stud.path === path);
      } else {
        return students;
      }
    });
  };

  const filterStudents = (path, search) => {
    console.log("Filtering students. Path:", path, "Search:", search);
    setFilteredStudents(
      students.filter(
        (val) =>
          (path === "All" || val.path === path) &&
          (search === "" ||
            val.email.toLowerCase().includes(search.toLowerCase()) ||
            val.username.toLowerCase().includes(search.toLowerCase()))
      )
    );
  };

  return (
    <div className="w-[387px] h-[470px] py-4 px-[16px] bg-[white] rounded-[12px] border border-solid border-[#e9ebfe80]">
      <div className="flex items-center justlfy-center justify-between mb-[16px]">
        <h1 className="font-semibold text-base text-[#2B3674]">
          Selected Subjects
        </h1>
        <input
          type="text"
          placeholder="Search"
          className="w-[100px] text-[12px] rounded-[12px] bg-[#F4F7FE] py-[4px] px-[12px]"
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
        />

        <Path onChange={(e) => handlePathChange(e)} selected={selectedPath} />
      </div>
      <div className="flex flex-col gap-[10px]">
        {filteredStudents.map((student, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-[12px] border border-solid border-slate-100 py-[8px] px-[8px]"
          >
            <div className="flex items-center gap-4">
              <div
                className={`${colors[i]} w-[30px] h-[30px] rounded-full flex items-center justify-center`}
              >
                <p className="font-semibold text-[12px]">{student.initial}</p>
              </div>

              <div className="flex flex-col w-[142px]">
                <h1 className="font-medium text-[14px] text-[#212B36]">
                  {student.username}
                </h1>
                <p className="font-regular text-[10px] text-[#919EAB]">
                  {student.email}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex gap-[0px]">
                <FolderIcon fontSize="small" className="text-yellow-500" />
                <FolderIcon fontSize="small" className="text-green-500" />
                <FolderIcon fontSize="small" className="text-purple-500" />
              </div>
              <MoreVertIcon fontSize="small" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedSubjects;
