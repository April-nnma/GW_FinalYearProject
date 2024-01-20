import {
  BellOutlined,
  HomeOutlined,
  MenuUnfoldOutlined,
  MessageOutlined,
  UserAddOutlined,
  UsergroupDeleteOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
export const Header = () => {
  return (
    <div className="p-4 flex items-center justify-between border-b lg:px-10">
      {/* leftside */}
      <div className="flex items-center mr-2">
        <div className="w-10 h-10 sm:h-10 sm:w-10">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
            alt="#"
          />
        </div>
        <div className="ml-2">
          <input
            type="text"
            placeholder="Search Facebook"
            className="outline-0 bg-[#f2f3f7] p-2 rounded-full pl-4"
          ></input>
        </div>
      </div>
      {/* middle */}
      <div className="flex items-center space-x-7">
        <HomeOutlined className="w-10 h-10" />
        <VideoCameraOutlined className="w-10 h-10" />
        <UserAddOutlined className="w-10 h-10" />
        <UsergroupDeleteOutlined className="w-10 h-10" />
      </div>
      {/* rightside */}
      <div className="flex space-x-6 items-center ml-0">
        <div className="md:flex space-x-6 hidden ">
          <MenuUnfoldOutlined className=" w-10 h-10" />
          <MessageOutlined className="w-7 h-7" />
          <BellOutlined className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
};
