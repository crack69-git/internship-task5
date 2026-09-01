import React from "react";
import StraightAnglePieChart from "./StraightAnglePieChart";

const TopCategories = () => {
  return (
    <div className="col-span-2 border rounded-lg p-4">
      <h4>top categories</h4>
      <p>Revenue by Category</p>
      <StraightAnglePieChart />
      <div className="grid grid-cols-3 gap-4 mt-4">
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
