"use client";

import { useContext, useState } from "react";
import { AuthContext } from "@/context/contextApi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Timeline = () => {
  const { timeline } = useContext(AuthContext);
  const [historyLog, setHistoryLog] = useState(timeline);

  const handleFilter = (type) => {
    if (type === "All") {
      setHistoryLog(timeline);
    } else {
      const filteredLog = timeline.filter((entry) => entry.type === type);
      setHistoryLog(filteredLog);
    }
  };

  return (
    <main className="h-dvh">
      <section className=" container mx-auto px-5 md:px-10 xl:p-0">
        <div className="py-20">
          <h1 className="text-5xl font-bold">Timeline</h1>
          {/* dropdown */}
          <div className="dropdown mt-5">
            <label
              tabIndex={0}
              className="flex gap-2 justify-between py-1.5 px-3 rounded-md bg-green text-white hover:bg-green/90 w-50 cursor-pointer"
            >
              <span>Filter timeline</span>
              <MdOutlineKeyboardArrowDown />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a onClick={() => handleFilter("All")}>All</a>
              </li>
              <li>
                <a onClick={() => handleFilter("Call")}>Call</a>
              </li>
              <li>
                <a onClick={() => handleFilter("Text")}>Text</a>
              </li>
              <li>
                <a onClick={() => handleFilter("Video")}>Video</a>
              </li>
            </ul>
          </div>
          <div className="mt-10">
            {historyLog.length === 0 ? (
              <p className="text-center text-5xl text-gray-500">
                No history found.
              </p>
            ) : (
              historyLog.map((log) => (
                <div
                  key={log?.id}
                  className="bg-gray-100 p-4 mb-2 rounded-md flex gap-5"
                >
                  <div className="flex justify-center items-center text-3xl w-14 rounded-full bg-gray-100 text-white">
                    {log?.emoji}
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg text-gray-600">
                      <span className="text-black font-blod">{log?.type}</span>{" "}
                      with <span>{log?.name}</span>
                    </p>
                    <p className="text-lg text-gray-600">{log?.date}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Timeline;
