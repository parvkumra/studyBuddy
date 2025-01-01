"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState("home");

  const handleNav = (tab) => {
    setCurrentTab(tab);
    router.push(`/${tab}`);
  };

  return (
    <div className="w-full flex justify-center mt-2">
      <nav className="flex bg-white rounded-2xl">
        <div
          className={`font-bold text-blue-300 rounded-l-2xl flex justify-center px-4 py-3 ${
            currentTab === "home" ? "bg-blue-300 text-white" : "bg-white"
          }`}
          onClick={() => handleNav("home")}
        >
          Home
        </div>
        <div
          className={`font-bold text-blue-300 flex justify-center px-4 py-3 ${
            currentTab === "study" ? "bg-blue-300 text-white" : "bg-white"
          }`}
          onClick={() => handleNav("study")}
        >
          Study
        </div>
        <div
          className={`font-bold rounded-r-2xl text-blue-300 flex justify-center px-4 py-3 ${
            currentTab === "store" ? "bg-blue-300 text-white" : "bg-white"
          }`}
          onClick={() => handleNav("store")}
        >
          Store
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
