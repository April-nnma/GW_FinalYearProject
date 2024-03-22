import { CreatePost } from "./CreatePost";
import { LeftSideBar } from "./LeftSideBar";

export const Feed = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/5 p-4 border-r border-gray-200 overflow-y-auto">
        <LeftSideBar />
      </div>
      <div className="flex flex-col w-4/5">
        <CreatePost />
      </div>
    </div>
  );
};
