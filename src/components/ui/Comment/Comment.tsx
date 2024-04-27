import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  AiOutlineCamera,
  AiOutlineGif,
  AiOutlineLoading,
} from "react-icons/ai";
import { BiSmile } from "react-icons/bi";
import { TiDeleteOutline } from "react-icons/ti";
import { toast } from "react-toastify";
import { commentService } from "services";
import { sleep } from "utils";

interface CommentProps {
  postId: number;
  userId: number;
  fullname: string;
  setNumberOfComments: Function;
}

export const Comment = ({
  postId,
  userId,
  fullname,
  setNumberOfComments,
}: CommentProps) => {
  const [comment, setComment] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCommentPost = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await sleep();
      await commentService.createComment(postId, userId, {
        user_id: userId,
        post_id: postId,
        message: message,
        fullname_comment: fullname,
      });
      setMessage("");
      console.log("Comment created successfully!");

      const newComments = await commentService.getCommentsByPostId(postId);
      setComment(newComments);

      setNumberOfComments(newComments.length);
    } catch (error) {
      console.error("Error creating comment:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteComment = async (
    commentId: number,
    commentUserId: number
  ) => {
    if (commentUserId === userId) {
      setIsLoading(true);
      try {
        await commentService.deleteComment(commentId);
        toast.success("Comment deleted successfully!");
        // Lọc ra comment vừa xóa và cập nhật state
        setComment(comment.filter((c) => c.commentId !== commentId));
        setNumberOfComments((prev) => prev - 1);
      } catch (error) {
        console.error("Error deleting comment:", error);
        toast.error("Failed to delete comment.");
      } finally {
        setIsLoading(false);
      }
    } else {
      toast.error("You can only delete your own comments.");
    }
  };
  useEffect(() => {
    commentService
      .getCommentsByPostId(postId)
      .then((response) => {
        setComment(response);
        setNumberOfComments(response.length);
      })
      .catch((error) => {
        console.error("Error getting comments:", error);
      });
  }, []);

  return (
    <div className="max-h-60 overflow-y-auto">
      <form action="" onSubmit={handleCommentPost}>
        <div className="flex items-center mt-5">
          <input type="hidden" name="user_id" value={userId} />
          <input type="hidden" name="post_id" value={postId} />

          <Avatar size="sm" className="ml-5 mt-0" />
          <div className="w-full ml-5 bg-[#f2f3f7] rounded-full flex items-center relative">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              placeholder="Write a comment"
              className="outline-none p-2 rounded-full w-full bg-[#f2f3f7]"
            />
            <div className="flex absolute right-[4.5rem] space-x-2 text-[#8e8d8d]">
              <BiSmile />
              <AiOutlineCamera />
              <AiOutlineGif />
            </div>

            <Button
              type="submit"
              colorScheme="twitter"
              borderRadius="full"
              size="xs"
              className="mr-5"
            >
              {isLoading ? (
                <>
                  <AiOutlineLoading className="text-white animate-spin" />
                </>
              ) : (
                <>
                  <p className="text-white"></p> {" Post"}
                </>
              )}
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 w-full max-h-[300px]">
          {comment &&
            comment.map((comments) => {
              return (
                <div className="flex ml-5 mt-4" key={comments.commentId}>
                  <Avatar size="sm" />
                  <Button size="md" className="ml-[20px] flex">
                    <div className="text-start">
                      <p className="font-bold">{comments.fullname_comment}</p>
                      <p className="font-normal">{comments.message}</p>
                    </div>
                  </Button>
                  <TiDeleteOutline
                    className="mt-3 ml-4"
                    onClick={() =>
                      handleDeleteComment(comments.commentId, comments.userId)
                    }
                  />
                </div>
              );
            })}
        </div>
      </form>
    </div>
  );
};
