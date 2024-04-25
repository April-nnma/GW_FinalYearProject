import { Avatar } from "@chakra-ui/avatar";
import { Box, Spinner, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import { RootState, useAppDispatch } from "store";
import { useEffect } from "react";
import { getStoriesThunk } from "store/storyService";
import { useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
export const Story = () => {
  const dispatch = useAppDispatch();
  const { storiesList, isFetchingStories } = useSelector(
    (state: RootState) => state.storyService
  );

  useEffect(() => {
    dispatch(getStoriesThunk());
  }, [dispatch]);

  useEffect(() => {
    const handleStoryCreated = () => {
      dispatch(getStoriesThunk());
    };
    document.addEventListener("storyCreated", handleStoryCreated);
    return () => {
      document.removeEventListener("storyCreated", handleStoryCreated);
    };
  }, [dispatch]);

  if (isFetchingStories) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <Swiper
      breakpoints={{
        340: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Navigation]}
      className="max-m-[90%] lg:max-w-[80%]"
    >
      {storiesList?.slice().reverse().map((story) => (
        <SwiperSlide key={story.story_id}>
          <div className=" pb-5 flex">
            <div className="w-full h-50 flex items-center justify-center space-x-2 overflow-hidden cursor-pointer my-6">
              <Box className="w-28 h-48 relative rounded-xl shadow overflow-hidden">
                <Image
                  className="w-full h-full object-cover"
                  src={story.content_story}
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
                  <p className="text-white ml-[50px] mt-[5px]">
                    {story.fullname_story}
                  </p>
                </Box>
              </Box>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
// import { useEffect } from "react";
// import { Avatar, Box, Image, Spinner } from "@chakra-ui/react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { RootState, useAppDispatch } from "store";
// import { getStoriesThunk } from "store/storyService";
// import { useSelector } from "react-redux";

// import "swiper/css"; // core Swiper styles
// import "swiper/css/navigation"; // Swiper Navigation module styles
// import "swiper/css/pagination"; // Swiper Pagination module styles

// export const Story = () => {
//   const dispatch = useAppDispatch();
//   const { storiesList, isFetchingStories } = useSelector(
//     (state: RootState) => state.storyService
//   );

//   useEffect(() => {
//     dispatch(getStoriesThunk());
//   }, [dispatch]);

//   useEffect(() => {
//     const handleStoryCreated = () => {
//       dispatch(getStoriesThunk());
//     };
//     document.addEventListener("storyCreated", handleStoryCreated);
//     return () => {
//       document.removeEventListener("storyCreated", handleStoryCreated);
//     };
//   }, [dispatch]);

//   if (isFetchingStories) {
//     return <div className="text-center">Loading...</div>;
//   }

//   // Helper function to create chunks of stories
//   const chunkStories = (stories, chunkSize) => {
//     const chunks = [];
//     for (let i = 0; i < stories.length; i += chunkSize) {
//       chunks.push(stories.slice(i, i + chunkSize));
//     }
//     return chunks;
//   };

//   const storyChunks = chunkStories(storiesList, 4);

//   return (
//     <Swiper
//       slidesPerView={1} // Each chunk is one slide
//       navigation={true}
//       pagination={{ clickable: true }}
//       modules={[Navigation]}
//       className="mySwiper"
//     >
//       {storyChunks.map((chunk, index) => (
//         <SwiperSlide key={index}>
//           <div className="flex justify-around">
//             {" "}
//             {/* Adjust this class as needed */}
//             {chunk.map((story) => (
//               <Box
//                 key={story.story_id}
//                 className="w-28 h-48 relative rounded-xl shadow overflow-hidden mt-4"
//               >
//                 <Image
//                   className="w-full h-full object-cover"
//                   src={story.content_story}
//                   alt="#"
//                 />
//                 {/* ... Rest of your story structure */}
//               </Box>
//             ))}
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };
