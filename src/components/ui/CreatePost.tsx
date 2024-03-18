import { VscAccount } from "react-icons/vsc";

export const CreatePost = () => {
  return (
    <div>
      <div className="p-4 bg-white shadow-sm rounded-lg mb-4 max-w-2xl mx-auto">
        <VscAccount className="flex items-center space-x-4" />
        <div className="w-11 h-11 rounded-full bg-gray-300">
          <input
            type="text"
            placeholder="What is on your mind?"
            className="flex-1 p-2 border border-gray-300 rounded-full"
          ></input>
        </div>
        <div className="flex justify-center items-center w-11 h-11 rounded-full bg-gray-200 ml-4 cursor-pointer">
          <img
            src="../../../public/images/photo.jpg"
            alt="#"
            className="w-6 h-6"
          ></img>
        </div>
      </div>
    </div>
  );
};
