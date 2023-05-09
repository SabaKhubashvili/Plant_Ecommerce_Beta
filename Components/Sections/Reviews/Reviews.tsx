import { Container } from "@/Components/Container";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { ReviewsConst } from "@/constants";
import { Star } from "@/public/svg";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";

export const Reviews = () => {
  const isAboveLargeScreens = useMediaQuery('(min-width:1024px)')
  return (
    <section className="pt-16 w-full">
      <Container>
        <div className="w-full py-20">
          <Swiper
            slidesPerView={isAboveLargeScreens ? 2 : 1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            {
                ReviewsConst.map((review,index)=>(

                    <SwiperSlide key={index}
                    className="bg-[#C1DCDC] pt-[48px] px-[48px] rounded-lg cursor-grab 
                    !flex flex-col gap-4
                    relative
                    lg:max-h-[20rem] lg:pb-0 pb-[4rem]
                    ">
                            <div className="text-[#1e1e1e75]">
                                {
                                    review.review.slice(1,190) 
                                    
                                }
                                {
                                    review.review.length > 190 && (
                                        <span>...</span>
                                    )
                                }
                            </div>
                            <div className="flex justify-between items-center lg:flex-row flex-col ">
                            <div className="relative">
                          
 
                                <Image
                                    src={`/Images/Reviews/${review.image}.webp`}
                                    alt="Review"
                                    width={100}
                                    height={200}
                                    className=" h-auto max-h-[10rem] lg:w-[10rem] lg:h-[12rem] lg:max-h-none w-[10rem]
                                    "
                                    />
                                <div className="absolute top-10">
                                    <img src="/Images/Claw.webp" alt="" />
                                </div>
                            </div>
                                <div className="flex flex-col gap-0.5 flex-grow">
                                    <h3 className="font-bold">
                                        {review.name}
                                    </h3>
                                    <p className="text-[#1e1e1e80]">
                                        {review.profession}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                        <Star/>
                                        <span className="font-bold text-[19px]">
                                            {review.rating}
                                        </span>
                                </div>
                            </div>
                    </SwiperSlide>
                ))
            }

          </Swiper>
        </div>
      </Container>
    </section>
  );
};
