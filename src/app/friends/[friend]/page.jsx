"use client";

import { useContext } from "react";
import { AuthContext } from "@/context/contextApi";
import { useParams } from "next/navigation";
import Image from "next/image";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { PiChatTextBold } from "react-icons/pi";
import { PiVideoCameraBold } from "react-icons/pi";
import { toast } from "react-toastify";

const Friend = () => {
  const id = useParams().friend;
  const { friends, setTimeline, timeline } = useContext(AuthContext);
  const friend = friends.find((f) => f.id === Number(id)) || null;

  const handleAddTimeline = (interactionType, emoji) => {
    const newEntry = {
      id: timeline.length + 1,
      name: friend.name,
      emoji: emoji || "😊",
      friendId: friend.id,
      type: interactionType,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    };
    setTimeline((prevTimeline) => [...prevTimeline, newEntry]);
    toast.success(
      `Added ${emoji} ${interactionType} interaction for ${friend.name}!`,
    );
  };

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="bg-white rounded-lg shadow text-gray-600 p-6 flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full overflow-hidden  mx-auto">
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
            <p className="text-center text-gray-600">
              {'"'}
              {friend.bio}
              {'"'}
            </p>
            <p className="text-center text-gray-600">
              Preferred: {friend.email}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow text-gray-600 py-4 mt-2">
            <p className="flex justify-center gap-2 items-center">
              {" "}
              <HiOutlineBellSnooze /> Snooze 2 for weeks
            </p>
          </div>
          <div className="bg-white rounded-lg shadow text-gray-600 py-4 mt-2">
            <p className="flex justify-center gap-2 items-center">
              {" "}
              <FiArchive /> Archive
            </p>
          </div>
          <div className="bg-white rounded-lg shadow text-red-600 py-4 mt-2">
            <p className="flex justify-center gap-2 items-center">
              {" "}
              <RiDeleteBinLine /> Delete
            </p>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-3 p-8 bg-white rounded-xl shadow">
              <p className="text-3xl font-bold text-center text-green">
                {friend.days_since_contact}
              </p>
              <p className="text-gray-600 text-center">Days Since Contact</p>
            </div>
            <div className="space-y-3 p-8 bg-white rounded-xl shadow">
              <p className="text-3xl font-bold text-center text-green">
                {friend.goal}
              </p>
              <p className="text-gray-600 text-center">
                Goal {"("}days{")"}
              </p>
            </div>
            <div className="space-y-3 p-8 bg-white rounded-xl shadow">
              <p className="text-3xl font-bold text-center text-green">
                {new Date(friend.next_due_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
              <p className="text-gray-600 text-center">Next Due Date</p>
            </div>
            <div className="space-y-3 p-6 bg-white rounded-xl shadow col-span-3">
              <div className="flex justify-between  ">
                <p>Relationship Goal</p>
                <button className="btn btn-sm">Edit</button>
              </div>
              <p className="text-gray-600">
                Connect every{" "}
                <span className="font-bold">{friend.goal} days</span>
              </p>
            </div>
            <div className="space-y-3 p-6 bg-white rounded-xl shadow col-span-3">
              <h2 className="text-xl">Quick Check-In</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
                <button
                  onClick={() => handleAddTimeline("Call", "📞")}
                  className="flex flex-col items-center gap-2 bg-mainBg p-8 btn btn-ghost h-full rounded-lg text-lg font-bold"
                >
                  <IoCallOutline />
                  <p>call</p>
                </button>
                <button
                  onClick={() => handleAddTimeline("Text", "💬")}
                  className="flex flex-col items-center gap-2 bg-mainBg p-8 btn btn-ghost h-full rounded-lg text-lg font-bold"
                >
                  <PiChatTextBold />
                  <p>text</p>
                </button>
                <button
                  onClick={() => handleAddTimeline("Video", "📹")}
                  className="flex flex-col items-center gap-2 bg-mainBg p-8 btn btn-ghost h-full rounded-lg text-lg font-bold "
                >
                  <PiVideoCameraBold />
                  <p>video</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Friend;
