import React, { useEffect, useState } from "react";

const dotsArr = ["", ".", "..", "..."];

const Shimmer = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        const idx = dotsArr.indexOf(prev);
        return dotsArr[(idx + 1) % dotsArr.length];
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex items-center mb-2">
        <span className="text-blue-600 font-semibold text-lg">
          AI is thinking{dots}
        </span>
      </div>
      <div className="p-4 flex flex-wrap border rounded bg-gray-50">
        <div className="h-9 w-56 m-4 bg-gray-200 animate-pulse"></div>
        <div className="h-9 w-56 m-4 bg-gray-200 animate-pulse"></div>
        <div className="h-9 w-56 m-4 bg-gray-200 animate-pulse"></div>
        <div className="h-9 w-56 m-4 bg-gray-200 animate-pulse"></div>
        <div className="h-9 w-56 m-4 bg-gray-200 animate-pulse"></div>
        <div className="h-9 w-56 m-4 bg-gray-200 animate-pulse"></div>
        <div className="h-9 w-56 m-4 bg-gray-200 animate-pulse"></div>
        <div className="h-9 w-56 m-4 bg-gray-200 animate-pulse"></div>
        <div className="h-9 w-56 m-4 bg-gray-200 animate-pulse"></div>
        <div className="h-9 w-56 m-4 bg-gray-200 animate-pulse"></div>
        <div className="h-9 w-56 m-4 bg-gray-200 animate-pulse"></div>
        <div className="h-9 w-56 m-4 bg-gray-200 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Shimmer;
