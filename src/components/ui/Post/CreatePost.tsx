import { Avatar } from "@chakra-ui/avatar";
import {
  Box,
  Button,
  Divider,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useAuth } from "hooks"; // Make sure the path to your hooks is correct
import { useState, useEffect, useRef } from "react";
import { BiWorld } from "react-icons/bi";
import { postService } from "services";

interface ImageFile extends File {
  preview: string;
}

type PostFormProps = {
  closeForm: () => void;
};

export const CreatePost = () => {
  const { user } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);
  const [imgs, setImgs] = useState<ImageFile[]>([]);
  const [caption, setCaption] = useState<string>("");
  const [value, setValue] = useState(0);

  const handlePreviewImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray: ImageFile[] = Array.from(event.target.files).map(
        (file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
      );
      setImgs(filesArray);
    }
  };

  useEffect(() => {
    return () => imgs.forEach((img) => URL.revokeObjectURL(img.preview));
  }, [imgs]);

  const handleClick = () => {
    const fileInput = document.querySelector("#getFile") as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  // const handlePost = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.currentTarget);
  //   // console.log("formData: ", formData);
  //   // const caption = formData.get("caption");
  //   // console.log([...formData.entries()]);
  //   const newPost = Object.fromEntries(formData);
  //   console.log("newPost: ", newPost);
  //   setValue(value + 1);
  //   event.currentTarget.reset();
  //   imgs.forEach((img, index) => {
  //     formData.append(`image${index}`, img);
  //   });
  //   // try {
  //   //   const response = await postService.createPost(formData);
  //   //   if (response.status) {
  //   //     console.log("Post created successfully");
  //   //     setCaption("");
  //   //     setImgs([]);
  //   //     onClose();
  //   //   } else {
  //   //     console.error("Failed to create post:", response.message);
  //   //   }
  //   // } catch (error) {
  //   //   console.error("Failed to create post:", error);
  //   // }
  // };
  const handlePost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newPostData = {
      caption: formData.get("caption"),
      content: formData.get("content"),
    };
    console.log("newPostData: ", newPostData);

    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPostData),
    };

    try {
      const response = await fetch(
        "http://localhost:3000/post/createPost",
        postData
      );
      if (response.ok) {
        console.log("Post created successfully");
        setCaption("");
        setImgs([]);
        onClose();
      } else {
        console.error("Failed to create post:", response.status);
      }
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  // const renderImages = () => {
  //   if (imgs.length >= 2) {
  //     return (
  //       <div style={{ display: "flex" }}>
  //         <Image
  //           src={imgs[0].preview}
  //           alt="Preview"
  //           style={{ width: "60%", height: "auto" }}
  //         />
  //         <div
  //           style={{ width: "40%", display: "flex", flexDirection: "column" }}
  //         >
  //           {imgs.slice(1).map((img, index) => (
  //             <Image
  //               key={index}
  //               src={img.preview}
  //               alt="Preview"
  //               style={{ width: "100%", height: "50%" }}
  //             />
  //           ))}
  //         </div>
  //       </div>
  //     );
  //   } else {
  //     // Return single image or no image layout here
  //     return imgs.map((img, index) => (
  //       <Image
  //         key={index}
  //         src={img.preview}
  //         alt="Preview"
  //         style={{ width: "100%", height: "auto" }}
  //       />
  //     ));
  //   }
  // };

  return (
    <div className="rounded-lg bg-white flex flex-col p-3 px-4 shadow">
      <div className="flex items-center space-x-2 border-b pb-3 mb-2">
        <div className="shrink-0 ml-6">
          <Avatar size="sm" className="mr-2" />
        </div>

        <div className="flex-grow">
          <Button
            onClick={onOpen}
            justifyContent="flex-start"
            borderRadius="4xl"
            className="hover:bg-gray-200 focus:bg-gray-100 bg-gray-100 text-gray-400 rounded-full h-10 w-full"
          >
            What's on your mind, {user?.fullName}?
          </Button>
        </div>
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              Create post
            </ModalHeader>
            <Divider />
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={handlePost}>
                <div className="flex items-center ml-5">
                  <Avatar
                    size="sm"
                    // src={user?.avatarUrl || "path/to/default/avatar.jpg"}
                  />
                  <div className="ml-3">
                    <p className="font-semibold">{user?.fullName}username</p>
                    {/* <div className="flex">
                      <p className="text-xs">3 hours ago</p>
                      <BiWorld className="ml-1" />
                    </div> */}
                    <Box
                      className="flex items-center justify-center"
                      as="button"
                      height="24px"
                      lineHeight="1.2"
                      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                      border="1px"
                      px="8px"
                      borderRadius="2px"
                      fontSize="14px"
                      fontWeight="semibold"
                      bg="#f5f6f7"
                      borderColor="#ccd0d5"
                      color="#4b4f56"
                      _hover={{ bg: "#ebedf0" }}
                      _active={{
                        bg: "#dddfe2",
                        transform: "scale(0.98)",
                        borderColor: "#bec3c9",
                      }}
                      _focus={{
                        boxShadow:
                          "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                      }}
                    >
                      <BiWorld className="mr-1" />
                      <span className="">Public</span>
                    </Box>
                  </div>
                </div>
                <Input
                  id="caption"
                  name="caption"
                  variant="unstyled"
                  placeholder={`What's on your mind, ${user?.fullName}?`}
                  className="mb-10"
                />

                <Input
                  className="flex justify-center items-center"
                  type="file"
                  name="content"
                  id="file-input"
                  onChange={handlePreviewImg}
                  hidden
                />
                {/* {imgs && (
                  <Image
                    mt={4}
                    src={imgs.preview}
                    alt="Preview"
                    boxSize="80%"
                    objectFit="cover"
                  />
                )} */}
                <div>
                  {imgs.map((img, index) => (
                    <img
                      className="flex"
                      key={index}
                      src={URL.createObjectURL(img)}
                      alt="#"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  ))}
                </div>
                <div className="flex items-center border bg-white p-2 rounded-lg border-black">
                  <Button
                    className="font-semibold text-black"
                    onClick={() =>
                      document.getElementById("file-input").click()
                    }
                  >
                    Add to your post
                  </Button>
                  <div className="ml-auto flex mr-3">
                    <div className="flex items-center mr-3">
                      <div className="w-7 h-7">
                        <Image
                          src="../../../../public/images/camera.png"
                          alt="#"
                        />
                      </div>
                    </div>
                    <div className="flex items-center mr-3">
                      <div className="w-7 h-7">
                        <Image
                          src="../../../../public/images/picture.png"
                          alt="#"
                          onClick={() =>
                            document.getElementById("file-input").click()
                          }
                        />
                        <input type="file" className="hidden" />
                      </div>
                    </div>

                    <div className="flex items-center mr-2">
                      <div className="w-7 h-7">
                        <Image
                          src="../../../../public/images/smile.png"
                          alt="#"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  type="submit"
                  colorScheme="messenger"
                  width="100%"
                  className="mt-4"
                >
                  Post
                </Button>
              </form>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
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
  );
};
