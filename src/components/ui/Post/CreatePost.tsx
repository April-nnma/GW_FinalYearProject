import { Story } from "../Story/Story";
import { Avatar } from "@chakra-ui/avatar";
import { Button, Image, Input, Spinner, Toast } from "@chakra-ui/react";
import { Post } from "./Post";
import { useAuth } from "hooks";
import { useRef, useState } from "react";
import { useToast } from "react-toastify";
import { postService } from "services";

type PostFormProps = {
  closeForm: () => void;
};

export const CreatePost = () => {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [contentUrl, setContentUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const titleRef = useRef(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileUrl = URL.createObjectURL(e.target.files[0]);
      // console.log(fi)
      // setSelectedImage(fileUrl);
    }
  };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handlePost = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const postData = {
        user_id_create: user?.id,  // Giả định rằng user object có ID của người dùng
        title: title,
        content_url: contentUrl,
      };
      const response = await postService.createPost(postData);

  };
  return (
    <form>
      <Story />
      <div className="rounded-lg bg-white flex flex-col p-3 px-4 shadow">
        <div className="flex items-center space-x-2 border-b pb-3 mb-2">
          <div className="shrink-0">
            <Avatar size="sm" className="mr-2" />
          </div>

          <Input
            placeholder={`What's on your mind ${user?.fullName}?`}
            justifyContent="flex-start"
            color="text-gray-300"
            className="hover:bg-gray-200 focus:bg-gray-100 focus:outline-none flex-grow bg-gray-100 text-gray-400 text-left rounded-full h-10 pl-5"
            // ref={titleRef}
          ></Input>
          <Button
            isLoading
            colorScheme="linkedin"
            spinner={<Spinner size="sm" color="white" />}
            // onClick={handleUploadPost}
          >
            Post
          </Button>
        </div>
        {/* {showPost && <PostForm closeForm={() => setShowPost(false)} />} */}
        <div className="flex justify-between px-3 sm:mx-9 pb-3 space-x-3 ml-96">
          <div className="flex items-center">
            <div className="w-7 h-7">
              <Image src="../../../../public/images/camera.png" alt="#" />
            </div>
            <p className="pl-2 whitespace-nowrap text-[14px]">Live Video</p>
          </div>
          <div className="flex items-center">
            <div className="w-7 h-7">
              <Image src="../../../../public/images/picture.png" alt="#" />
              <input type="file" className="hidden" />
            </div>
            <p className="pl-2 text-[14px]">Photo/Video</p>
          </div>

          <div className="flex items-center">
            <div className="w-7 h-7">
              <Image src="../../../../public/images/smile.png" alt="#" />
            </div>
            <p className="pl-2 text-[14px]">Feeling/Activity</p>
          </div>
        </div>
      </div>
      <Post />
    </form>
  );
};

// import React, { useState } from "react";
// import { Story } from "../Story/Story";
// import { Avatar } from "@chakra-ui/avatar";
// import { Button, Input, useToast } from "@chakra-ui/react";
// import { postService } from "services/postService"; // Đảm bảo rằng đường dẫn đúng
// import { useAuth } from "hooks";
// import axios from "axios";

// export const CreatePostForm = () => {
//   const { user } = useAuth();
//   const [title, setTitle] = useState("");
//   const [contentUrl, setContentUrl] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const toast = useToast();

//   const[(formData, setFormData)] = useState({});

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // const handleSubmit = async (e: React.FormEvent) => {
//   //   e.preventDefault();

//   //   try {
//   //     const response = await axios.post(
//   //       "http://localhost:3000/post/createPost",
//   //       formData
//   //     );
//   //     console.log("Data sent successfully:", response.data);
//   //   } catch (error) {
//   //     console.error("Error sending data:", error);
//   //   }
//   // };
//   return (
//     <form onSubmit={handlePost}>
//       <Story />
//       {/* ... các thành phần khác của form ... */}
//       <Input
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder={`What's on your mind, ${user?.fullName}?`}
//         isRequired
//         onChangeCapture={handleChange}
//       />
//       <Input
//         value={contentUrl}
//         onChange={(e) => setContentUrl(e.target.value)}
//         placeholder="Content URL"
//         isRequired
//         onChangeCapture={handleChange}
//       />
//       <Button isLoading={isLoading} type="submit" colorScheme="blue">
//         Post
//       </Button>
//     </form>
//   );
// };
