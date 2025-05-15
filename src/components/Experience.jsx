import { Environment, OrbitControls, Stage } from "@react-three/drei";
import { MedievalFantasyBook } from "./MedievalFantasyBook";
import { Car } from "./Car";
import Ground from "./Ground";

import { editable as e } from "@theatre/r3f";

export const Experience = () => {
   return (
      <>
         <Environment preset="city" />
         <e.group theatreKey="car">
            <Car
               position={[0, 0.5 + 0.3, 0]}
               rotation={[0, -Math.PI, 0]}
               scale={0.08}
            />
         </e.group>
         <e.group theatreKey="ground">
            <Ground position={[0, -1.5 - 0.5, 0]} />
         </e.group>
         <e.directionalLight
            theatreKey="sun"
            position={[0, 10, 3]}
            intensity={1.5}
         />
      </>
   );
};
