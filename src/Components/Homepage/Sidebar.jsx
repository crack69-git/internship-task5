import { Button, Card, Chip, SearchField, Separator } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { BsCartCheck, BsCashCoin } from "react-icons/bs";
import { FiBarChart, FiUsers } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiLogoutBoxRLine } from "react-icons/ri";

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
    <div className="flex flex-col w-72 h-full bg-gray-50 p-4 border-r border-b rounded-br-2xl min-h-screen">
      <p className="text-lg font-bold text-gray-700">Workshop</p>
      <SearchField name="search" className="mt-4">
        <SearchField.Group>
          <SearchField.SearchIcon />
          <SearchField.Input className="w-full" placeholder="Search..." />
          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>
      <Separator className="my-4" />
      <div className="flex-grow">{links}</div>
      <div>
        <Card className="w-full">
          <div className="bg-green-100 p-3 rounded-full text-green-700 w-fit">
            <BsCashCoin />
          </div>
          <Card.Header>
            <Card.Title>
              Upgrade Your Plan <Chip color="accent">Pro</Chip>
            </Card.Title>
            <Card.Description>
              Unlock advanced features and maximize your potential with our Pro
              plan.
            </Card.Description>
          </Card.Header>
          <Card.Footer>
            <Link href="#" className="w-full">
              <Button variant="secondary" className="w-full">
                Upgrade Now
              </Button>
            </Link>
          </Card.Footer>
        </Card>
        <Separator className="my-4" />
        <div className="flex items-center justify-between gap-4">
          <p className=" bg-yellow-100 text-yellow-800 border font-bold w-fit rounded-full p-2">
            JM
          </p>
          <div className="flex-grow">
            <p className="font-bold">Jason Moris</p>
            <p className="text-sm text-gray-500">Administrator</p>
          </div>
          <div className="bg-gray-100 p-2 rounded-full cursor-pointer">
            <RiLogoutBoxRLine color="red" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
