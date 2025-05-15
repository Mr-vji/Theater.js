import { motion } from "framer-motion";

export const Second = () => {
   return (
      <div className="pt-20 w-full h-full absolute inset-0 z-50 flex flex-col  justify-start pointer-events-none text-white overflow-hidden">
         <div className="relative w-full flex items-center justify-center px-4">
            {/* Center title */}
            <motion.div
               className="text-end max-w-1xl mx-auto"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 3, duration: 1.2 }}
            >
               <h1 className="text-[7vw] md:text-[5.5vw] lg:text-[6vw] leading-none tracking-tight font-extrabold stroke-title">
                  EXPERIENCE THE EVOLUTION
               </h1>
               <motion.p
                  className="text-xl md:text-2xl text-gray-300 tracking-wide mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 1 }}
               >
                  Step inside the future of immersive driving
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
               Every detail engineered for the ultimate simulation.
            </p>
            <button className="px-6 py-3 bg-white text-black font-semibold rounded-3xl shadow-lg hover:bg-gray-200 transition-all">
               See the Specs
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
               Feel the speed. Hear the silence. Own the moment.
            </p>
         </motion.div>
      </div>
   );
};
