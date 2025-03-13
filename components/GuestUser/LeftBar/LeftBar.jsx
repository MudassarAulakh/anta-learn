"use client";
import Link from "next/link";
import React from "react";

const LeftBAr = () => {
  return (
    <div className="w-full flex flex-col gap-3 bg-white px-6 text-left">
      <Link href={"/"} className="flex items-center gap-6 hover:bg-[#F0F0FA] cursor-pointer rounded-xl p-2">
        <span>
          <img src="/navbar/home-filled.png" />
        </span>
        Home
      </Link>
      <Link href={"/levels"} className="flex items-center gap-6 hover:bg-[#F0F0FA] cursor-pointer rounded-xl p-2">
        <span>
          <img src="/navbar/levels.png" />
        </span>
        Levels
      </Link>
      <Link href={"/categories"} className="flex items-center gap-6 hover:bg-[#F0F0FA] cursor-pointer rounded-xl p-2">
        <span>
          <img src="/navbar/categories.png" />
        </span>
        Categories
      </Link>
      <Link href={"/about"} className="flex items-center gap-6 hover:bg-[#F0F0FA] cursor-pointer rounded-xl p-2">
        <span>
          <img src="/navbar/about.png" />
        </span>
        About Us
      </Link>
      <Link href={"/contact-support"} className="flex items-center gap-6 hover:bg-[#F0F0FA] cursor-pointer rounded-xl p-2">
        <span>
          <img src="/navbar/contact-support.png" />
        </span>
        Contact Support{" "}
      </Link>
      <div className="flex items-center gap-6 hover:bg-[#F0F0FA] cursor-pointer rounded-xl p-2">
        <span>
          <img src="/navbar/star.png" />
        </span>
        Feedback
      </div>
    </div>
  );
};

export default LeftBAr;
