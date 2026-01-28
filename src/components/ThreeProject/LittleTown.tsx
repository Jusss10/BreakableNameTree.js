import { Canvas } from "@react-three/fiber";
import { Button } from "../Reuse/LandingButton";
import { Leva } from "leva";
import { OrbitControls, StatsGl } from "@react-three/drei";

type Props = {
  onStart: () => void;
};

export default function LittleTown({ onStart }: Props) {
  const houseMesaurments = {
    width: 4,
    height: 2.5,
    depth: 4,
  };

  const bushes: {
    position: [number, number, number];
    scale: [number, number, number];
  }[] = [
    { position: [0.8, 0.2, 2.2], scale: [0.5, 0.5, 0.5] },
    { position: [1.4, 0.1, 2.1], scale: [0.25, 0.25, 0.25] },
    { position: [-0.8, 0.1, 2.2], scale: [0.4, 0.4, 0.4] },
    { position: [-1, 0.05, 2.6], scale: [0.15, 0.15, 0.15] },
  ];

  return (
    <>
      <div className="w-screen h-screen fixed top-0 left-0 overflow-hidden">
        <Canvas style={{ background: "#000" }}>
          <StatsGl />
          <OrbitControls />
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[20, 20]} />
            <meshStandardMaterial />
          </mesh>

          <group>
            <mesh position={[0, houseMesaurments.height / 2, 0]}>
              <boxGeometry
                args={[
                  houseMesaurments.width,
                  houseMesaurments.height,
                  houseMesaurments.depth,
                ]}
              />
              <meshStandardMaterial color={"#9e2727"} />
            </mesh>
            <mesh
              position={[0, houseMesaurments.height + 1.5 / 2, 0]}
              rotation={[0, Math.PI / 2 / 2, 0]}
            >
              <coneGeometry args={[3.5, 1.5, 4]} />
              <meshStandardMaterial />
            </mesh>
            // door: This mesh represents the door
            <mesh position={[0, 1, houseMesaurments.depth / 2 + 0.001]}>
              <planeGeometry args={[2.2, 2.2]} />
              <meshStandardMaterial />
            </mesh>
            // bush
            {bushes.map((bush, index) => (
              <mesh key={index} position={bush.position} scale={bush.scale}>
                <sphereGeometry args={[1, 17, 16]} />
                <meshStandardMaterial color="green" />
              </mesh>
            ))}
          </group>
          <ambientLight intensity={0.5} color={"#ffffff"} />
          <directionalLight
            position={[3, 2, -8]}
            intensity={1.5}
            color={"#4c33a5"}
          />
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
