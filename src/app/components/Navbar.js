"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Navbar() {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState("home");

  const handleNav = (tab) => {
    setCurrentTab(tab);
    router.push(`/${tab}`);
  };

  return (
    <div className="w-full flex justify-around items-center mt-2 z-20">
        <div className=" font-bold text-white text-3xl">
            StudyBuddy
        </div>
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
      <div className=" flex justify-center items-center gap-1">
        <Image src="/pngtree-round-cartoon-gold-coin-png-image_4488009-removebg-preview.png" width={30} height={30}/>
           <div className=" bg-white px-3 font-bold rounded-xl">26</div>
      </div>
    </div>
  );
}

export default Navbar;
