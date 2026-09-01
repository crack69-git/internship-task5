import { Separator } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { BsCartCheck } from "react-icons/bs";
import { FiBarChart, FiUsers } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";

const Sidebar = () => {
  const links = (
    <>
      <Link
        href="/"
        className="flex items-center gap-2 bg-green-700 rounded-md p-2 text-white"
      >
        <LuLayoutDashboard />
        Dashboard
      </Link>
      <Link href="/" className="flex items-center gap-2 rounded-md p-2 ">
        <BsCartCheck />
        Order
      </Link>
      <Link href="/" className="flex items-center gap-2 rounded-md p-2 ">
        <FiUsers />
        Customers
      </Link>
      <Link href="/" className="flex items-center gap-2 rounded-md p-2 ">
        <FiBarChart />
        Analytics
      </Link>
    </>
  );
  return (
    <div className="w-72 h-full bg-gray-50 p-4 border-r min-h-screen">
      <p>Workshop</p>
      <Separator className="my-4" />
      <div className="flex flex-col gap-2">{links}</div>
    </div>
  );
};

export default Sidebar;
