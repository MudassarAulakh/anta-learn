"use client";
import { Button } from "@/components/ui/button";
import { FaGreaterThan } from "react-icons/fa6";
import React from "react";

const AnalyticsDashboard = () => {
  return (
    <div>
      <div className="flex justify-between items-center ">
        <h2 className="text-3xl font-semibold">Detailed Analytics</h2>
        <Button className="bg-[#13123D] cursor-pointer text-white">
          Export Analytics Data
          <span className="p-2 bg-white text-black rounded-lg">
            <FaGreaterThan />
          </span>
        </Button>
      </div>
      <p className="text-[13px] text-gray-400">
        In-depth data and visualizations to analyze traffic, user engagement,
        and content performance.
      </p>
      <div className="py-4 text-2xl font-semibold">Traffic Overview</div>
    </div>
  );
};

export default AnalyticsDashboard;
