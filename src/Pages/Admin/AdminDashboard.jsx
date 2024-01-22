import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FaTree, FaUsers } from "react-icons/fa6";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import UseUser from "../../Hooks/UseUser";
import UseAdmin from "../../Hooks/UseAdmin";
import UseCart from "../../Hooks/UseCart";
import UseProduct from "../../Hooks/UseProduct";

const AdminDashboard = () => {
  // =================================================================
  const [users] = UseUser();
  const [isAdmin] = UseAdmin();
  const [cart] = UseCart();
  const [products] = UseProduct();
  // =================================================================

  const data = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  ];

  const renderCustomAxisTick = (props) => {
    const { x, y, payload } = props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-45)"
        >
          {payload.value}
        </text>
      </g>
    );
  };

  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    },${y}
     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    },${y + height}
     Z`;

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill="#fff" />;
  };

  const renderBarChart = (
    <ResponsiveContainer width="60%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" tick={renderCustomAxisTick} />
        <YAxis />
        <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} />
        <Tooltip />
        <Legend />
      </BarChart>
    </ResponsiveContainer>
  );

  return (
    <>
      <section className="bg-slate-950 lg:px-72">
        {/* Box info */}
        <div className="">hello</div>
        <div className="text-white mt-6 lg:ml-12 lg:mt-12">
          <div className="flex flex-col lg:flex-row px-4 gap-4 lg:gap-2 font-bold text-xl">
            {/* Box 1 */}
            <div className="bg-green-600 rounded-lg lg:w-[170px] lg:h-[80px] py-4 px-2 shadow-md shadow-white">
              <span className="flex items-center gap-2">
                Products <FaTree />
              </span>
              ({products.length})
            </div>
            {/* Box 2 */}
            <div className="bg-orange-500 rounded-lg lg:w-[170px] lg:h-[80px] py-4 px-2 shadow-md shadow-white">
              <span className="flex items-center gap-2">
                Customers <FaUsers />
              </span>
              ({users.length})
            </div>
            {/* Box 3 */}
            <div className="bg-blue-600 rounded-lg lg:w-[170px] lg:h-[80px] py-4 px-2 shadow-md shadow-white">
              <span className="flex items-center gap-2">
                Products <FaTree />
              </span>
              ({products.length})
            </div>
            {/* Box 4 */}
            <div className="bg-red-700 rounded-lg lg:w-[170px] lg:h-[80px] py-4 px-2 shadow-md shadow-white">
              <span className="flex items-center gap-2">
                Messages <BiSolidMessageRoundedDetail />
              </span>
              ({products.length})
            </div>
          </div>
        </div>
        {/* Graph info */}
        <div className="mt-12 lg:ml-6 mb-12"> {renderBarChart}</div>
      </section>
    </>
  );
};

export default AdminDashboard;

{
  /* <div className="mt-6 lg:ml-12 lg:mt-12">
        <div className="charts">
          <ResponsiveContainer width="80%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>

          <ResponsiveContainer width="80%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
      </div> */
}
