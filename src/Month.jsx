import React from "react";

const Month = () => {
  const options = [
    "January",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  return (
    <div className="relative flex">
      <select
        className="block appearance-none w-[90px] bg-white text-[12px] font-semibold text-[#A3AED0]"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
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

export default Month;
