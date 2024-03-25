import { FaBell, FaFacebookMessenger } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { MdHome, MdOutlineOndemandVideo } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuth } from "hooks";
import styled from "styled-components";

export const Header = () => {
  const navigate = useNavigate();

  const { token } = useAuth();
  console.log("token: ", token);

  const handleLogout = () => {
    localStorage.removeItem("TOKEN");
    navigate("/login");
  };

  return (
    <form>
      <div className="p-4 flex items-center justify-between border-b lg:px-10 bg-gray-100">
        {/* Left */}
        <div className="flex items-center mr-4">
          <div className="w-10 h-10 sm:h-10 sm:w-10">
            <img src="../../../public/images/logo.png" alt="#" />
          </div>
          <div className="flex items-center bg-white rounded-full p-3 pl-5 ml-3 ">
            <input
              type="text"
              placeholder="Search Facebook"
              className="bg-transparent focus:outline-none placeholder-gray-500 text-sm w-full"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Middle */}
        <div className="flex items-center justify-center space-x-20">
          <IconWrapper>
            <MdHome className="w-9 h-9" />
          </IconWrapper>
          <IconWrapper>
            <MdOutlineOndemandVideo className="w-7 h-7" />
          </IconWrapper>
          <IconWrapper>
            <GrGroup className="w-7 h-7" />
          </IconWrapper>
          <IconWrapper>
            <IoGameControllerOutline className="w-7 h-7" />
          </IconWrapper>
          <IconWrapper>
            <FaBell className="w-7 h-7" />
          </IconWrapper>
        </div>

        {/* Right */}
        <div className="flex space-x-6 items-center ml-4">
          {!token && <p>login</p>}
          {!!token && (
            <div className="md:flex space-x-6 hidden">
              <FaFacebookMessenger className="w-7 h-7" />
              <VscAccount className="w-7 h-7" />
              <IoIosLogOut className="w-7 h-7" onClick={handleLogout} />
            </div>
          )}

          <div className="w-10 h-10">
            {/* <img
          src={session ? session?.user?.image : nouser.src}
          className="rounded-full"
        /> */}
          </div>
        </div>
      </div>
    </form>
  );
};

const IconWrapper = styled.div`
  position: relative;
  display: inline-block;
  justify-content: center;
  padding-bottom: 4px;
  transition: color 0.3s, border-color 0.3s;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    transition: background-color 0.3s;
  }

  &:hover {
    color: blue;
    &::after {
      background-color: lightblue;
    }
  }
`;
