"use client";

import { FiPlus } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "@/context/contextApi";

const AddFriend = () => {
  const { friends } = useContext(AuthContext);
  return (
    <section className="container mx-auto">
      <div className=" mt-20 space-y-6 px-5 md:px-10 xl:p-0">
        <h1 className="text-center md:text-5xl text-4xl font-bold">
          Friends to keep close in your life
        </h1>
        <p className="text-center text-base text-gray-600 mt-4">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <div>
          <button className="flex bg-green justify-center items-center text-white py-2 px-4 rounded-md mt-6 mx-auto font-bold">
            <FiPlus className="mr-2" />
            Add Friend
          </button>
        </div>
      </div>
      {/* Friend Stats */}
      <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-16 border-b-2 border-gray-200 px-5 md:px-10 xl:p-0">
        {/* Example friend cards */}
        <div className="bg-white rounded-lg shadow text-gray-600 space-y-4 py-8 p-4">
          <p className="text-center text-green font-bold text-3xl">
            {friends.length}
          </p>
          <p className="text-center font-semibold text-lg text-gray-500">
            Total Friends
          </p>
        </div>
        <div className="bg-white rounded-lg shadow text-gray-600 space-y-4 py-8 p-4">
          <p className="text-center text-green font-bold text-3xl">
            {friends.filter((friend) => friend.status === "on-track").length}
          </p>
          <p className="text-center font-semibold text-lg text-gray-500">
            On Track
          </p>
        </div>
        <div className="bg-white rounded-lg shadow text-gray-600 space-y-4 py-8 p-4">
          <p className="text-center text-green font-bold text-3xl">6</p>
          <p className="text-center font-semibold text-lg text-gray-500">
            Need Attention
          </p>
        </div>
        <div className="bg-white rounded-lg shadow text-gray-600 space-y-4 py-8 p-4">
          <p className="text-center text-green font-bold text-3xl">14</p>
          <p className="text-center font-semibold text-lg text-gray-500">
            Interactions This Month
          </p>
        </div>
      </div>
    </section>
  );
};

export default AddFriend;
