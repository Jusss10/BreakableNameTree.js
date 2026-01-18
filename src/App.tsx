import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";

import CameraControls from "./components/CameraControls";
import { useState } from "react";
import Sidebar from "./components/SidePanel";
import { AddCloset } from "./components/AddCloset";
import BuildRoom from "./components/BuildRoom";

function App() {
  const [hasCabinet, setHasCabinet] = useState(false);

  return (
    <>
      <Leva />
      <Sidebar onAddCabinet={() => setHasCabinet(true)} />
      <Canvas camera={{ position: [2.5, 1.8, 1.7], fov: 75 }}>
        {/* Center of closet is [0, height/2, 0] if present, else default [0,1,0] */}
        <CameraControls target={hasCabinet ? [0, 1, 0] : [0, 1, 0]} />
        <BuildRoom />
        {hasCabinet && (<AddCloset height={2} width={1.2} depth={0.6} thickness={0.018} />)}
      </Canvas>
    </>
  );
}

export default App;
