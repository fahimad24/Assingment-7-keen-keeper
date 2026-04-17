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

  const handleSearch = (searchTerm) => {
    if (searchTerm === "") {
      setHistoryLog(timeline);
    } else {
      const filtered = historyLog.filter(
        (entry) =>
          entry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          entry.type.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setHistoryLog(filtered);
    }
  };

  return (
    <main className="bg-[radial-gradient(circle_at_top,rgba(36,77,63,0.18),transparent_45%),linear-gradient(180deg,#f8fafc_0%,#eef4f1_100%)]">
      <section className=" container mx-auto px-5 md:px-10 xl:p-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch(document.querySelector('input[type="text"]').value, e);
          }}
          className="pt-5 max-w-4xl mx-auto flex flex-row"
        >
          <input
            type="text"
            placeholder="Search timeline..."
            className="w-full h-full px-4 md:px-4 py-2 bg-white border-2 border-gray-300 rounded-l-md focus:outline-none  focus:border-green"
          />
          <div>
            <button
              type="submit"
              className="md:w-40 w-30 h-full block md:px-4 px-2 bg-green text-white rounded-r-md hover:bg-green/90 transition duration-300 "
            >
              Search
            </button>
          </div>
        </form>
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
