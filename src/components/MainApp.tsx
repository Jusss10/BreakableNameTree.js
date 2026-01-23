import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import CameraControls from "./CameraControls";
import Sidebar from "./SidePanel";
import { AddCloset } from "./AddCloset";
import BuildRoom from "./BuildRoom";
import { useState } from "react";

export default function MainApp() {
  const [hasCabinet, setHasCabinet] = useState(false);
  const [valueHeight, setValueHeight] = useState<number>(180);
  const [valueWidth, setValueWidth] = useState<number>(80);
  const [showRuler, setShowRuler] = useState<boolean>(true);

  return (
    <div className="w-screen h-screen fixed top-0 left-0 overflow-hidden">
      <Canvas camera={{ position: [2.5, 1.8, 1.7], fov: 75 }}>
        <CameraControls target={hasCabinet ? [0, 0.6, 0] : [0, 0.8, 0]} />
        <BuildRoom />
        {hasCabinet && (
          <AddCloset
            height={valueHeight / 100}
            width={valueWidth / 100}
            depth={0.6}
            thickness={0.018}
          />
        )}
      </Canvas>
      <Leva />
      <Sidebar
        onAddCabinet={() => setHasCabinet(true)}
        valueHeight={valueHeight}
        valueWidth={valueWidth}
        setValueHeight={setValueHeight}
        setValueWidth={setValueWidth}
        onAddRuler={() => setShowRuler(true)}
      />
    </div>
  );
}
