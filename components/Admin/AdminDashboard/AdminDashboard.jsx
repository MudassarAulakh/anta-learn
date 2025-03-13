"use client";
import React from "react";
import UploadNewVideo from "./UploadNewVideo";
import SiteOverView from "./SiteOverView";
import { Button } from "@/components/ui/button";

const AdminDashboard = () => {
  return (
    <div className="bg-[#F8FAFB]  p-10 h-[calc(100vh-82px)] overflow-auto">
     <div className="flex justify-between items-center gap-[130px]"> 
     <div className="w-[65%]">
        <h2 className="text-3xl font-semibold">Dashboard Overview</h2>
        <p className="text-[#949494] py-3">
          Quick insights and key metrics to monitor site performance and manage
          recent activities.
        </p>
        <h2 className="font-semibold text-2xl">Quick Actions</h2>
        <div>
          <UploadNewVideo />
        </div>
      </div>
      <div className="w-[35%]">
        <SiteOverView />
      </div>
     </div>
     <div className="flex justify-end items-end">
      <Button className="bg-black text-white pr-4 cursor-pointer">Detailed Analytics</Button>
     </div>
    </div>
  );
};

export default AdminDashboard;
