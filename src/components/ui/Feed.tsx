import { CreatePost, Post } from "./Post";
import { LeftSideBar, RightSideBar } from "./SideBar";
import { CreateStory, Story } from "./Story";

export const Feed = () => {
  return (
    <div className="flex flex-row bg-gray-100">
      <div className=" fixed w-1/5 h-screen p-4 border-r border-gray-200 overflow-y-auto">
        <LeftSideBar />
      </div>
      <div className="flex flex-grow justify-start items-start pl-[calc(50%-40rem)] ml-72">
        <div className="w-[42.5rem]">
          <div className="flex">
            <CreateStory />
            <Story />
          </div>
          <CreatePost />
          <Post />
        </div>
      </div>
      <div className="w-1/5 h-screen p-4 border-l border-gray-200 overflow-y-auto fixed right-0 ">
        <RightSideBar />
      </div>
    </div>
  );
};
