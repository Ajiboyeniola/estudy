import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Header = () => {
  return (
    <div className="flex justify-between w-[1201px] bg-white py-[16px] px-4">
      <h1>WelcomE, Rainbow College</h1>
      <div className="flex gap-2">
        <NotificationsNoneIcon fontSize="large" className="text-[#40499D]" />
        <AccountCircleIcon fontSize="large" className="text-[#40499D]" />
      </div>
    </div>
  );
};

export default Header;
