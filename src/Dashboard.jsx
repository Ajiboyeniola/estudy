import React from "react";
import Cards from "./Cards";
import TopStudent from "./TopStudent";
import StudentsPath from "./StudentsPath";
import SelectedSubjects from "./SelectedSubjects";
import StudyTime from "./StudyTime";
import Payment from "./Payment";
import Header from "./Header";
import NavBar from "./NavBar";

const Dashboard = () => {
  return (
    <div className="flex gap-[25px]">
      <div className="">
        <NavBar />
      </div>

      <div className="flex flex-col gap-[25px]">
        <div className="">
          <Header />
        </div>

        <div className="flex gap-[25px]">
          <div className="flex flex-col gap-8">
            <Cards />
            <div className="flex gap-[25px]">
              <StudentsPath />
              <TopStudent />
            </div>
          </div>

          <div className="">
            <SelectedSubjects />
          </div>
        </div>

        <div className="flex gap-[25px]">
          <StudyTime />
          <Payment />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
