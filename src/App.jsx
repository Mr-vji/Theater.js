import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { UI } from "./UI";
import { Experience } from "./components/Experience";

import { getProject } from "@theatre/core"; // --- what is this ??
import { PerspectiveCamera, SheetProvider } from "@theatre/r3f";

import extension from "@theatre/r3f/dist/extension";
import studio from "@theatre/studio";

import { editable as e } from "@theatre/r3f";
import InfinityButtons from "./components/InfinityButtons";
import { Vji } from "./components/Vji";
import { Second } from "./components/Second";
import { FinalIntro } from "./components/FinalIntro";

import projectState from "./assets/CarModel.theatre-project-state.json";

studio.initialize();
studio.extend(extension);

const project = getProject("CarModel");
const mainSheet = project.sheet("Main");

//play the animation

function App() {
   const cameraTargetRef = useRef();

   const transition = {
      One: [0.0, 7],
      Two: [7, 10],
      Three: [10, 16],
   };

   const [currentAni, setAni] = useState("One");

   const One = () => setAni("One");
   const Two = () => setAni("Two");
   const Three = () => setAni("Three");

   useEffect(() => {
      project.ready.then(() => {
         mainSheet.sequence.play({
            range: transition[currentAni],
         });
      });
   }, [currentAni]);

   console.log("vji");

   const color = "black";
   return (
      <>
         {currentAni === "One" && <Vji />}
         {currentAni === "Two" && <Second />}
         {currentAni === "Three" && <FinalIntro />}

         <Canvas
            shadows
            camera={{ position: [0, 4, 16 * 2], fov: 20 }}
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
                  <octahedronBufferGeometry args={[0.1, 0]} />
                  <meshPhongMaterial color="yellow" />
               </e.mesh>
               <Experience />
            </SheetProvider>
         </Canvas>
         {/* __________________________________________________________ */}
         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-center gap-6">
            {/* Prev Button */}
            <button
               onClick={() => One()}
               className="px-6 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white text-lg font-semibold shadow-md hover:bg-white/20 transition duration-300"
            >
               1
            </button>

            {/* Next Button */}
            <button
               onClick={() => Two()}
               className="px-6 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white text-lg font-semibold shadow-md hover:bg-white/20 transition duration-300"
            >
               2
            </button>
            {/* Next Button */}
            <button
               onClick={() => Three()}
               className="px-6 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white text-lg font-semibold shadow-md hover:bg-white/20 transition duration-300"
            >
               3
            </button>
         </div>
      </>
   );
}

export default App;
