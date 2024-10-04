"use client";
import { useState, useEffect } from "react";
import { calculateDaysPassed } from "@/utils/dateUtils";
import { Inter } from "next/font/google";

// Import the Inter font from Google Fonts using next/font
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const DaysPassed: React.FC = () => {
  const [daysPassed, setDaysPassed] = useState<number>(0);

  useEffect(() => {
    const targetDate = new Date("2024-10-02");
    setDaysPassed(calculateDaysPassed(targetDate));
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen bg-zinc-950 p-6 ${inter.className}`}
    >
      <h1 className="text-3xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 h-18 md:h-16">
        Days passed since getting blocked:
      </h1>
      <span className="text-6xl md:text-8xl font-bold text-white rounded-lg m-6">
        {daysPassed}
      </span>
    </div>
  );
};

export default DaysPassed;
