import { CreatePost } from "./CreatePost";
import { LeftSideBar } from "./LeftSideBar";

export const Feed = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {" "}
      {/* Full height screen, grey background */}
      <div className="w-1/5 p-4 border-r border-gray-200 overflow-y-auto">
        {" "}
        {/* Sidebar: 20% width */}
        <LeftSideBar />
      </div>
      <div className="flex flex-col w-4/5">
        {" "}
        {/* Remaining width for the main content */}
        <CreatePost />
        {/* ... Your other feed content components will go here ... */}
      </div>
    </div>
  );
};
