import { FaBell, FaFacebookMessenger } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";

import { MdHome, MdOutlineOndemandVideo } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { userService } from "services";
export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    userService.logout();
    navigate("/register");
  };

  return (
    <div className="p-4 flex items-center justify-between border-b lg:px-10">
      {/* Left */}
      <div className="flex items-center mr-4">
        <div className="w-10 h-10 sm:h-10 sm:w-10">
          <img src="../../../public/images/logo.png" alt="#" />
        </div>
        <div className="ml-2">
          <input
            type="text"
            placeholder="Search Facebook"
            className="outline-0 bg-[#f2f3f7] p-2 rounded-full pl-4 hidden sm:block"
          />
        </div>
      </div>

      {/* Middle */}
      <div className="flex items-center justify-center space-x-20">
        <MdHome className="w-9 h-9" />
        <MdOutlineOndemandVideo className="w-7 h-7" />
        <GrGroup className="w-7 h-7" />
        <IoGameControllerOutline className="w-7 h-7" />
        <FaBell className="w-7 h-7" />
      </div>

      {/* Right */}
      <div className="flex space-x-6 items-center ml-4">
        <div className="md:flex space-x-6 hidden">
          <FaFacebookMessenger className="w-7 h-7" />
          {/* tạm */}
          {/* <MdAccountCircle className="w-7 h-7" /> */}
          <VscAccount className="w-7 h-7" />
          <IoIosLogOut className="w-7 h-7" onClick={handleLogout} />
        </div>
        <div className="w-10 h-10">
          {/* <img
            src={session ? session?.user?.image : nouser.src}
            className="rounded-full"
          /> */}
        </div>
      </div>
    </div>
  );
};
