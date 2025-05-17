import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { UI } from "./UI";
import { Experience } from "./components/Experience";

import { getProject } from "@theatre/core";
import { PerspectiveCamera, SheetProvider } from "@theatre/r3f";
import extension from "@theatre/r3f/dist/extension";
import studio from "@theatre/studio";

import { editable as e } from "@theatre/r3f";
import InfinityButtons from "./components/InfinityButtons";
import { Vji } from "./components/Vji";
import { Second } from "./components/Second";
import { FinalIntro } from "./components/FinalIntro";

// ✅ Attempt to import the project state, with error handling
let projectState;
try {
   projectState = await import("./assets/CarModel.theatre-project-state.json");
   console.log("Project state loaded successfully:", projectState);
} catch (error) {
   console.error("Error loading project state:", error);
}

// ✅ Correct: pass saved animation state into getProject
const project = getProject("CarModel", { state: projectState?.default }); // Access default if it's a module export
const mainSheet = project.sheet("Main");

function App() {
   const cameraTargetRef = useRef();
   const [currentAni, setAni] = useState("One");

   // ✅ Define transitions (startTime, endTime) in seconds
   const transition = {
      One: [0.0, 7],
      Two: [7, 10],
      Three: [10, 16],
   };

   const One = () => setAni("One");
   const Two = () => setAni("Two");
   const Three = () => setAni("Three");

   // ✅ Play Theatre.js animation whenever currentAni changes
   useEffect(() => {
      if (mainSheet && transition[currentAni]) {
         console.log(
            "Playing animation:",
            currentAni,
            "with range:",
            transition[currentAni]
         );
         mainSheet.sequence.play({
            range: transition[currentAni],
         });
      } else {
         console.warn(
            "mainSheet or transition for",
            currentAni,
            "is not defined."
         );
      }
   }, [currentAni, mainSheet, transition]); // Ensure dependencies are correct

   console.log("vji");
   window.alert("vji ");

   // ✅ Log the environment
   useEffect(() => {
      console.log(
         "Current environment (import.meta.env.DEV):",
         import.meta.env.DEV
      );
   }, []);

   const color = "black";

   return (
      <>
         {/* ✅ Show component based on animation section */}
         {currentAni === "One" && <Vji />}
         {currentAni === "Two" && <Second />}
         {currentAni === "Three" && <FinalIntro />}

         <Canvas
            shadows
            camera={{ position: [0, 4, 32], fov: 20 }}
            gl={{ preserveDrawingBuffer: true }}
         >
            <color attach="background" args={[color]} />
            <fog attach="fog" args={[color, 120, 190]} />

            <SheetProvider sheet={mainSheet}>
               <PerspectiveCamera
                  position={[0, 4, 6]}
                  fov={30}
                  near={1}
                  makeDefault
                  theatreKey="Camera"
                  lookAt={cameraTargetRef}
               />
               <e.mesh
                  theatreKey="Camera Target"
                  visible="editor"
                  ref={cameraTargetRef}
               >
                  <sphereGeometry args={[0.2, 32, 32]} />
                  <meshStandardMaterial color="yellow" />
               </e.mesh>

               <Experience />
            </SheetProvider>
         </Canvas>

         {/* ✅ Buttons to switch between animation states */}
         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-center gap-6">
            <button
               onClick={One}
               className="px-6 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white text-lg font-semibold shadow-md hover:bg-white/20 transition duration-300"
            >
               1
            </button>
            <button
               onClick={Two}
               className="px-6 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white text-lg font-semibold shadow-md hover:bg-white/20 transition duration-300"
            >
               2
            </button>
            <button
               onClick={Three}
               className="px-6 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white text-lg font-semibold shadow-md hover:bg-white/20 transition duration-300"
            >
               3
            </button>
         </div>
      </>
   );
}

export default App;
