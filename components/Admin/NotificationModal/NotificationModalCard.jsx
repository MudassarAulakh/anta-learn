"use client"
import React from "react";

const NotificationCard = ({ img, title, paragraph, date }) => {
  return (
    <div className="flex items-start gap-4 bg-white p-4 border-t border-t-gray-300">
      <img src={img} alt="Notification" className="w-10 h-10 rounded-full object-cover" />
      <div>
        <h3 className=" font-semibold text-gray-800">{title}</h3>
        <p className="text-[12px] text-gray-600 mt-1">{paragraph}</p>
        <span className="text-xs text-gray-500 mt-2 block">{date}</span>
      </div>
    </div>
  );
};

export default NotificationCard;
