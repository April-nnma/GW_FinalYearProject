import { BiLike, BiSmile, BiWorld } from "react-icons/bi";
import { AiOutlineCamera, AiOutlineGif } from "react-icons/ai";
import { Avatar } from "@chakra-ui/avatar";
import { useAuth } from "hooks";
import { FaRegCommentAlt } from "react-icons/fa";
import { Button, Divider, Image, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { postService } from "services";
import { CreatePost } from "types";
import { toast } from "react-toastify";

export const Post = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState<CreatePost[]>([]);
  const [hasLiked, setHasLiked] = useState(false);
  const [comments, setComments] = useState([]);

  // const [showEmoji, setShowEmoji] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await postService.getPost();
        setPosts(response.content);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
        toast.error("Unable to load posts at this time.");
      }
    };

    fetchPosts();
  }, []);

  const handleLikePost = () => {
    setHasLiked(!hasLiked);
  };
  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-[1rem] px-5 py-4 mt-4">
          {/* Post Header */}
          <div className="flex items-center justify-between">
            {/* User info */}
            <div className="flex items-center ml-5">
              <Avatar
                size="sm"
                // src={user?.avatarUrl || "path/to/default/avatar.jpg"}
              />
              <div className="ml-3">
                <p className="font-bold">{user?.fullName}username</p>
                {/* Dynamic time here */}
                <div className="flex">
                  <p className="text-xs">3 hours ago</p>
                  <BiWorld className="ml-1" />
                </div>
              </div>
            </div>
            <Image
              src="../../../../public/images/dots.png"
              alt="#"
              className="w-10 h-10"
            />
          </div>
          <div className="m-3">
            <p>{post.caption}</p>
          </div>
          {post.content ? (
            <Image src={post.content} alt="#" className="h-auto w-full" />
          ) : (
            ""
          )}
          <div className="flex justify-between text-[#8e8d8d] mt-3 ml-4">
            <div className="flex items-center ">
              <div className=" w-[1.1rem] h-[1.1rem]">
                <Image src="../../../../public/images/like.png" />
              </div>
              <div className="ml-[2px] w-5 h-5">
                <Image src="../../../../public/images/heart.png" />
              </div>
              {/* <p className="pl-2 whitespace-nowrap  text-[15px] sm:text-[16px]">
                {` Emily Doe and another ${likes.length}`}
              </p> */}
            </div>
            {/* <p className="whitespace-nowrap text-[15px] sm:text-[16px]">
              {`${comments.length} Comments`}
            </p> */}
          </div>
          <Divider orientation="horizontal" className="mt-3" />
          <div className="flex justify-between mx-6 mt-1 font-medium cursor-pointer">
            <div className="flex items-center" onClick={handleLikePost}>
              <BiLike
                className={`w-5 h-5 ${
                  hasLiked ? "text-blue-700" : "text-black"
                }`}
              />
              <p
                className={`pl-2 text-[18px] ${
                  hasLiked ? "text-blue-700" : "text-black"
                }`}
              >
                Like
              </p>
            </div>
            <div className="flex items-center">
              <FaRegCommentAlt className="w-5 h-5" />
              <p className="pl-2">Comment</p>
            </div>
            <div className="flex items-center">
              <Image
                src="../../../../public/images/share.png"
                alt="Share"
                className="w-6 h-6"
              />

              <p className="pl-2">Share</p>
            </div>
          </div>
          <Divider orientation="horizontal" className="mt-3" />
          <div className="max-h-60 overflow-y-auto">
            <div className="flex items-center mt-5">
              <Avatar size="sm" className="ml-5 mt-0" />
              <div className="w-full ml-5 bg-[#f2f3f7] rounded-full flex items-center relative">
                <input
                  type="text"
                  placeholder="Write a comment"
                  className="outline-none p-2 rounded-full w-full bg-[#f2f3f7]"
                />
                <div className="flex absolute right-[4.5rem] space-x-2 text-[#8e8d8d]">
                  <BiSmile />
                  <AiOutlineCamera />
                  <AiOutlineGif />
                </div>
                <Button
                  colorScheme="twitter"
                  borderRadius="full"
                  size="xs"
                  className="mr-5"
                >
                  Post
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
