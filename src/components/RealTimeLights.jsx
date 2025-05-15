// RealTimeLights.jsx
import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

export default function RealTimeLights() {
   const dirLightRef = useRef();

   // Optional helper to see where the light is in dev
   // useHelper(dirLightRef, DirectionalLightHelper, 1)

   return (
      <>
         {/* Ambient light to softly light everything */}
         <ambientLight intensity={0.4} />

         {/* Directional light like the sun */}
         <directionalLight
            ref={dirLightRef}
            position={[5, 10, 5]}
            intensity={1.2}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-near={0.5}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
         />

         {/* Optional: add more point lights for reflections */}
         <pointLight position={[-5, 5, 5]} intensity={0.5} />
         <pointLight position={[5, -2, 5]} intensity={0.3} />
      </>
   );
}
