import React from "react";
import Enroll from "./Enroll";
import Dashboard from "./Dashboard";
import Subscription from "./Subscription";

function App() {
  return (
    // <div className="bg-slate-100 w-full max-h-full">
    //   <div className="flex py-24 justify-center">
    //     <Enroll />
    //   </div>
    // </div>
    <div className="bg-slate-100 max-h-full">
      <div className="">
        <Dashboard />
      </div>
    </div>
    // <div className="">
    //   <Subscription />
    // </div>
  );
}

export default App;
