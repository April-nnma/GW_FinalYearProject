export const LeftSideBar = () => {
  return (
    <div className="w-[12rem] rounded-lg hidden sm:block">
      <div className="py-2 px-4">
        <div className="flex items-center mb-4 rounded-md p-2 cursor-pointer">
          <img
            src="../../../public/images/friend.jpg"
            alt="#"
            className="w-8 h-8 rounded-full mr-2"
          />
          <div className="whitespace-nowrap">Find friends</div>
        </div>

        <div className="flex items-center mb-4 rounded-md p-2 cursor-pointer">
          <img
            src="../../../public/images/group.jpg"
            alt="#"
            className="w-8 h-8 rounded-full mr-2"
          />
          <div className="whitespace-nowrap">Groups</div>
        </div>
        <div className="flex items-center mb-4 rounded-md p-2 cursor-pointer">
          <img
            src="../../../public/images/save.jpg"
            alt="#"
            className="w-8 h-8 rounded-full mr-2"
          />
          <div className="whitespace-nowrap">Saved</div>
        </div>
      </div>
    </div>
  );
};
