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
  const [valueHeight, setValueHeight] = useState<number>(180);
  const [valueWidth, setValueWidth] = useState<number>(80);

  return (
    <>
      <Leva />
      <Sidebar 
        onAddCabinet={() => setHasCabinet(true)}
        valueHeight={valueHeight}
        valueWidth={valueWidth}
        setValueHeight={setValueHeight}
        setValueWidth={setValueWidth}
      />
      <Canvas camera={{ position: [2.5, 1.8, 1.7], fov: 75 }}>
        
        <CameraControls target={hasCabinet ? [0, 0.6, 0] : [0, 0.8, 0]} />
        <BuildRoom />
        {hasCabinet && (<AddCloset height={(valueHeight/100)} width={valueWidth/100} depth={0.6} thickness={0.018} />)}
      </Canvas>
    </>
  );
}

export default App;
