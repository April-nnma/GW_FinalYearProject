import { Posts } from "./Posts";
import { CreatePost } from "./CreatePost";
import { LeftSideBar } from "./LeftSideBar";

export const Feed = () => {
  return (
    <div className="flex  bg-gray-100">
      <div className="w-1/5 h-screen p-4 border-r border-gray-200 overflow-y-auto">
        <LeftSideBar />
      </div>
      <div>
        <CreatePost />
        <Posts />
      </div>
    </div>
  );
};
