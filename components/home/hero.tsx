import React from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full bg-grid-white/5 max-sm:h-[50vh]">
      <div className="max-w-screen-2xl px-2 py-4 sm:p-8  md:px-12 lg:px-20 xl:px-24 2xl:px-4 mx-auto ">
        <div className="md:my-16 my-20">
          <div className="flex items-center justify-center text-center flex-col">
            <TextGenerateEffect
              words="A Graphic Designing Agency →"
              wordsClassName="md:text-5xl text-2xl font-mono !font-black"
            />
            <TextGenerateEffect
              words="That Focuses On Your Needs and Gives You The Best Results"
              wordsClassName="md:text-2xl text-sm"
            />
          </div>

          <div className="w-full h-full bg-red-500  relative">
            <Image
              src={"/Images/editease-hero.jpg"}
              alt="Edit Ease"
              fill
              className=""
            />
          </div>

          <div className="relative w-full  py-10 mx-auto flex justify-center">
            <div className="bg-gradient-to-r from-red-500 via-amber-600 to-yellow-500 w-[60%] h-[60%] absolute  blur-[200px] -z-30" />
            <div className="absolute z-40 top-10 left-1 flex">
              <Image
                src={"/icons/star.svg"}
                alt="star"
                width={20}
                height={20}
                className="animate-bounce"
              />
              <Image
                src={"/icons/star.svg"}
                alt="star"
                width={20}
                height={20}
                className="animate-bounce mt-3 ml-5"
              />
              <Image
                src={"/icons/star.svg"}
                alt="star"
                width={20}
                height={20}
                className="animate-bounce mt-1 ml-8"
              />
            </div>
            <Image
              src={"/Images/editease-hero.jpg"}
              alt="landing image"
              height={2000}
              width={2000}
              className="relative object-cover z-30 xl:w-full w-11/12  rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
