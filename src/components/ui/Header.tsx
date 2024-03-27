import { FaBell, FaFacebookMessenger, FaUser } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { MdHome, MdOutlineOndemandVideo } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuth } from "hooks";
import styled from "styled-components";
import { Avatar, AvatarBadge } from "@chakra-ui/avatar";
import { Popover } from "../ui/Popover";
import {
  PopoverArrow,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { useAppDispatch } from "store";
import { userServiceActions } from "store/userService";
import { PATH } from "constant";

export const Header = () => {
  const navigate = useNavigate();

  const { token, user } = useAuth();

  const dispatch = useAppDispatch();

  return (
    <form>
      <div className="p-4 flex items-center justify-between border-b lg:px-10">
        {/* Left */}
        <div className="flex items-center mr-4">
          <div className="w-10 h-10 sm:h-10 sm:w-10">
            <img src="../../../public/images/logo.png" alt="#" />
          </div>
          <div className="flex items-center bg-gray-200 rounded-full p-3 pl-5 ml-3 ">
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
          {!token && (
            <p className="flex items-center font-semibold">
              <FaUser />
              <span
                className="ml-2 cursor-pointer hover:text-primary"
                onClick={() => navigate(PATH.login)}
              >
                Login
              </span>
              <span className="inline-block h-6 w-px bg-black mx-2"></span>
              <span
                className="cursor-pointer hover:text-primary"
                onClick={() => navigate(PATH.register)}
              >
                Register
              </span>
            </p>
          )}
          {!!token && (
            <div className="md:flex space-x-6 hidden">
              <FaFacebookMessenger className="w-7 h-7" />
              <Popover>
                <PopoverTrigger>
                  <Avatar boxSize="7">
                    <AvatarBadge boxSize="0.75em" bg="green.500" />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent maxWidth="100px" maxHeight="1000px">
                  <PopoverArrow />
                  <PopoverHeader>{user?.fullName}</PopoverHeader>
                </PopoverContent>
              </Popover>

              <IoIosLogOut
                className="w-7 h-7"
                onClick={() => dispatch(userServiceActions.logOut("abc"))}
              />
            </div>
          )}
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
