"use client";
import Image from "next/image";

import { AuthContext } from "@/context/contextApi";
import { useContext } from "react";
import Link from "next/link";

const FriendsCont = () => {
  const { friends } = useContext(AuthContext);
  const today = new Date().toISOString().split("T")[0];

  // Calculate days until next contact for each friend
  const handleAddFriendTime = (friend) => {
    const nextDueDate = new Date(friend.next_due_date);
    const todayDate = new Date(today);
    const timeDiff = todayDate - nextDueDate;
    const daysUntilNextContact = timeDiff / (1000 * 60 * 60 * 24);
    return daysUntilNextContact;
  };

  return (
    <section className="container mx-auto py-15 space-y-6">
      <h2 className=" text-4xl font-bold">Your Friends</h2>
      <div>
        {/* Friend List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {/* Example friend cards */}
          {friends.map((friend) => (
            <Link
              href={`/friends/${friend.id}`}
              className="bg-white rounded-lg shadow text-gray-600 p-6 flex flex-col items-center gap-3"
              key={friend.id}
            >
              <div className="w-20 h-20 rounded-full overflow-hidden  mx-auto">
                <Image
                  width={160}
                  height={160}
                  className="aspect-square"
                  src={friend.picture}
                  alt={friend.name}
                  unoptimized
                />
              </div>
              <h2 className="text-xl font-bold text-center">{friend.name}</h2>
              <p className="text-center">{handleAddFriendTime(friend)} days</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {friend.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-2xl uppercase"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <span
                className={`${friend.status === "overdue" ? "bg-red-500 text-white" : friend.status === "on-track" ? "bg-green-800 text-white" : "bg-amber-400 text-white"} text-xs font-semibold px-2 py-1 rounded-2xl uppercase`}
              >
                {friend.status}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FriendsCont;
