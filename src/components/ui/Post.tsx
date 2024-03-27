import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { BiSmile, BiWorld } from "react-icons/bi";
import { AiOutlineCamera, AiOutlineGif } from "react-icons/ai";
import { Moment } from "moment";

export const Post = () => {
  const Post = ({}) => {};
  return (
    <div className="bg-white rounded-[1rem] px-5 py-4 mt-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center ">
          <div className="w-12 h-12">
            <img src="../.." className="rounded-full" />
          </div>
          <div className="ml-3">
            <p className="font-bold "></p>
            <div className="flex">
              <p className="text-xs">
                {/* <Moment fromNow>{timestamp?.toDate()}</Moment> &#8226;{" "} */}
              </p>
              <BiWorld className="ml-1 shrink-0" />
            </div>
          </div>
        </div>

        <div className="w-10 h-10">{/* <Image src={dots} /> */}</div>
      </div>
      {/* Input */}
      <div className="my-3  ">{/* <p>{caption}</p> */}</div>
      {/* Image */}
      <div className="-mx-5">
        <img src="" />
      </div>
      {/* Number of Likes + Buttons */}
      <div className="">
        <div className="flex justify-between text-[#8e8d8d] mt-1">
          <div className="flex items-center ">
            <div className=" w-[1.1rem] h-[1.1rem]">
              {/* <Image src={like} /> */}
            </div>
            <div className="ml-[2px] w-5 h-5">
              {/* <Image src={hearth} /> */}
            </div>
            <p className="pl-2 whitespace-nowrap  text-[15px] sm:text-[16px]">
              kjckjdjkn
            </p>
          </div>
          {/* <p className="whitespace-nowrap text-[15px] sm:text-[16px]">
            {`${comments.length} Comments`}
          </p> */}
        </div>

        <div className="border-b my-2"></div>
        <div className="flex justify-between mx-6">
          <div className="flex items-center">
            {/* <img
                src={hasLiked ? bluelike.src : blacklike.src}
                className="w-6 h-6"
              /> */}
            <p className="pl-2 text-[18px]">Like</p>
          </div>
          <div className="flex items-center">
            {/* <FaRegCommentAlt className="w-5 h-5" /> */}
            <p className="pl-2 text-[18px]">Comment</p>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6">{/* <Image src={share} /> */}</div>

            <p className="pl-2 text-[18px] ">Share</p>
          </div>
        </div>
        <div className="border-b my-2"></div>
      </div>

      {/* Comment Section*/}
      <div className="max-h-60  overflow-y-auto  ">
        <div className="flex justify-between text-[#8e8d8d]  ">
          <p>kjjj</p>
          <div className="flex items-center">
            <p>Most Relevant</p>
            <RiArrowDownSLine />
          </div>
        </div>
        {/* <div className=" "
          {comments.map((comment) => (
            <div key={comment.id} className="">
              <div className="flex items-center mt-3">
                <div className="w-10 h-10">
                  <img src={comment.data().image} className="rounded-full" />
                </div>
                <p className="ml-2 font-bold">{comment.data().username}</p>
                <p className="ml-2 ">{comment.data().comment}</p>
              </div>
              <div className="ml-[3rem] flex -mt-1.5">
                <p className="mr-2">Like </p>
                <p>Reply </p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
      {/* Input*/}
      <div className="flex items-center mt-4">
        <div className=" w-10 h-10 shrink-0">
          {/* <img
              src={session ? session?.user?.image : nouser.src}
              className="rounded-full "
            /> */}
        </div>
        <div className="w-full ml-2 bg-[#f2f3f7] rounded-full flex items-center relative">
          <input
            type="text"
            placeholder="Write a comment "
            className="outline-0  p-2 rounded-full w-full bg-[#f2f3f7]"
            // value={comment}
            // onChange={(e) => setComment(e.target.value)}
          />
          <div className="flex absolute right-[4.5rem] space-x-2 text-[#8e8d8d]">
            <BiSmile />
            <AiOutlineCamera />
            <AiOutlineGif />
          </div>

          <div className="mr-4 bg-blue-400 text-white rounded-full">
            <button className="font-bold  px-2 ">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};
