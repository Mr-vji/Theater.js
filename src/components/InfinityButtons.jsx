import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";

const InfinityButtons = () => {
   const items = [0, 1, 2, 3];

   const [currentValue, setCurrentValue] = useState(0);

   const nextSLide = () => setCurrentValue((prv) => (prv + 1) % items.length);
   const backSLide = () => setCurrentValue((prv) => (prv - 1) % items.length);

   useEffect(() => {
      console.log(currentValue);
   }, [currentValue]);

   return (
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-center gap-6">
         {/* Prev Button */}
         <button
            onClick={() => backSLide()}
            className="px-6 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white text-lg font-semibold shadow-md hover:bg-white/20 transition duration-300"
         >
            ← Prev
         </button>

         {/* Next Button */}
         <button
            onClick={() => nextSLide()}
            className="px-6 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white text-lg font-semibold shadow-md hover:bg-white/20 transition duration-300"
         >
            Next →
         </button>
      </div>
   );
};

export default InfinityButtons;
