import { Button, Separator } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";

const TopCustomer = () => {
  return (
    <div className="col-span-2 max-md:col-span-5 border rounded-lg p-4">
      <h4 className="font-bold text-2xl">Top Customer</h4>
      <p className="text-gray-500">Revenue by Customer</p>
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
          <div className="flex flex-wrap items-center gap-4">
            <p className="bg-red-100 p-3 font-bold text-red-700 rounded-full">
              OM
            </p>
            <div>
              <p className="font-bold text-[16px]">Jhon Doe</p>
              <p className="text-gray-600 text-sm">jhondhoe@example.com</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600">$1,000</p>
            <p className="text-sm text-gray-600">24 Orders</p>
          </div>
        </div>
        <Separator className="my-2" />
        <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <p className="bg-green-100 p-3 font-bold text-green-700 rounded-full">
                GM
              </p>
              <div>
                <p className="font-bold text-[16px]">Ethar Tuner</p>
                <p className="text-gray-600 text-sm">ethartuner@example.com</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600">$900</p>
            <p className="text-sm text-gray-600">18 Orders</p>
          </div>
        </div>
        <Separator className="my-2" />
        <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
          <div className="flex flex-wrap items-center gap-4">
            <p className="bg-yellow-100 p-3 font-bold text-yellow-700 rounded-full">
              LM
            </p>
            <div>
              <p className="font-bold text-[16px]">Lamine Yamal</p>
              <p className="text-gray-600 text-sm">lamineyamal@example.com</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600">$500</p>
            <p className="text-sm text-gray-600">10 Orders</p>
          </div>
        </div>
        <Link href="#" className="mt-4">
          <Button variant="secondary" className="w-full">
            <HiDotsHorizontal />
            View All
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TopCustomer;
