import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

import { LineChart, Line, CartesianGrid } from "recharts";

const Statistics = () => {
  // ========================Line Chart=========================================
  const data = [
    { name: "January", uv: 40, pv: 3000, amt: 90 },
    { name: "February", uv: 20, pv: 3000, amt: 10 },
    { name: "March", uv: 40, pv: 3000, amt: 90 },
    { name: "April", uv: 10, pv: 3000, amt: 90 },
    { name: "May", uv: 80, pv: 3000, amt: 90 },
    { name: "June", uv: 60, pv: 3000, amt: 90 },
    { name: "July", uv: 30, pv: 3000, amt: 90 },
    { name: "August", uv: 80, pv: 3000, amt: 90 },
    { name: "September", uv: 90, pv: 3000, amt: 90 },
    { name: "October", uv: 30, pv: 3000, amt: 90 },
    { name: "November", uv: 40, pv: 3000, amt: 90 },
    { name: "December", uv: 100, pv: 3000, amt: 90 },
  ];

  const renderLineChart = (
    <LineChart width={600} height={300} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  );

  // ==============================Pie chart===================================
  // Pie Chart data and colors
  const Piedata = [
    { name: "Indoor", value: 400 },
    { name: "Outdoor", value: 300 },
    { name: "Palm", value: 500 },
    { name: "Christmas", value: 200 },
    { name: "Cactus", value: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A020F0"];

  // Custom label rendering for Pie Chart
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
    const { name } = Piedata[index];
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${name}: ${(percent * 100).toFixed(0)}%`} {/* Include name */}
      </text>
    );
  };

  const renderPieChart = (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={Piedata}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
  //   =================================================================
  return (
    <section>
      <div className="flex items-center flex-col lg:flex-row">
        <div className="">
          <div className="text-white px-16 mb-4 mt-2 font-bold text-2xl">
            <h1>Revenue</h1>
          </div>
          {renderLineChart}
        </div>
        {renderPieChart}{" "}
        <span className="text-white lg:mr-12 font-bold text-2xl">
          Categories
        </span>
      </div>
    </section>
  );
};

export default Statistics;
