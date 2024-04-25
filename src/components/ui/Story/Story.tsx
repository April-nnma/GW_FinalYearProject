import { Avatar } from "@chakra-ui/avatar";
import { Box, Spinner, Image } from "@chakra-ui/react";

export const Story = () => {
  return (
    <div className=" w-full pb-5 flex space-x-[0.9px]">
      <div className="w-full h-50 flex items-center justify-center space-x-2 overflow-hidden cursor-pointer my-6">
        <Box className="w-28 h-48 relative rounded-xl shadow overflow-hidden ">
          <Image
            className="w-full h-full object-cover"
            src="https://random.imagecdn.app/250/250"
            alt="#"
          />

          <Box
            position="absolute"
            left="0"
            right="0"
            top="0"
            bottom="0"
            display="flex"
          >
            <Spinner
              className="mt-3 ml-[12px]"
              thickness="17px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="lg"
              position="absolute"
              left="0%"
              transform="translate(-50%, -50%)"
            />
            <Avatar
              size="sm"
              className="ml-[29.4px] mt-[29px]"
              position="absolute"
              transform="translate(-50%, -50%)"
            />
          </Box>
        </Box>
      </div>
      <div className="w-full h-50 flex items-center justify-center space-x-2 overflow-hidden cursor-pointer my-6">
        <Box className="w-28 h-48 relative rounded-xl shadow overflow-hidden ">
          <Image
            className="w-full h-full object-cover"
            src="https://random.imagecdn.app/250/250"
            alt="#"
          />

          <Box
            position="absolute"
            left="0"
            right="0"
            top="0"
            bottom="0"
            display="flex"
          >
            <Spinner
              className="mt-3 ml-[12px]"
              thickness="17px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="lg"
              position="absolute"
              left="0%"
              transform="translate(-50%, -50%)"
            />
            <Avatar
              size="sm"
              className="ml-[29.4px] mt-[29px]"
              position="absolute"
              transform="translate(-50%, -50%)"
            />
          </Box>
        </Box>
      </div>
      <div className="w-full h-50 flex items-center justify-center space-x-2 overflow-hidden cursor-pointer my-6">
        <Box className="w-28 h-48 relative rounded-xl shadow overflow-hidden ">
          <Image
            className="w-full h-full object-cover"
            src="https://random.imagecdn.app/250/250"
            alt="#"
          />

          <Box
            position="absolute"
            left="0"
            right="0"
            top="0"
            bottom="0"
            display="flex"
          >
            <Spinner
              className="mt-3 ml-[12px]"
              thickness="17px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="lg"
              position="absolute"
              left="0%"
              transform="translate(-50%, -50%)"
            />
            <Avatar
              size="sm"
              className="ml-[29.4px] mt-[29px]"
              position="absolute"
              transform="translate(-50%, -50%)"
            />
          </Box>
        </Box>
      </div>
      <div className="w-full h-50 flex items-center justify-center space-x-2 overflow-hidden cursor-pointer my-6">
        <Box className="w-28 h-48 relative rounded-xl shadow overflow-hidden ">
          <Image
            className="w-full h-full object-cover"
            src="https://random.imagecdn.app/250/250"
            alt="#"
          />

          <Box
            position="absolute"
            left="0"
            right="0"
            top="0"
            bottom="0"
            display="flex"
          >
            <Spinner
              className="mt-3 ml-[12px]"
              thickness="17px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="lg"
              position="absolute"
              left="0%"
              transform="translate(-50%, -50%)"
            />
            <Avatar
              size="sm"
              className="ml-[29.4px] mt-[29px]"
              position="absolute"
              transform="translate(-50%, -50%)"
            />
          </Box>
        </Box>
      </div>
      <div className="w-full h-50 flex items-center justify-center space-x-2 overflow-hidden cursor-pointer my-6">
        <Box className="w-28 h-48 relative rounded-xl shadow overflow-hidden ">
          <Image
            className="w-full h-full object-cover"
            src="https://random.imagecdn.app/250/250"
            alt="#"
          />

          <Box
            position="absolute"
            left="0"
            right="0"
            top="0"
            bottom="0"
            display="flex"
          >
            <Spinner
              className="mt-3 ml-[12px]"
              thickness="17px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="lg"
              position="absolute"
              left="0%"
              transform="translate(-50%, -50%)"
            />
            <Avatar
              size="sm"
              className="ml-[29.4px] mt-[29px]"
              position="absolute"
              transform="translate(-50%, -50%)"
            />
          </Box>
        </Box>
      </div>
    </div>
  );
};
