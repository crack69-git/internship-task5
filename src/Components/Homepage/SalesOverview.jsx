"use client";
import { ListBox, Select } from "@heroui/react";
import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", value: 150 },
  { month: "Feb", value: 200 },
  { month: "Mar", value: 250 },
  { month: "Apr", value: 300 },
  { month: "May", value: 350 },
  { month: "Jun", value: 400 },
  { month: "Jul", value: 450 },
  { month: "Aug", value: 500 },
  { month: "Sep", value: 550 },
  { month: "Oct", value: 580 },
  { month: "Nov", value: 590 },
  { month: "Dec", value: 600 },
];

const SalesOverview = () => {
  const filter = (
    <>
      <ListBox.Item id="revenue" textValue="Revenue">
        Revenue
        <ListBox.ItemIndicator />
      </ListBox.Item>
      <ListBox.Item id="loss" textValue="Loss">
        Loss
        <ListBox.ItemIndicator />
      </ListBox.Item>
    </>
  );
  return (
    <div className="col-span-3 max-md:col-span-5 border rounded-2xl p-4">
      <div className=" flex max-md:flex-col items-center justify-between">
        <div className="max-md:text-center">
          <h3 className="text-xl font-bold">Sales Overview</h3>
          <p className="text-gray-500 text-sm mb-2">
            Monthly Revenue Performance
          </p>
        </div>
        <Select className="w-[256px] border rounded-xl" placeholder="Filter">
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>{filter}</ListBox>
          </Select.Popover>
        </Select>
      </div>
      <div className="flex items-center justify-center mt-5">
        <LineChart data={data} width={600} height={300}>
          <CartesianGrid strokeDasharray="3 3" />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
        </LineChart>
      </div>
    </div>
  );
};

export default SalesOverview;
