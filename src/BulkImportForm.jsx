import React from "react";
import DownloadRounded from "@mui/icons-material/DownloadRounded";
import UploadRoundedIcon from "@mui/icons-material/UploadRounded";

const content = [
  {
    id: "1",
    icon: <DownloadRounded />,
    text: "Download the student enrolment template sheet",
  },
  {
    id: "2",
    icon: "",
    text: "Enter the details of the students to be enroled in the platform",
  },
  {
    id: "3",
    icon: <UploadRoundedIcon />,
    text: "Upload your student enrolment list to enrol the student",
  },
];

const BulkImportForm = () => {
  return (
    <div>
      <div className="bg-white rounded-2xl py-8">
        <div className="flex flex-col items-center gap-[16px] relative top-[33px] left-[15px]">
          {content.map((index) => (
            <div className="flex">
              <div className="w-[58px] h-[58px] rounded-[28.5px/29px]">
                {index.icon}
              </div>
              <p className="w-[258px] h-[37px] [font-family:'DM_Sans-Medium',Helvetica] font-medium text-black text-[14px] tracking-[0] leading-[normal]">
                {index.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BulkImportForm;
