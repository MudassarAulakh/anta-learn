"use client";

import { FiSearch } from "react-icons/fi";
import { IoMicOutline, IoNotificationsOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";
import { FaGreaterThan } from "react-icons/fa6";
import { Button } from "../ui/button";
import NotificationModal from "../Admin/NotificationModal/NotificationModal";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const isAdminPage = pathname === "/admin" || pathname === "/admin/analytics";
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className="flex w-[96%] mx-auto justify-between items-center py-5">
        <div className="flex items-center gap-2">
          <GiHamburgerMenu className="text-xl" />
          <img
            className="w-auto h-5 object-cover"
            src="/navbar/academy-logo-filled.png"
            alt="AntaLearn Logo"
          />
          <p className="font-bold">AntaLearn</p>
        </div>
        <div className="flex border justify-between rounded-sm items-center border-gray-300 py-2 px-3 w-[70%]">
          <FiSearch className="text-xl text-gray-500" />
          <input
            type="text"
            placeholder="What do you want to learn today?"
            className="focus:outline-none w-[90%] bg-transparent"
          />
          <IoMicOutline className="text-xl text-gray-500" />
        </div>
        <div className="flex items-center gap-4">
          {isAdminPage ? (
            <>
              {/* Open Modal on Click */}
              <IoNotificationsOutline
                className="text-2xl text-gray-600 cursor-pointer"
                onClick={() => setOpenModal(true)}
              />
              <img
                className="w-auto h-8 object-cover"
                src="/admin/admin-logo.png"
                alt="Admin Logo"
              />
            </>
          ) : (
            <Button className="bg-black text-white">
              Login
              <span className="p-2 bg-white text-black rounded-lg">
                <FaGreaterThan />
              </span>
            </Button>
          )}
        </div>
      </div>

      {/* Modal Component */}
      <NotificationModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default Navbar;
