// import { Avatar } from "@chakra-ui/avatar";
// import { Button } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import {
//   AiOutlineCamera,
//   AiOutlineGif,
//   AiOutlineLoading,
// } from "react-icons/ai";
// import { FaPen } from "react-icons/fa";
// import { BiSmile } from "react-icons/bi";
// import { TiDeleteOutline } from "react-icons/ti";
// import { toast } from "react-toastify";
// import { commentService } from "services";
// import { sleep } from "utils";

// interface CommentProps {
//   postId: number;
//   userId: number;
//   fullname: string;
//   setNumberOfComments: Function;
// }

// export const Comment = ({
//   postId,
//   userId,
//   fullname,
//   setNumberOfComments,
// }: CommentProps) => {
//   const [comment, setComment] = useState([]);
//   const [message, setMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleCommentPost = async (event) => {
//     event.preventDefault();
//     setIsLoading(true);

//     try {
//       await sleep();
//       await commentService.createComment(postId, userId, {
//         user_id: userId,
//         post_id: postId,
//         message: message,
//         fullname_comment: fullname,
//       });
//       setMessage("");
//       console.log("Comment created successfully!");

//       const newComments = await commentService.getCommentsByPostId(postId);
//       setComment(newComments);

//       setNumberOfComments(newComments.length);
//     } catch (error) {
//       console.error("Error creating comment:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDeleteComment = async (
//     commentId: number,
//     commentUserId: number
//   ) => {
//     if (commentUserId === userId) {
//       setIsLoading(true);
//       try {
//         await commentService.deleteComment(commentId);

//         toast.success("Comment deleted successfully!");
//         const filterComment = comment.filter((c) => c.comment_id !== commentId);
//         setComment(filterComment);
//         setNumberOfComments((prev) => prev - 1);
//       } catch (error) {
//         console.error("Error deleting comment:", error);
//         toast.error("Failed to delete comment.");
//       } finally {
//         setIsLoading(false);
//       }
//     } else {
//       toast.error("You can only delete your own comments.");
//     }
//   };

//   useEffect(() => {
//     commentService
//       .getCommentsByPostId(postId)
//       .then((response) => {
//         setComment(response);
//         setNumberOfComments(response.length);
//       })
//       .catch((error) => {
//         console.error("Error getting comments:", error);
//       });
//   }, []);

//   return (
//     <div className="max-h-60 overflow-y-auto">
//       <form action="" onSubmit={handleCommentPost}>
//         <div className="flex items-center mt-5">
//           <input type="hidden" name="user_id" value={userId} />
//           <input type="hidden" name="post_id" value={postId} />

//           <Avatar size="sm" className="ml-5 mt-0" />
// <div className="w-full ml-5 bg-[#f2f3f7] rounded-full flex items-center relative">
//   <input
//     type="text"
//     name="message"
//     value={message}
//     onChange={(e) => {
//       setMessage(e.target.value);
//     }}
//     placeholder="Write a comment"
//     className="outline-none p-2 rounded-full w-full bg-[#f2f3f7]"
//   />
//   <div className="flex absolute right-[4.5rem] space-x-2 text-[#8e8d8d]">
//     <BiSmile />
//     <AiOutlineCamera />
//     <AiOutlineGif />
//   </div>

//   <Button
//     type="submit"
//     colorScheme="twitter"
//     borderRadius="full"
//     size="xs"
//     className="mr-5"
//   >
//     {isLoading ? (
//       <>
//         <AiOutlineLoading className="text-white animate-spin" />
//       </>
//     ) : (
//       <>
//         <p className="text-white"></p> {" Post"}
//       </>
//     )}
//   </Button>
// </div>
//         </div>
//         <div className="grid grid-cols-1 w-full max-h-[300px]">
//           {comment &&
//             comment.map((comments) => {
//               return (
//                 <div className="flex ml-5 mt-4" key={comments.commentId}>
//                   <Avatar size="sm" />
//                   <Button size="md" className="ml-[20px] flex">
//                     <div className="text-start">
//                       <p className="font-bold">{comments.fullname_comment}</p>
//                       <p className="font-normal">{comments.message}</p>
//                     </div>
//                   </Button>
//                   <div className="flex mt-3 ml-4 space-x-4">
//                     {/* <FaPen /> */}
//                     {comments.user_id == userId && (
//                       <FaPen
//                         onClick={() =>
//                           handleUpdateComment(
//                             comments.comment_id,
//                             comments.user_id
//                           )
//                         }
//                       />
//                     )}
//                     {comments.user_id == userId && (
//                       <TiDeleteOutline
//                         onClick={() =>
//                           handleDeleteComment(
//                             comments.comment_id,
//                             comments.user_id
//                           )
//                         }
//                       />
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//         </div>
//       </form>
//     </div>
//   );
// };
import { Avatar, Button, Input, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiSmile } from "react-icons/bi";
import {
  AiOutlineCamera,
  AiOutlineGif,
  AiOutlineLoading,
} from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { commentService } from "services";
import { sleep } from "utils";

