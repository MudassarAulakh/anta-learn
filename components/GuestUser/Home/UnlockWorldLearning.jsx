"use client"
import React from "react";
import { Button } from "../../ui/button";
import { FaGreaterThan } from "react-icons/fa6";
import TrendingSection from "./TrendingSection";
import RecommendationsSection from "./RecommendationsSection";

const UnlockWorldLearning = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-7">
        <div className="bg-[#716DF0] px-6 pt-6 flex flex-col w-[100%] md:flex-row justify-between items-center rounded-lg">
          <div className="w-full flex flex-col gap-2 md:w-[75%] text-center md:text-left">
            <h2 className="text-white text-4xl md:text-5xl font-bold">
              Unlock a World of Learning
            </h2>
            <div className="text-white mt-3 leading-relaxed">
              Explore engaging videos across various subjects and levels,
              tailored to your learning <br /> needs. Dive into content that
              interests you and discover more along the way.
            </div>
            <div className="w-[10%] py-4">
              <Button className="cursor-pointer text-white bg-[#13123D]">
                Start Learning
                <span className="p-2 bg-white text-black rounded-lg">
                  <FaGreaterThan />
                </span>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-[25%] flex justify-center">
            <img src="./home/undraw_online.png" className="w-[80%]" />
          </div>
        </div>
      <TrendingSection />
      <RecommendationsSection />
      </div>
    </>
  );
};

export default UnlockWorldLearning;
