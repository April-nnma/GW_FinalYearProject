import { BiLike, BiSmile, BiWorld } from "react-icons/bi";
import { AiOutlineCamera, AiOutlineGif } from "react-icons/ai";
import { Avatar } from "@chakra-ui/avatar";
import { useAuth } from "hooks";
import { FaRegCommentAlt } from "react-icons/fa";
import { Button, Divider, Image, Card } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { likeService, postService } from "services";
import { CreatePost } from "types";
import { getPostsThunk, postServiceActions } from "store/postService";
import { RootState, useAppDispatch } from "store";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { HiXMark } from "react-icons/hi2";

export const Post = () => {
  const { user } = useAuth();
  const [postLikes, setPostLikes] = useState<{ [postId: number]: boolean }>({});
  const [posts, setPosts] = useState<CreatePost[]>([]);
  const [comments, setComments] = useState([]);
  const dispatch = useAppDispatch();

  const { postsList, isFetchingPosts } = useSelector(
    (state: RootState) => state.postService
  );
  const { likes } = useSelector((state: RootState) => state.likeService);

  useEffect(() => {
    dispatch(getPostsThunk());
  }, [dispatch]);

  useEffect(() => {
    const handlePostCreated = () => {
      dispatch(getPostsThunk());
    };
    document.addEventListener("postCreated", handlePostCreated);
    return () => {
      document.removeEventListener("postCreated", handlePostCreated);
    };
  }, [dispatch]);

  if (isFetchingPosts) {
    return <div className="text-center">Loading...</div>;
  }
  if (!postsList || postsList.length === 0) {
    return <div className="tex-center">No posts to display</div>;
  }

  const handleLikePost = async (postId: number, userId: number) => {
    try {
      const response = await likeService.getLikesByUserAndPost(userId, postId);

      if (response.data && response.data.length > 0) {
        const likedPost = response.data;

        const userLikedPost = likedPost.some((like) => like.user_id === userId);

        if (userLikedPost) {
          await likeService.deletePostLike(likedPost[0].like_id);
          toast.success("Post unliked successfully");

          setPostLikes((prevPostLikes) => {
            const newPostLikes = { ...prevPostLikes };
            delete newPostLikes[postId];
            return newPostLikes;
          });
          setPosts((prevPosts) =>
            prevPosts.map((post) =>
              post.post_id === postId
                ? { ...post, likes: post.like.like_id - 1 }
                : post
            )
          );
        } else {
          await likeService.createPostLike(userId, postId);
          toast.success("Post liked successfully");

          setPostLikes((prevPostLikes) => ({
            ...prevPostLikes,
            [postId]: true,
          }));
          setPosts((prevPosts) =>
            prevPosts.map((post) =>
              post.post_id === postId
                ? { ...post, likes: post.like.like_id + 1 }
                : post
            )
          );
        }
      } else {
        await likeService.createPostLike(userId, postId);
        toast.success("Post liked successfully");

        setPostLikes((prevPostLikes) => ({
          ...prevPostLikes,
          [postId]: true,
        }));
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post.post_id === postId
              ? { ...post, likes: post.like.like_id + 1 }
              : post
          )
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDeletePost = async (postId: number) => {
    try {
      const post = postsList.find((post) => post.post_id === postId);
      if (post && post.user_id_create === user.user_id) {
        await postService.deletePost(postId);
        dispatch(postServiceActions.deletePost(postId));
        toast.success("Post deleted successfully!");
        setPosts(postsList.filter((p) => p.post_id !== postId));
        console.log("Post deleted successfully!");
      } else {
        toast.error("Don't delete this post");
        console.log("You are not authorized to delete this post.");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <>
      {postsList
        .slice()
        .reverse()
        .map((post) => (
          <Card
            key={post.post_id}
            className="bg-white flex flex-col rounded-[1rem] px-5 py-4 mt-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center ml-5">
                <Avatar size="sm" />
                <div className="ml-3">
                  <p className="font-bold">{post?.fullname_create}</p>
                  <div className="flex">
                    <p className="text-xs">{post?.created_at}</p>
                    <BiWorld className="ml-1" />
                  </div>
                </div>
              </div>
              <div className="flex">
                <Image
                  src="../../../../public/images/dots.png"
                  alt="#"
                  className="w-9 h-10"
                />
                <HiXMark
                  className="mt-3 w-full h-full"
                  onClick={() => {
                    handleDeletePost(post.post_id);
                  }}
                />
              </div>
            </div>
            <div className="m-3">
              <p>{post.caption}</p>
            </div>
            {post.content && (
              <Image src={post.content} alt="#" className="h-auto w-full" />
            )}
            <div className="flex justify-between text-[#8e8d8d] mt-3 ml-4">
              <div className="flex items-center ">
                <div className=" w-[1.1rem] h-[1.1rem]">
                  <Image src="../../../../public/images/like.png" />
                </div>
                <div className="ml-[2px] w-5 h-5">
                  <Image src="../../../../public/images/heart.png" />
                </div>
                <p className="pl-2 whitespace-nowrap text-[15px] sm:text-[16px]">
                  {postLikes[post.post_id] ? (
                    <>
                      {user.fullname} and{" "}
                      <span>{`${
                        Object.keys(postLikes).length - 1
                      } others`}</span>
                    </>
                  ) : (
                    ""
                  )}
                </p>
              </div>
              <p className="whitespace-nowrap text-[15px] sm:text-[16px]">
                {`${comments.length} Comments`}
              </p>
            </div>
            <Divider orientation="horizontal" mt={3} borderColor="gray.300" />
            <div className="flex justify-between mx-6 mt-1 font-medium cursor-pointer">
              <div
                className="flex items-center"
                onClick={() => handleLikePost(post.post_id, user.user_id)}
              >
                <BiLike
                  className={`w-5 h-5 ${
                    postLikes[post.post_id] ? "text-blue-700" : "text-black"
                  }`}
                />
                <p
                  className={`pl-2 text-[18px] ${
                    postLikes[post.post_id]
                      ? "text-blue-700 font-bold"
                      : "text-black"
                  }`}
                >
                  {postLikes[post.post_id] ? "Like" : "Like"}
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
            <Divider orientation="horizontal" mt={3} borderColor="gray.300" />
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
          </Card>
        ))}
    </>
  );
};
