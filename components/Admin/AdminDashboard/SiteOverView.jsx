"use client";
import React from "react";
import { MdArrowDropDown } from "react-icons/md";

const siteOverviewData = [
  { label: "Total Visits", value: "12,500" },
  { label: "Unique Visitors", value: "9,800" },
  { label: "Bounce Rate", value: "40%" },
  { label: "Total Videos", value: "1,200" },
  { label: "Total Registered Users", value: "8,000" },
];

const smallOverviewData = [
  { label: "Total Visits", value: "12,500" },
  { label: "Unique Visitors", value: "9,800" },
];

const SiteOverView = () => {
  return (
    <div className="w-full mx-auto flex flex-col gap-6">
      {/* First Overview Section */}
      <div className="flex flex-col gap-5 bg-white p-4 rounded-2xl">
        <h2 className="text-2xl font-semibold">Site Overview</h2>
        <button className="flex justify-between px-4 items-center w-[50%] bg-[#F8FAFB] text-[13px] py-1 rounded-full text-center text-blue-600">
          Last 7 days{" "}
          <span className="text-xl">
            <MdArrowDropDown />
          </span>
        </button>
        {siteOverviewData.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <p className="text-[#949494]">{item.label}</p>
            <p className="font-semibold">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Second Overview Section */}
      <div className="p-4 flex flex-col gap-4 bg-white rounded-2xl">
        <h2 className="text-2xl font-semibold">Site Overview</h2>
        <button className="flex justify-between px-4 items-center w-[50%] bg-[#F8FAFB] text-[13px] py-1 rounded-full text-center text-blue-600">
          Last 7 days{" "}
          <span className="text-xl">
            <MdArrowDropDown />
          </span>
        </button>
        {smallOverviewData.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <p className="text-[#949494]">{item.label}</p>
            <p className="font-semibold">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SiteOverView;
