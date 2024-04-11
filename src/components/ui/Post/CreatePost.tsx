import { Avatar } from "@chakra-ui/avatar";
import {
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
              <form>
                <div className="flex items-center ml-5">
                  <Avatar
                    size="sm"
                    // src={user?.avatarUrl || "path/to/default/avatar.jpg"}
                  />
                  <div className="ml-3">
                    <p className="font-bold">{user?.fullName}username</p>
                    <div className="flex">
                      <p className="text-xs">3 hours ago</p>
                      <BiWorld className="ml-1" />
                    </div>
                  </div>
                </div>

                <Input
                  type="file"
                  id="file-input"
                  multiple
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
                    <Image
                      className="flex"
                      key={index}
                      mt={4}
                      src={img.preview}
                      alt="Preview"
                      boxSize="80%"
                      objectFit="cover"
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
              </form>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" onClick={handleClick} width="100%">
                Post
              </Button>
            </ModalFooter>
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
