import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

const inputField = ["First Name", "Middle Name", "Last Name", "Email Address"];

const path = ["Science", "Art", "Commercial"];

const gender = ["Male", "Female"];

const level = ["SS3", "SS2", "SS1", "JSS3", "JSS2", "JSS1"];

const SingleStudentForm = () => {
  return (
    <div>
      <div className="bg-white rounded-2xl py-8">
        <div className="pb-8 px-12 flex items-center justify-between">
          <h4 className="text-[20px] font-medium w-[206px]">Enrol Student</h4>
          <CloseIcon fontSize={`medium`} />
        </div>

        <div className="pb-6 px-12">
          <p className="text-lg text-slate-500">Student Details</p>
        </div>

        <div className="flex flex-col gap-[24px] px-12 mb-8">
          {inputField.map((i) => (
            <input
              type="text"
              placeholder={i}
              className="w-[553px] h-[46px] bg-[#f4f7fe] rounded-[px] font-normal text-[#8e9ab9] text-base px-4"
            />
          ))}
        </div>

        <div className="flex items-center gap-8 pb-6 px-12 w-full">
          <select
            name="gender"
            id="gender"
            className="w-[276px] h-[46px] bg-[#f4f7fe] rounded-[10px] font-normal text-[#8e9ab9] text-base px-4"
          >
            {path.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="flex flex-row gap-12">
            {gender.map((value, index) => (
              <div className="flex items-center gap-4">
                <input
                  key={index}
                  id={index}
                  className="peer w-[24px] h-[24px]"
                  type="radio"
                  name="status"
                  checked
                />
                <label htmlFor={index} class="peer-checked/draft:text-sky-500">
                  {value}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-8 pb-6 px-12 w-full">
          <input
            type="number"
            placeholder="Phone number"
            className="w-1/2 h-[58px] bg-[#f4f7fe] rounded-[10px] font-normal text-[#8e9ab9] text-base px-4"
          />

          <select
            name="gender"
            id="gender"
            className="w-1/2 h-[58px] bg-[#f4f7fe] rounded-[10px] font-normal text-[#8e9ab9] text-base px-4"
          >
            {level.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="grid justify-items-end px-12 w-full">
          <button className="rounded-[6px] bg-[#40499D] px-[16px] py-2 text-[12px] text-white">
            Save student
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleStudentForm;
