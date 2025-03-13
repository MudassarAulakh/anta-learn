"use client"
import React from "react";

const AboutSectionDashboard = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-4xl font-semibold">
          Learn Anything at Your Own Pace
        </h2>
        <p className="text-[#949494] py-6">
          Our mission is to ensure everyone has support for doing their <br />
          schoolwork, whether they are just starting to learn or need a <br />
          refresher on certain topics.
        </p>
        <p className="text-[#949494] pb-4">
          © 2024 AntaLearn. All rights reserved.
        </p>
        <div className="font-bold py-5"> Quick Links:</div>
        <div className="text-blue-600">
          <p className="cursor-pointer hover:underline">Home</p>
          <p className="cursor-pointer hover:underline">Become a Creator</p>
          <p className="cursor-pointer hover:underline">Contact Us</p>
          <p className="cursor-pointer hover:underline">Terms & Conditions</p>
          <p className="cursor-pointer hover:underline">Privacy Policy</p>
          <p className="cursor-pointer hover:underline">Support</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src="/home/about-us.png" alt="" />
      </div>
    </div>
  );
};

export default AboutSectionDashboard;
