"use client";
import { useState, useEffect } from "react";
import { calculateMonthsAndDays } from "@/utils/dateUtils";
import { Inter } from "next/font/google";

// Import the Inter font from Google Fonts using next/font
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const DaysPassed: React.FC = () => {
  const [daysPassed, setDaysPassed] = useState<number | null>(null); // Start with null to track loading
  const [monthsPassed, setMonthsPassed] = useState<number | null>(null);

  useEffect(() => {
    // Set the target date and time to 3rd Oct 2024 at 05:00 PM
    const targetDate = new Date("2024-10-03T17:00:00");

    // Function to update the days passed
    const updateDaysPassed = () => {
      const { months, days } = calculateMonthsAndDays(targetDate);
      setMonthsPassed(months);
      setDaysPassed(days);
    };

    // Call updateDaysPassed immediately and then set interval to update every 100 ms
    updateDaysPassed();
    const intervalId = setInterval(updateDaysPassed, 100); // Update every 100 ms

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  // Conditionally render only if daysPassed is calculated
  if (daysPassed === null) {
    return null; // Return nothing until the state is updated
  }

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen bg-zinc-950 gap-6 ${inter.className}`}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 h-18 md:h-16">
        Time since first message:
      </h1>
      <span className="text-4xl md:text-6xl font-bold text-white rounded-lg">
        {monthsPassed} months and {daysPassed} days
      </span>
    </div>
  );
};

export default DaysPassed;
