"use client";

import { useContext } from "react";
import { AuthContext } from "@/context/contextApi";
import { useParams } from "next/navigation";
import Image from "next/image";

const Friend = () => {
  const id = useParams().friend;
  const { friends } = useContext(AuthContext);
  const friend = friends.find((f) => f.id === Number(id)) || null;

  if (!friends.length) {
    return (
      <section className="container mx-auto py-15 space-y-6">
        <p className="text-center text-lg text-gray-600">Loading friend...</p>
      </section>
    );
  }

  if (!friend) {
    return (
      <section className="container mx-auto py-15 space-y-6">
        <p className="text-center text-lg text-red-500">Friend not found.</p>
      </section>
    );
  }

  return (
    <section className="container mx-auto py-15 space-y-6">
      <div>
        <div>
          <div className="bg-white rounded-lg shadow text-gray-600 p-6 flex flex-col items-center gap-3">
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
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Friend;
