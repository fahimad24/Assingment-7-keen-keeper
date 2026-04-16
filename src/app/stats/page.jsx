"use client";

import { AuthContext } from "@/context/contextApi";
import { useContext } from "react";
import { Pie, PieChart, Tooltip } from "recharts";

const Stats = () => {
  const { timeline } = useContext(AuthContext);

  const counts = timeline.reduce((acc, entry) => {
    acc[entry.type] = (acc[entry.type] || 0) + 1;
    return acc;
  }, {});

  const data = [
    { name: "Call", value: counts.Call || 0, fill: "#7E35E1" },
    { name: "Text", value: counts.Text || 0, fill: "#FF8042" },
    { name: "Video", value: counts.Video || 0, fill: "#244D3F" },
  ];

  const isAnimationActive = true;
  return (
    <main className="md:py-20 py-10">
      <section className="max-w-5xl  mx-auto  px-5 md:px-10 xl:p-0">
        <h1 className="text-5xl  font-bold">Friendship Analytics</h1>
        <div className=" bg-white shadow rounded-2xl py-10 px-5 mt-10">
          {timeline.length === 0 ? (
            <p className="text-center text-4xl text-gray-500">
              No data available to display stats.
            </p>
          ) : (
            <div className="mt-10 flex justify-center flex-col items-center gap-10">
              <PieChart
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  maxHeight: "80vh",
                  aspectRatio: 1,
                }}
                responsive
              >
                <Pie
                  data={data}
                  innerRadius="80%"
                  outerRadius="100%"
                  // Corner radius is the rounded edge of each pie slice
                  cornerRadius="50%"
                  // padding angle is the gap between each pie slice
                  paddingAngle={5}
                  dataKey="value"
                  isAnimationActive={isAnimationActive}
                />

                <Tooltip />
              </PieChart>
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  <button className="p-1 rounded-2xl bg-[#7E35E1]"></button>
                  <span className="">Call</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-1 rounded-2xl bg-[#FF8042]"></button>
                  <span className="">Text</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-1 rounded-2xl bg-[#244D3F]"></button>
                  <span className="">Video</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Stats;
