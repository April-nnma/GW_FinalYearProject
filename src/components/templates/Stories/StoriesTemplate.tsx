import React from "react";
import { HeaderStories } from "./HeaderStories";
import { LeftSideStories } from "./LeftSideStories";
import { CreateStories } from "./CreateStories";
export const StoriesTemplate = () => {
  return (
    // <div className="flex flex-col max-h-screen bg-gray-50 overflow-hidden">
    //   <div className="fixed top-0 w-full bg-white z-10 shadow">
    //     <HeaderStories />
    //   </div>
    //   <div className="flex-grow flex overflow-auto pt-16">
    //     <div className="w-1/4 flex flex-col">
    //       <LeftSideStories />
    //     </div>
    //     <div className="flex-grow flex justify-center items-center mt-24">
    //       <CreateStories />
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col max-h-screen bg-gray-50 overflow-hidden">
      <div className="fixed top-0 w-full bg-white z-10 shadow">
        <HeaderStories />
      </div>
      <div className="flex-grow flex overflow-auto pt-16">
        {/* LeftSideStories ẩn trên màn hình nhỏ và hiển thị trên màn hình trung bình trở lên */}
        <div className="hidden md:flex md:w-1/4 flex-col">
          <LeftSideStories />
        </div>
        {/* Khu vực tạo truyện vẫn chiếm toàn bộ không gian trên màn hình nhỏ */}
        <div className="flex-grow flex justify-center items-center mt-4 md:mt-24">
          <CreateStories />
        </div>
      </div>
    </div>
  );
};
