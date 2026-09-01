import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";

const TopCustomer = () => {
  return (
    <div className="col-span-2 border rounded-lg p-4">
      <h4>top customer</h4>
      <p>Revenue by Customer</p>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4 mt-4">
          <p className="bg-red-100 p-3 font-bold text-red-700 rounded-full">
            OM
          </p>
          <div>
            <p>Jhon Doe</p>
            <p>jhondhoe@example.com</p>
          </div>
          <div>
            <p>$1,000</p>
            <p>24 Orders</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 mt-4">
          <p className="bg-green-100 p-3 font-bold text-green-700 rounded-full">
            GM
          </p>
          <div>
            <p>Ethar Tuner</p>
            <p>ethartuner@example.com</p>
          </div>
          <div>
            <p>$900</p>
            <p>18 Orders</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 mt-4">
          <p className="bg-yellow-100 p-3 font-bold text-yellow-700 rounded-full">
            LM
          </p>
          <div>
            <p>Lamine Yamal</p>
            <p>lamineyamal@example.com</p>
          </div>
          <div>
            <p>$500</p>
            <p>10 Orders</p>
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
