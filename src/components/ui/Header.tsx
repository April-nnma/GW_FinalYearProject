import { CgMenuGridO } from "react-icons/cg";
import { FaBell, FaFacebookMessenger, FaRegUser } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { IoGameControllerOutline } from "react-icons/io5";
import {
  MdAccountCircle,
  MdHome,
  MdOutlineOndemandVideo,
} from "react-icons/md";
export const Header = () => {
  return (
    <div className="p-4 flex items-center justify-between border-b lg:px-10">
      {/* Left */}
      <div className="flex items-center mr-4">
        <div className="w-10 h-10 sm:h-10 sm:w-10">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
            alt="Facebook Logo"
          />
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
        <FaRegUser className="w-7 h-7" />
        <GrGroup className="w-7 h-7" />
        <IoGameControllerOutline className="w-7 h-7" />
      </div>

      {/* Right */}
      <div className="flex space-x-6 items-center">
        <div className="md:flex space-x-6 hidden">
          <CgMenuGridO className="w-7 h-7" />
          <FaFacebookMessenger className="w-7 h-7" />
          <FaBell className="w-7 h-7" />
          {/* tạm */}
          <MdAccountCircle className="w-7 h-7" />
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
