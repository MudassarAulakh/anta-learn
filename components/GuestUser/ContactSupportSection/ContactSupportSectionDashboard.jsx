"use client";
import React from "react";
import { FaBold, FaItalic, FaUnderline, FaPaperclip } from "react-icons/fa";
import { GrTextAlignLeft } from "react-icons/gr";
import { GrTextAlignCenter } from "react-icons/gr";
import { GrTextAlignRight } from "react-icons/gr";
import { Button } from "../../ui/button";
import { FaGreaterThan } from "react-icons/fa6";


const ContactSupportSectionDashboard = () => {
  return (
    <div className="bg-white py-12 px-16 flex flex-col gap-4 shadow rounded-xl">
      <div className="flex justify-between items-center gap-5">
        <input
          className="px-3 py-2 focus:outline-none rounded-xl w-full border border-gray-400"
          type="text"
          placeholder="First Name"
        />
        <input
          className="px-3 py-2 focus:outline-none rounded-xl w-full border border-gray-400"
          type="text"
          placeholder="Last Name"
        />
      </div>
      <input
        className="px-3 py-2 focus:outline-none rounded-xl w-full border border-gray-400"
        type="email"
        placeholder="Email"
      />
      <input
        className="px-3 py-2 focus:outline-none rounded-xl w-full border border-gray-400"
        type="text"
        placeholder="Title"
      />
      <div className="border border-gray-400 rounded-lg p-3 w-full">
        {/* Toolbar */}
        <div className="flex gap-8 border-b border-b-gray-400 pb-2">
          <button className="text-gray-600 hover:text-black">
            <FaBold />
          </button>
          <button className="text-gray-600 hover:text-black">
            <FaItalic />
          </button>
          <button className="text-gray-600 hover:text-black">
            <FaUnderline />
          </button>
          <button className="text-blue-600 font-bold pl-5 hover:text-black">
            <GrTextAlignLeft />
          </button>
          <button className="text-gray-600 hover:text-black">
            <GrTextAlignCenter />
          </button>
          <button className="text-gray-600 pr-5 hover:text-black">
            <GrTextAlignRight />
          </button>
          <button className="text-gray-600 hover:text-black">
            <FaPaperclip />
          </button>
        </div>

        {/* Textarea */}
        <textarea
          className="w-full h-24 p-2 border-none outline-none resize-none"
          placeholder="Your Message..."
        ></textarea>
      </div>
      <div className="flex justify-end items-center py-4">
        <Button className="cursor-pointer text-white bg-black">
          Start Learning
          <span className="p-2 bg-white text-black rounded-lg">
            <FaGreaterThan />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default ContactSupportSectionDashboard;
