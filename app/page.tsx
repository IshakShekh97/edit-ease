"use client";

import About from "@/components/home/about";
import Hero from "@/components/home/hero";
import Loader from "@/components/loader";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [isLoading, setisLoading] = useState<boolean | undefined>(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 4010);
  }, []);

  if (isLoading) {
    return (
      <div className="h-full w-full transition-all duration-300 relative z-[99]">
        <Loader />
      </div>
    );
  }

  return (
    <>
      {/* <Header /> */}

      <Hero />
      <div className="max-w-screen-2xl px-2 py-4 sm:p-8  md:px-12 lg:px-20 xl:px-24 2xl:px-4 mx-auto md:py-20 sm:py-10 ">
        <About />
      </div>
    </>
  );
};

export default Home;
