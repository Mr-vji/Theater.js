import { motion } from "framer-motion";

export const FinalIntro = () => {
   return (
      <div className="w-full h-full absolute inset-0 z-50 flex items-center justify-start px-12 pointer-events-none text-white">
         {/* Side Content */}
         <motion.div
            className="max-w-2xl text-left pointer-events-auto"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3, duration: 1.2, ease: "easeOut" }}
         >
            <h1 className="text-[9vw] md:text-[7vw] lg:text-[5.9vw] font-extrabold leading-tight stroke-soft">
               IGNITE THE FUTURE
            </h1>

            <motion.p
               className="mt-6 text-xl md:text-3xl text-gray-300"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 2.3, duration: 1 }}
            >
               Power. Silence. Precision. <br className="hidden md:block" />
               The drive ahead has no limits.
            </motion.p>

            <motion.div
               className="mt-8"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 2.6, duration: 1 }}
            >
               <p className="text-base md:text-xl text-gray-400 mb-4">
                  The road fades. The future arrives.
               </p>
               <button className="px-7 py-4 bg-white text-black font-bold rounded-full shadow-lg hover:bg-gray-200 transition-all">
                  Begin Your Journey
               </button>
            </motion.div>
         </motion.div>
      </div>
   );
};
