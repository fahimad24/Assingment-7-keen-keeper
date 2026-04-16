"use client";

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/friends.json");
        const user = await res.json();
        setFriends(user);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const value = {
    friends,
    setFriends,
    timeline,
    setTimeline,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
