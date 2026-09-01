import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaAngleDown, FaPlus } from "react-icons/fa";
import { MdOutlineNotificationsActive } from "react-icons/md";

const NavabarSection = () => {
  return (
    <div className="border-2 font-mukta-malar">
      <div className="w-11/12 mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" width={50} height={50} alt="Next.js Logo" />
          <p className="text-2xl font-bold font-tauri">North Star</p>
        </div>
        <div></div>
        <div className="flex items-center gap-4">
          <div className="relative cursor-pointer">
            <MdOutlineNotificationsActive size={25} />
            <div className="rounded-lg w-fit bg-yellow-900 text-white px-4 absolute -top-2 -left-13">
              12
            </div>
          </div>
          <Button className="bg-green-900 text-white">
            <FaPlus />
            ADD Product
          </Button>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/profile.jpg"
              width={50}
              height={50}
              alt="User Icon"
              objectFit="contain"
              className="rounded-full"
            />
            <FaAngleDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavabarSection;
