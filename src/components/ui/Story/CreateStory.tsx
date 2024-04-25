import {
  Avatar,
  Button,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { FaRegCircleXmark } from "react-icons/fa6";
import { useAuth } from "hooks";
import { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa";
import { storyService } from "services";
import { sleep } from "utils";
import { toast } from "react-toastify";
import { AiOutlineLoading, AiOutlinePlus } from "react-icons/ai";

interface ImageFile extends File {
  preview: string;
}
export const CreateStory = () => {
  const { user } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);
  const [imgs, setImgs] = useState<ImageFile[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const isImageSizeValid = (file: File) => {
    const minSize = 10;
    const maxSize = 10 * 1024 * 1024;

    return file.size >= minSize && file.size <= maxSize;
  };

  const handlePost = async (event) => {
    try {
      setIsLoading(true);
      event.preventDefault();
      if (user) {
        if (imgs.length > 0) {
          const isSizeValid = imgs.every(isImageSizeValid);
          if (!isSizeValid) {
            toast.error(
              "Image size is too large. Please choose another image."
            );
            return;
          }
        }
        const formData = new FormData();
        formData.append("user_id_story", user.user_id.toString());
        if (imgs.length > 0) {
          imgs.map((img) => formData.append("file", img));
        }
        await sleep();
        const response = await storyService.createStory(formData);
        if (response) {
          toast("Post created successfully");
          setImgs([]);
          document.dispatchEvent(new Event("storyCreated"));
          onClose();
        }
      } else {
        toast.error("User information is missing. Please try again later.");
      }
    } catch (error) {
      console.error("Error while posting:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleRemoveImage = (index) => {
    const newImgs = [...imgs];
    newImgs.splice(index, 1);
    setImgs(newImgs);
  };
  return (
    <div className="w-full h-50 flex space-x-2 overflow-hidden cursor-pointer my-6 rounded-xl">
      <div className="w-28 h-48 relative shadow ">
        <Image
          className="w-full h-full"
          src="https://random.imagecdn.app/250/250"
          alt="#"
        />
        <div
          className="w-full absolute flex justify-center items-center"
          style={{ bottom: "13%" }}
        >
          <Button
            onClick={onOpen}
            colorScheme="messenger"
            size="md"
            borderRadius="full"
            className="z-50"
            p={2}
            border="4px solid white"
            iconSpacing={3}
          >
            <FaPlus className="text-white" />
          </Button>
          <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <form onSubmit={handlePost}>
                  <div className="flex items-center justify-center ml-5">
                    <Avatar
                      size="sm"
                      src="https://random.imagecdn.app/250/250"
                    />
                    <div className="ml-3">
                      <p className="font-semibold">{user?.fullname}</p>
                    </div>
                  </div>
                  <Input
                    className="flex justify-center items-center"
                    type="file"
                    name="content"
                    id="file-input"
                    onChange={handlePreviewImg}
                    hidden
                  />
                  <div className="flex items-center justify-center relative">
                    <div className="w-7 h-7">
                      <Image
                        className=""
                        src="../../../../public/images/picture.png"
                        alt="#"
                        onClick={() =>
                          document.getElementById("file-input").click()
                        }
                      />
                      <input type="file" className="hidden absolute" />
                    </div>
                  </div>
                  <div>
                    {imgs.map((img, index) => (
                      <div key={index} className="relative">
                        <img
                          className="flex"
                          src={URL.createObjectURL(img)}
                          alt="#"
                          style={{ maxWidth: "100%", height: "auto" }}
                        />
                        <button
                          className="absolute top-0 right-0 mt-1 mr-1 rounded-full bg-gray-200 text-gray-700 p-1"
                          onClick={() => handleRemoveImage(index)}
                        >
                          <FaRegCircleXmark />
                        </button>
                      </div>
                    ))}
                  </div>

                  <Button
                    type="submit"
                    colorScheme="messenger"
                    width="100%"
                    className="mt-4"
                    isLoading={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <AiOutlineLoading className="text-white animate-spin" />
                        {" Posting"}
                      </>
                    ) : (
                      <>
                        <AiOutlinePlus className="text-white" />
                        {" Post"}
                      </>
                    )}
                  </Button>
                </form>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </ModalContent>
          </Modal>
        </div>
        <div className="bg-white z-30 absolute text-center bottom-0 p-2 pt-4 w-full h-auto ">
          <p className="text-gray-500 text-sm font-semibold">Create Story</p>
        </div>
      </div>
    </div>
  );
};
