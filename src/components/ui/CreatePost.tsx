import { Avatar } from "@chakra-ui/avatar";

export const CreatePost = () => {
  return (
    <div className="w-screen sm:w-full bg-white rounded-2xl mt-5 mx-auto ml-52">
      <div className="max-w-[25rem] sm:max-w-[33rem] mx-auto sm:px-2">
        <div className="flex items-center shadow-sm p-3 pt-4 ">
          <div className="shrink-0">
            <Avatar size="sm" className="mr-2" />
          </div>
          <div className="w-full rounded-full items-center flex-grow">
            <input
              type="text"
              placeholder="What is on your mind?"
              className="outline-none bg-[#f2f3f7] p-1 rounded-full pl-3 w-full h-12 truncate"
              style={{ maxWidth: "calc(100% - 1rem)" }}
            ></input>
          </div>
          <div className="flex justify-center items-center w-12 h-12 rounded-full bg-gray-200 cursor-pointer">
            <img
              src="../../../public/images/photo.jpg"
              alt="#"
              className="w-6 h-6"
            ></img>
          </div>
        </div>
        <div
          className="
        border-b mb-4 "
        ></div>
        <div className="flex justify-between px-3 sm:mx-9 pb-3">
          <div className="flex items-center">
            <div className="w-7 h-7">
              <img src="../../../public/images/camera.png" />
            </div>
            <p className="pl-2  whitespace-nowrap text-[14px]">Live Video</p>
          </div>

          <div className="flex items-center">
            <div className="w-7 h-7">
              <img src="../../../public/images/picture.png" />
              <input type="file" className="hidden" />
            </div>
            <p className="pl-2   text-[14px]">Photo/Video</p>
          </div>

          <div className="flex items-center">
            <div className="w-7 h-7">
              <img src="../../../public/images/smile.png" />
            </div>
            <p className="pl-2   text-[14px]">Feeling/Activity</p>
          </div>
        </div>
      </div>
    </div>
  );
};
