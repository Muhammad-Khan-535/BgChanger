import { useState } from "react";

export const BgChanger = () => {
  const [color, setColor] = useState("red");

  const colors = ["red", "green", "blue", "gray", "pink"];

  return (
    <div
      className="w-full h-screen duration-200 flex items-end justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="w-full sm:w-auto px-4 py-6">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-4 rounded-xl max-w-full sm:max-w-md mx-auto">
          {colors.map((col) => (
            <button
              key={col}
              className="outline-none px-5 py-2 rounded-full text-white shadow-md capitalize text-sm sm:text-base"
              style={{ backgroundColor: col }}
              onClick={() => setColor(col)}
            >
              {col}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
