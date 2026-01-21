import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { useControls } from "leva";
import { OrbitControls } from "@react-three/drei";

type CameraControlsProps = {
  target?: [number, number, number];
};

export default function CameraControls({ target = [0, 1, 0] }: CameraControlsProps) {
  const { camera } = useThree();
  const controlsRef = useRef<any>(null);
  const { cameraX, cameraY, cameraZ } = useControls("Camera", {
    cameraX: { value: 2.5, min: -10, max: 10, step: 0.1 },
    cameraY: { value: 1.8, min: 0, max: 10, step: 0.1 },
    cameraZ: { value: 1.7, min: -10, max: 20, step: 0.1 },
  });

  useEffect(() => {
    camera.position.set(cameraX, cameraY, cameraZ);
  }, [cameraX, cameraY, cameraZ, camera]);

  useEffect(() => {
    camera.lookAt(...target);
    if (controlsRef.current) {
      controlsRef.current.target.set(...target);
      controlsRef.current.update();
    }
  }, [target, camera]);

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={true}
    />
  );
}
