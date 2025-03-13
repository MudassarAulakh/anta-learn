"use client";
import React from "react";
import { IoMdDoneAll } from "react-icons/io";
import NotificationModalCardSection from "./NotificationModalCardSection";

const NotificationModal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 w-full h-full bg-black/65 transition-opacity ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } flex justify-end`}
      onClick={onClose} // Close when clicking on the background
    >
      {/* Left 70% Click Area (Closes Modal) */}
      <div className="w-[70%] h-full" onClick={onClose}></div>

      {/* Right-Side Notification Modal */}
      <div
        className={`h-full w-[30%] bg-white shadow-lg py-6 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <div className="flex justify-between items-center px-5 mb-4">
          <span className="text-lg font-semibold">Notification</span>
          <button className="flex items-center gap-2 text-blue-700 font-semibold">
            <IoMdDoneAll /> Mark all as read
          </button>
        </div>
       <div>
        <NotificationModalCardSection />
       </div>
      </div>
    </div>
  );
};

export default NotificationModal;
