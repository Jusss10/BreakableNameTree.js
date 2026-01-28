import { Canvas } from "@react-three/fiber";
import { Button } from "../Reuse/LandingButton";
import { Leva } from "leva";
import { OrbitControls } from "@react-three/drei";

type Props = {
  onStart: () => void;
};

export default function LittleTown({ onStart }: Props) {
  return (
    <>
    <div className="w-screen h-screen fixed top-0 left-0 overflow-hidden">
      <Canvas style={{ background: "#000" }}>
        <OrbitControls />
        <mesh>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="#7cc99d" />
        </mesh>
        <ambientLight intensity={0.5} color={'#ffffff'} />
        <directionalLight position={[3, 2, -8]} intensity={1.5} color={'#4c33a5'} />
      </Canvas>
      <Leva collapsed />
      </div>
      <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
        <Button onClick={onStart} variant="secondary" size="sm">
          Add Standard room
        </Button>
      </div>
    </>
  );
}