interface PostComment {
  comment_id: number;
  user_id: number;
  fullname_comment: string;
  message: string;
}

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
  const [comments, setComments] = useState<PostComment[]>([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [editedMessage, setEditedMessage] = useState("");
  const toast = useToast();

  useEffect(() => {
    loadComments();
  }, [postId]);

  const loadComments = async () => {
    try {
      const fetchedComments = await commentService.getCommentsByPostId(postId);
      setComments(fetchedComments ?? []);
      setNumberOfComments(fetchedComments?.length ?? 0);
    } catch (error) {
      console.error("Error getting comments:", error);
      toast({
        title: "Error loading comments.",
        description: "Failed to load comments due to an error.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",

      });
    }
  };

  const handleCommentPost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await sleep(1000); // Assuming you want to simulate a delay
      await commentService.createComment(postId, userId, {
        user_id: userId,
        post_id: postId,
        message: message,
        fullname_comment: fullname,
      });
      setMessage("");
      toast({
        title: "Comment Created",
        description: "Your comment was successfully created.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",

      });
      await loadComments();
    } catch (error) {
      console.error("Error posting comment:", error);
      toast({
        title: "Error",
        description: "Failed to post comment.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",

      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateComment = async (commentId: number) => {
    if (!editedMessage.trim()) {
      toast({
        title: "Invalid Comment",
        description: "Comment text cannot be empty.",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    setIsLoading(true);
    try {
      await commentService.updateComment(commentId, { message: editedMessage });

      setEditingCommentId(null);
      setEditedMessage("");
      toast({
        title: "Comment Updated",
        description: "Your comment was successfully updated.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",

      });
      await loadComments();
    } catch (error) {
      console.error("Error updating comment:", error);
      toast({
        title: "Error Updating Comment",
        description: "There was a problem updating your comment.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteComment = async (commentId: number) => {
    setIsLoading(true);
    try {
      await commentService.deleteComment(commentId);
      toast({
        title: "Comment Deleted",
        description: "The comment was successfully deleted.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      await loadComments();
    } catch (error) {
      console.error("Error deleting comment:", error);
      toast({
        title: "Error Deleting Comment",
        description: "Failed to delete the comment.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const startEditing = (comment: PostComment) => {
    setEditingCommentId(comment.comment_id);
    setEditedMessage(comment.message);
  };

  return (
    <div className="max-h-60 overflow-y-auto">
      <form onSubmit={handleCommentPost}>
        <div className="flex items-center mt-5">
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
        <div className="mt-4 ml-5 space-y-2">
          {comments.map((comment) => (
            <div
              key={comment.comment_id}
              className="flex items-center space-x-4"
            >
              <Avatar size="sm" />
              <div className="flex-1">
                {editingCommentId === comment.comment_id ? (
                  <>
                    <Input
                      value={editedMessage}
                      onChange={(e) => setEditedMessage(e.target.value)}
                      size="sm"
                      className="mb-2"
                    />
                    <Button
                      size="xs"
                      colorScheme="green"
                      onClick={() => handleUpdateComment(comment.comment_id)}
                    >
                      Save
                    </Button>
                    <Button
                      size="xs"
                      colorScheme="red"
                      onClick={() => setEditingCommentId(null)}
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    <div className="font-bold">{comment.fullname_comment}</div>
                    <p>{comment.message}</p>
                  </>
                )}
              </div>
              {comment.user_id === userId && (
                <div className="flex space-x-2">
                  {editingCommentId !== comment.comment_id && (
                    <FaPen onClick={() => startEditing(comment)} />
                  )}
                  <TiDeleteOutline
                    onClick={() => handleDeleteComment(comment.comment_id)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};
