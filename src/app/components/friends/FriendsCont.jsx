"use client";
import Image from "next/image";

import { AuthContext } from "@/context/contextApi";
import { useContext } from "react";
import Link from "next/link";
import { MutatingDots } from "react-loader-spinner";

const FriendsCont = () => {
  const { friends } = useContext(AuthContext);

  return (
    <section className="container mx-auto py-15 space-y-6 px-5 md:px-10 xl:p-0">
      <h2 className=" text-4xl font-bold">Your Friends</h2>
      <div>
        {/* Friend List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {/* Example friend cards */}

          {friends.length > 0 ? (
            friends.map((friend) => (
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
                <p className="text-center">{friend.days_since_contact} days</p>
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
            ))
          ) : (
            <div className="col-span-full flex justify-center items-center py-10 h-dvh">
              <MutatingDots
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                secondaryColor="#4fa94d"
                radius="12.5"
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FriendsCont;
