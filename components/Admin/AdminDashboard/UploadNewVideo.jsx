"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { MdSupervisorAccount } from "react-icons/md";
import { RiFlag2Fill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import CategoryModal from "./CategoryModal "; // Import the modal

const UploadNewVideo = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-4 py-4 rounded-2xl">
        <div className="flex gap-2 justify-between items-center bg-white p-4 rounded-2xl">
          <div>
            <p className="py-3">Upload New Video</p>
            <Button className="bg-black cursor-pointer text-white text-center pr-4 text-[12px]">Upload</Button>
          </div>
          <img src="/admin/upload-video.png" alt="" />
        </div>
        <div className="flex gap-2 justify-between items-center bg-white p-4 rounded-2xl">
          <img src="/admin/create-category.png" alt="" />
          <div>
            <p className="py-3">Create New Category</p>
            <Button onClick={() => setShowModal(true)} className="bg-black cursor-pointer text-white text-center pr-4 text-[12px]">Create</Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 py-4">
        <div className="flex flex-col gap-4 bg-white px-4 py-7 rounded-2xl">
          <div className="flex justify-between items-center gap-3">
            <MdSupervisorAccount className="text-blue-600 text-xl" />
            <p>Approve/Reject Creator Accounts</p>
          </div>
          <div className="bg-[#FFFAEB] rounded-full py-2 px-3 text-[#C92F3B] w-auto text-center">
            4 Pending for Review
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-white px-4 py-7 rounded-2xl">
          <div className="flex justify-between items-center gap-3">
            <RiFlag2Fill className="text-blue-600 text-xl" />
            <p>Approve/Reject Creator Accounts</p>
          </div>
          <div className="bg-[#FFFAEB] rounded-full py-2 px-3 text-[#C92F3B] w-auto text-center">
            3 Pending for Review
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-white px-4 py-7 rounded-2xl">
          <div className="flex justify-between items-center gap-3">
            <IoMdMail className="text-blue-600 text-xl" />
            <p>Approve/Reject Creator Accounts</p>
          </div>
          <div className="bg-[#FFFAEB] rounded-full py-2 px-3 text-[#C92F3B] w-auto text-center">
            1 Request Unread
          </div>
        </div>
      </div>
      {showModal && <CategoryModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default UploadNewVideo;
