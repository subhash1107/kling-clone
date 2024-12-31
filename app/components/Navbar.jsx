"use client";
import { FaFireFlameCurved } from "react-icons/fa6";
import styles from "../styles/Button.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <header className="z-20 flex items-center justify-between px-6 py-4 bg-gradient-to-t from-[#0d1116] to-black text-white">
      <div className="flex items-center gap-2">
        <GiHamburgerMenu onClick={() => setMenu(!menu)} className="xl:hidden" />
        <img
          src="https://s1-def.ap4r.com/kos/s101/nlav112154/aiwp/assets/kling-logo-en-gYSpat0A.png"
          alt="Kling AI Logo"
          width={140}
        />
      </div>

      <div className="flex items-center space-x-4">
        {/* Hidden after lg */}
        <button className="hidden lg:flex px-4 py-2 text-sm font-medium text-green-400 bg-gray-800 rounded-full hover:bg-gray-700 items-center gap-1">
          <FaFireFlameCurved className="text-blue-400" />
          Sign in for free credits
        </button>

        {/* Hidden after md */}
        <button className="hidden md:flex relative items-center px-4 py-2 text-sm font-medium text-black bg-gradient-to-r from-green-300 to-blue-500 rounded-full hover:from-cyan-500 hover:to-blue-600">
          API Calls
          <span className={`absolute top-0 right-0 px-1.5 py-0.5 text-xs font-semibold text-white bg-red-600 rounded-full -mt-2 -mr-2 ${styles.badgeAnimation}`}>
            NEW
          </span>
        </button>

        {/* Hidden after md */}
        <button className="flex px-4 py-2 text-sm font-medium text-black bg-gradient-to-r from-lime-400 to-cyan-400 rounded-full hover:from-lime-500 hover:to-green-500">
          Sign In
        </button>
      </div>
    </header>
  );
}
