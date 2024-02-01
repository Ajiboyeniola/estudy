import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React from "react";

const Path = ({ onChange, selected }) => {
  const options = ["All", "Science", "Art", "Commercial"];
  //   const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="relative flex">
      <select
        className="block appearance-none w-[90px] bg-white text-[12px] font-semibold text-[#A3AED0]"
        value={selected}
        onChange={(e) => {
          //   setSelectedOption(e.target.value);
          onChange(e.target.value);
          console.log(e.target.value);
        }}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700">
        <ArrowDropDownIcon fontSize="medium" className="text-[#A3AED0]" />
      </div>
    </div>
  );
};

export default Path;
