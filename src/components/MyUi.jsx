// UI.jsx
import React from "react";

export function MyUi({
   targets = [],
   section = 0,
   onLeftClick,
   onRightClick,
   onDotClick,
}) {
   return (
      <div className="absolute inset-0 flex flex-col items-center justify-between px-6 py-4">
         {/* Left Bracket Button */}
         <div className="absolute z-10 -translate-y-1/2 top-1/2 left-6">
            <button
               onClick={onLeftClick}
               className="p-4 transition-opacity duration-200 border shadow-lg pointer-events-auto hover:opacity-50 bg-white/20 backdrop-blur-md rounded-2xl border-white/30"
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-8 h-8 text-white"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
               </svg>
            </button>
         </div>

         {/* Dots Indicator */}
         <div className="absolute left-0 right-0 z-10 flex items-center justify-center gap-8 bottom-10">
            {targets.map((_, i) => (
               <div
                  key={i}
                  onClick={() => onDotClick?.(i)}
                  className={`w-3 h-3 rounded-full border border-white flex items-center justify-center cursor-pointer transition-opacity duration-200 pointer-events-auto ${
                     section === i ? "bg-white" : ""
                  }`}
               />
            ))}
         </div>

         {/* Right Bracket Button */}
         <div className="absolute z-10 -translate-y-1/2 top-1/2 right-6">
            <button
               onClick={onRightClick}
               className="p-4 transition-opacity duration-200 border shadow-lg pointer-events-auto hover:opacity-50 bg-white/20 backdrop-blur-md rounded-2xl border-white/30"
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-8 h-8 text-white"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
               </svg>
            </button>
         </div>
      </div>
   );
}
