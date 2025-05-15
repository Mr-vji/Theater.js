import { motion } from "framer-motion";

export const Vji = () => {
   return (
      <div className="pt-20 w-full h-full absolute inset-0 z-50 flex flex-col items-center justify-start pointer-events-none text-white overflow-hidden">
         <div className="relative w-full flex items-center justify-center px-4">
            {/* Center title */}
            <motion.div
               className="text-center max-w-4xl"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 3, duration: 1.2 }}
            >
               <h1 className="text-[8vw] md:text-[6vw] lg:text-[7vw] leading-none tracking-tight font-extrabold stroke-title whitespace-nowrap">
                  FUTURE DRIVE
               </h1>
               <motion.p
                  className="text-xl md:text-2xl text-gray-300 tracking-wide mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 1 }}
               >
                  Introducing our next-gen 3D Car Model
               </motion.p>
            </motion.div>
         </div>

         {/* Bottom-right info */}
         <motion.div
            className="absolute bottom-10 right-10 text-right pointer-events-auto max-w-xs"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
         >
            <p className="text-md md:text-lg text-gray-300 mb-4">
               Explore the sleek design and innovation of our new digital
               collectible.
            </p>
            <button className="px-6 py-3 bg-white text-black font-semibold rounded-3xl shadow-lg hover:bg-gray-200 transition-all">
               Contact Us
            </button>
         </motion.div>

         {/* Bottom-left info */}
         <motion.div
            className="absolute bottom-10 left-10 text-left pointer-events-auto max-w-xs"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 1 }}
         >
            <p className="text-md md:text-lg text-gray-300">
               Inspired by the classics. Engineered for the future.
            </p>
         </motion.div>
      </div>
   );
};
