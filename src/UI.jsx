import { motion } from "framer-motion";
export const UI = ({ currentScreen, onScreenChange, isAnimating }) => {
  return (
    <motion.main
      className="fixed inset-0 z-10"
      animate={isAnimating ? "" : currentScreen}
    >
      <section
        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
          currentScreen === "Home" && !isAnimating
            ? ""
            : "opacity-0 pointer-events-none"
        }`}
      >
        <motion.img
          src="/logo.svg"
          alt="Medieval Town"
          className="w-32"
          initial={{
            y: -80,
            opacity: 0,
          }}
          variants={{
            Home: {
              y: 0,
              opacity: 0.9,
              transition: {
                delay: 1,
                duration: 1.2,
              },
            },
          }}
        />
        <h1 className="font-extrabold text-white text-7xl opacity-90">
          Medieval Town
        </h1>
        <motion.div
          className="flex items-center gap-3 mt-2"
          initial={{
            y: 80,
            opacity: 0,
          }}
          variants={{
            Home: {
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.2,
                duration: 1.2,
              },
            },
          }}
        >
          <button
            onClick={() => onScreenChange("Castle")}
            className="p-3 font-medium text-white bg-gray-400 bg-opacity-50 rounded-full"
          >
            Visit the historic castle
          </button>
          <button
            onClick={() => onScreenChange("Windmill")}
            className="p-3 font-medium text-white bg-gray-400 bg-opacity-50 rounded-full"
          >
            Discover the town windmill
          </button>
        </motion.div>
      </section>
      <motion.section
        animate={isAnimating ? "" : currentScreen}
        className={`absolute inset-0 flex flex-col items-start justify-center p-10 transition-opacity duration-1000 ${
          currentScreen === "Castle" && !isAnimating
            ? ""
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="md:max-w-2xl">
          <motion.h1
            className="-ml-1 font-extrabold text-white text-7xl opacity-90"
            initial={{
              y: 80,
              opacity: 0,
            }}
            variants={{
              Castle: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.2,
                  duration: 1.2,
                },
              },
            }}
          >
            Castle
          </motion.h1>
          <motion.p
            className="mt-2 text-white"
            initial={{
              y: 80,
              opacity: 0,
            }}
            variants={{
              Castle: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.6,
                  duration: 1.2,
                },
              },
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quae voluptatum, quia, quibusdam, voluptates voluptate quos quod
            voluptatibus quas doloribus quidem. Quisquam quae voluptatum, quia,
            quibusdam, voluptates voluptate quos quod voluptatibus quas
            doloribus quidem.
          </motion.p>
          <motion.button
            onClick={() => onScreenChange("Home")}
            className="p-3 mt-3 font-medium text-white bg-gray-400 bg-opacity-50 rounded-full"
            initial={{
              y: 80,
              opacity: 0,
            }}
            variants={{
              Castle: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 1,
                  duration: 1.2,
                },
              },
            }}
          >
            Back to the entrance
          </motion.button>
        </div>
      </motion.section>
      <motion.section
        animate={isAnimating ? "" : currentScreen}
        className={`absolute inset-0 flex flex-col items-end justify-center p-10 transition-opacity duration-1000 ${
          currentScreen === "Windmill" && !isAnimating
            ? ""
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="md:max-w-2xl">
          <motion.h1
            className="-ml-1 font-extrabold text-white text-7xl opacity-90"
            initial={{
              y: 80,
              opacity: 0,
            }}
            variants={{
              Windmill: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.2,
                  duration: 1.2,
                },
              },
            }}
          >
            Windmill
          </motion.h1>
          <motion.p
            className="mt-2 text-white"
            initial={{
              y: 80,
              opacity: 0,
            }}
            variants={{
              Windmill: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.6,
                  duration: 1.2,
                },
              },
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quae voluptatum, quia, quibusdam, voluptates voluptate quos quod
            voluptatibus quas doloribus quidem. Quisquam quae voluptatum, quia,
            quibusdam, voluptates voluptate quos quod voluptatibus quas
            doloribus quidem.
          </motion.p>
          <motion.button
            onClick={() => onScreenChange("Home")}
            className="p-3 mt-3 font-medium text-white bg-gray-400 bg-opacity-50 rounded-full"
            initial={{
              y: 80,
              opacity: 0,
            }}
            variants={{
              Windmill: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 1,
                  duration: 1.2,
                },
              },
            }}
          >
            Back to the entrance
          </motion.button>
        </div>
      </motion.section>
    </motion.main>
  );
};
