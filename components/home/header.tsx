import React from "react";
import localFont from "next/font/local";

const akira = localFont({
  src: "/font/Akira Expanded Demo.woff2",
});

const Header = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <p
        className={`xl:text-7xl md:text-5xl  text-4xl font-bold border-b border-emerald-500 ${akira.className}`}
      >
        Edit
        <span className="bg-gradient-to-tl pl-2 from-[#f2c892] to-[#9b9b16] text-transparent bg-clip-text  ">
          Ease
        </span>
      </p>
    </div>
  );
};

export default Header;
