"use client"
import React from "react";
import ContactSupportSectionDashboard from "./ContactSupportSectionDashboard";

const ContactSupportSection = () => {
  return (
    <div className="bg-[#F8FAFB] p-10 h-[calc(100vh-82px)] overflow-auto">
      <h2 className="text-4xl font-semibold">Contact Support</h2>
      <p className="text-[#949494] py-4">
        Have questions or need assistance? Reach out to us, and we’ll be happy
        to help!
      </p>
      <ContactSupportSectionDashboard />
    </div>
  );
};

export default ContactSupportSection;
