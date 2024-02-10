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
    { name: "Cactus", uv: 10, pv: 3000, amt: 90 },
    { name: "Christmas", uv: 20, pv: 3000, amt: 10 },
    { name: "Cactus", uv: 40, pv: 3000, amt: 90 },
    { name: "Cactus", uv: 10, pv: 3000, amt: 90 },
    { name: "Cactus", uv: 80, pv: 3000, amt: 90 },
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
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // Custom label rendering for Pie Chart
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
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
        <div className="">{renderLineChart}</div>
        {renderPieChart}
      </div>
    </section>
  );
};

export default Statistics;
