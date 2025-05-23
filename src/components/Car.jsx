/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Barbo (https://sketchfab.com/barbo-autos)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/oldsmobile-cutlass-supreme-sedan-71-78f76d386a4341b0b71745bdc50fd5ab
Title: Oldsmobile Cutlass Supreme Sedan '71
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Car(props) {
   const { nodes, materials } = useGLTF("./models/blueCar.glb");
   return (
      <group {...props} dispose={null}>
         <group name="Sketchfab_Scene">
            <group
               name="Sketchfab_model"
               rotation={[-Math.PI / 2, 0, 0]}
               scale={0.584}
            >
               <group
                  name="d464560361b749b4ba7bb7d9c23b1386fbx"
                  rotation={[Math.PI / 2, 0, 0]}
               >
                  <group name="RootNode">
                     <group
                        name="chrome"
                        position={[0, -0.474, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                     >
                        <mesh
                           name="chrome_M_Chrome_0"
                           geometry={nodes.chrome_M_Chrome_0.geometry}
                           material={materials.M_Chrome}
                        />
                        <mesh
                           name="chrome_M_Black_0"
                           geometry={nodes.chrome_M_Black_0.geometry}
                           material={materials.M_Black}
                        />
                     </group>
                     <group
                        name="rear-view"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                     >
                        <mesh
                           name="rear-view_M_Chrome_0"
                           geometry={nodes["rear-view_M_Chrome_0"].geometry}
                           material={materials.M_Chrome}
                        />
                     </group>
                     <group
                        name="door_handle"
                        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                        scale={[-4.283, 4.283, 4.283]}
                     >
                        <mesh
                           name="door_handle_M_Chrome_0"
                           geometry={nodes.door_handle_M_Chrome_0.geometry}
                           material={materials.M_Chrome}
                        />
                     </group>
                     <group
                        name="body"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                     >
                        <mesh
                           name="body_M_Paint_0"
                           geometry={nodes.body_M_Paint_0.geometry}
                           material={materials.M_Paint}
                        />
                        <mesh
                           name="body_M_Black_0"
                           geometry={nodes.body_M_Black_0.geometry}
                           material={materials.M_Black}
                        />
                     </group>
                     <group
                        name="trim2"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                     >
                        <mesh
                           name="trim2_M_Badge_0"
                           geometry={nodes.trim2_M_Badge_0.geometry}
                           material={materials.M_Badge}
                        />
                        <mesh
                           name="trim2_M_Lights_0"
                           geometry={nodes.trim2_M_Lights_0.geometry}
                           material={materials.M_Lights}
                        />
                     </group>
                     <group
                        name="badges_2"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                     >
                        <mesh
                           name="badges_2_M_Badge_0"
                           geometry={nodes.badges_2_M_Badge_0.geometry}
                           material={materials.M_Badge}
                        />
                     </group>
                     <group
                        name="badges"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                     >
                        <mesh
                           name="badges_M_Badge_0"
                           geometry={nodes.badges_M_Badge_0.geometry}
                           material={materials.M_Badge}
                        />
                     </group>
                     <group
                        name="Circle002"
                        position={[0, -33.707, 80.729]}
                        scale={3.012}
                     >
                        <mesh
                           name="Circle002_M_Badge_0"
                           geometry={nodes.Circle002_M_Badge_0.geometry}
                           material={materials.M_Badge}
                        />
                     </group>
                     <group
                        name="lights-glass"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                     >
                        <mesh
                           name="lights-glass_M_Lights_0"
                           geometry={nodes["lights-glass_M_Lights_0"].geometry}
                           material={materials.M_Lights}
                        />
                     </group>
                     <group
                        name="trim"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                     >
                        <mesh
                           name="trim_M_Badge_0"
                           geometry={nodes.trim_M_Badge_0.geometry}
                           material={materials.M_Badge}
                        />
                     </group>
                     <group
                        name="glass"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                     >
                        <mesh
                           name="glass_M_Glass_0"
                           geometry={nodes.glass_M_Glass_0.geometry}
                           material={materials.M_Glass}
                        />
                     </group>
                     <group
                        name="black2"
                        position={[0, 0.26, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                     >
                        <mesh
                           name="black2_M_Black_0"
                           geometry={nodes.black2_M_Black_0.geometry}
                           material={materials.M_Black}
                        />
                     </group>
                     <group
                        name="black"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                     >
                        <mesh
                           name="black_M_Black_0"
                           geometry={nodes.black_M_Black_0.geometry}
                           material={materials.M_Black}
                        />
                     </group>
                     <group
                        name="glass2"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                     >
                        <mesh
                           name="glass2_M_Glass_0"
                           geometry={nodes.glass2_M_Glass_0.geometry}
                           material={materials.M_Glass}
                        />
                     </group>
                     <group
                        name="wheels"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                     >
                        <mesh
                           name="wheels_M_Wheel_0"
                           geometry={nodes.wheels_M_Wheel_0.geometry}
                           material={materials.M_Wheel}
                        />
                     </group>
                     <group
                        name="badge3"
                        position={[-1.31, 2.027, 405.289]}
                        scale={3.049}
                     >
                        <mesh
                           name="badge3_M_Badge_0"
                           geometry={nodes.badge3_M_Badge_0.geometry}
                           material={materials.M_Badge}
                        />
                     </group>
                     <group
                        name="lights"
                        position={[0, -0.474, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                     >
                        <mesh
                           name="lights_M_Lights_0"
                           geometry={nodes.lights_M_Lights_0.geometry}
                           material={materials.M_Lights}
                        />
                     </group>
                     <group
                        name="ground"
                        position={[0, -59.609, 209.041]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={238.584}
                     >
                        {/* text  */}
                        <mesh
                           name="ground_M_Dome_0"
                           geometry={nodes.ground_M_Dome_0.geometry}
                           material={materials.M_Dome}
                        />
                     </group>
                     <group
                        name="screws"
                        rotation={[Math.PI, 0, Math.PI]}
                        scale={100}
                     >
                        <mesh
                           name="screws_M_Badge_0"
                           geometry={nodes.screws_M_Badge_0.geometry}
                           material={materials.M_Badge}
                        />
                     </group>
                     <group
                        name="plate-holder"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                     >
                        <mesh
                           name="plate-holder_M_Badge_0"
                           geometry={nodes["plate-holder_M_Badge_0"].geometry}
                           material={materials.M_Badge}
                        />
                     </group>
                     <group
                        name="plate"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                     >
                        <mesh
                           name="plate_M_License_0"
                           geometry={nodes.plate_M_License_0.geometry}
                           material={materials.M_License}
                        />
                     </group>
                  </group>
               </group>
            </group>
         </group>
      </group>
   );
}

useGLTF.preload("./models/blueCar.glb");
