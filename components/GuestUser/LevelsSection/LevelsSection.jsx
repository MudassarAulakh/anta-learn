"use client"
import React from "react";
import LevelsCardSection from "./LevelsCardSection";

const LevelsSection = () => {
  return (
    <div className="bg-[#F8FAFB] p-10 h-[calc(100vh-82px)] overflow-auto">
      <h2 className="text-3xl font-semibold pb-7">Levels</h2>
      <LevelsCardSection />
    </div>
  );
};

export default LevelsSection;
