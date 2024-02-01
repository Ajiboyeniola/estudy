import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import GroupsIcon from "@mui/icons-material/Groups";
import SingleStudentForm from "./SingleStudentForm";
import BulkImportForm from "./BulkImportForm";

const content = [
  {
    id: "1",
    title: "Enrol a single student",
    text: "Enrol a single student to gain access to the premium content available.",
  },
  {
    id: "2",
    title: "Enrol multiple students ",
    text: "Enrol many students quickly to gain access to the premium content available.",
  },
];

const button = ["Add Student", "Bulk Import"];

const icon = [
  <PersonIcon fontSize={`large`} />,
  <GroupsIcon fontSize={`large`} />,
];

const Enroll = () => {
  const [addSingleStudent, setAddSingleStudent] = useState(false);

  const [addBulkImport, setAddBulkImport] = useState(false);

  function handleAddStudent() {
    setAddSingleStudent(true);
    setAddBulkImport(false);
  }

  function handleBulkImport() {
    setAddBulkImport(true);
    setAddSingleStudent(false);
  }

  return (
    <div className="">
      {addSingleStudent ? (
        <SingleStudentForm />
      ) : addBulkImport ? (
        <BulkImportForm />
      ) : (
        <div className="bg-white rounded-2xl py-12 mb-12">
          <div className="pb-2 px-12 flex items-center justify-between">
            <h4 className="text-[20px] font-medium w-[206px]">Enrol Student</h4>
            <CloseIcon fontSize={`medium`} />
          </div>

          <div className=" my-6 mx-12  flex items-center gap-[40px]">
            {content.map((content, i) => (
              <div className="bg-[#F0F2FF] w-[475px] py-6 px-6 rounded-2xl">
                <div className="flex items-center justify-between pb-6">
                  <h3 className="text-xl font-medium">{content.title}</h3>
                  {/* <PersonIcon fontSize={`large`} /> */}
                  <div>{icon[i]}</div>
                </div>

                <p className="text-[16px] w-[345px] pb-8">{content.text}</p>
                <button
                  className="rounded-[6px] bg-[#40499D] px-[16px] py-2 text-[12px] text-white"
                  onClick={() =>
                    i === 0 ? handleAddStudent() : handleBulkImport()
                  }
                >
                  {button[i]}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Enroll;
