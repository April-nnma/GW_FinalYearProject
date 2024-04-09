import { FaPlus } from "react-icons/fa";

export const Story = () => {
  return (
    <div className="mt-6 w-full pb-5">
      <div className="w-full h-50 flex items-center justify-center space-x-2 overflow-hidden cursor-pointer my-6">
        <div
          className="w-28 h-48 relative rounded-xl shadow "
          style={{
            backgroundImage: `url('https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg')`,
          }}
        >
          <div
            className="w-full absolute flex justify-center items-center"
            style={{ bottom: "13%" }}
          >
            <button className="focus:outline-none z-40 w-10 h-10 bg-blue-600 rounded-full flex justify-center items-center border-4 border-white">
              <FaPlus className="text-white" />
            </button>
          </div>
          <div className="bg-white z-30 absolute text-center bottom-0 p-2 pt-4 w-full h-auto rounded-b-lg">
            <p className="text-gray-500 text-sm font-semibold">Create Story</p>
          </div>
          <div
            className="w-full absolute flex justify-center items-center"
            style={{ bottom: "13%" }}
          >
            <button className="focus:outline-none z-40 w-10 h-10 bg-blue-600 rounded-full flex justify-center items-center border-4 border-white">
              <FaPlus className="text-white" />
            </button>
          </div>
          <div className="bg-white z-30 absolute text-center bottom-0 p-2 pt-4 w-full h-auto rounded-b-lg">
            <p className="text-gray-500 text-sm font-semibold">Create Story</p>
          </div>
        </div>
        {/* {storiesData.length
  ? storiesData.map((story, idx) => <Story key={idx} story={story} />)
  : null} */}
      </div>
    </div>
  );
};
