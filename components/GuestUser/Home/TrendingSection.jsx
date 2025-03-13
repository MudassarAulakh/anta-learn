"use client"
import React from "react";
import TrendingSectionArray from "./TrendingSectionArray";

const TrendingSection = () => {
  return (
   <div className="rounded-lg bg-white p-4">
   <div>
    <h2 className="font-bold text-xl">Trending</h2>
   </div>
   <div className="w-full grid grid-cols-3 items-center py-5 gap-6">
      {TrendingSectionArray.map((item, index) => (
        <div key={index} className="flex flex-col gap-2">
          <img src={item.img} alt={item.title} />
          <h3>{item.title}</h3>
          <div className="flex gap-3">
            <img src={item.channelLogo} alt="Channel Logo" className="w-12" />
          <div>
          <span>{item.name}</span>
          <p>{item.views}</p>
          </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default TrendingSection;
