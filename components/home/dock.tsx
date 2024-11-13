"use client";

import {
  IconBrandInstagram,
  IconHome,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import { FloatingDock } from "../ui/floating-dock";

const Dock = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/products",
    },

    {
      title: "Edit Ease",
      icon: (
        <Image
          src={"/logo.png"}
          width={500}
          height={500}
          className="w-full"
          alt="Edit Ease"
        />
      ),
      href: "#",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/ed1tease/",
    },
    // {
    //   title: "Switch Theme",
    //   icon: <ThemeToggle className="" variant={"transparent"} />,
    //   href: "",
    // },
  ];

  return (
    <>
      <div className="flex max-md:px-10 items-center md:justify-center justify-end w-full fixed bottom-10 z-[99] ">
        <FloatingDock items={links} />
      </div>
    </>
  );
};

export default Dock;
