"use client";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  { name: "Electricity", value: 400 },
  { name: "Apparel", value: 300 },
  { name: "Home & Living", value: 300 },
  { name: "Hardware", value: 200 },
  { name: "Fashion", value: 278 },
  { name: "Others", value: 189 },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#AF19FF",
  "#FF4560",
];

export default function StraightAnglePieChart({ isAnimationActive = true }) {
  return (
    <div className="border w-full max-w-lg h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            isAnimationActive={isAnimationActive}
            data={data}
            dataKey="value"
            startAngle={360}
            endAngle={0}
            cx="50%"
            cy="50%"
            outerRadius="80%"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
