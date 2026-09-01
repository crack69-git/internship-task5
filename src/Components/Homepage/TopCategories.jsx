import React from "react";
import StraightAnglePieChart from "./StraightAnglePieChart";

const TopCategories = () => {
  return (
    <div className="col-span-2 max-md:col-span-5 border rounded-2xl p-4">
      <h4 className="text-xl font-bold">Top Categories</h4>
      <p className="text-gray-500 text-sm mb-4">Revenue by Category</p>
      <StraightAnglePieChart />
      <div className="grid max-md:grid-cols-3 max-[1260px]:grid-cols-2 grid-cols-3 gap-4 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#0088FE]"></div>
          <p>Electricity</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#00C49F]"></div>
          <p>Apparel</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#FFBB28]"></div>
          <p>Home & Living</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#FF8042]"></div>
          <p>Hardware</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#AF19FF]"></div>
          <p>Fashion</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#FF4560]"></div>
          <p>Others</p>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
