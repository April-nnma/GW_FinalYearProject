import { LeftSideBar } from "./LeftSideBar";
import { RightSideBar } from "./RightSideBar";
import { CreatePost } from "./Post/CreatePost";
import { Story } from "./Story/Story";
import { Post } from "./Post/Post";

export const Feed = () => {
  return (
    <div className="flex flex-row bg-gray-100">
      <div className="w-1/5 h-screen p-4 border-r border-gray-200 overflow-y-auto">
        <LeftSideBar />
      </div>
      <div className="flex flex-grow justify-start items-start pl-[calc(50%-40rem)]">
        <div className="w-[42.5rem]">
          <Story />
          <CreatePost />
          <Post />
        </div>
      </div>
      <div>
        <RightSideBar />
      </div>
    </div>
  );
};
