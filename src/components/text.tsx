import {
  StatsGl,
  OrbitControls,
  Text3D,
  Center,
  useMatcapTexture,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { useControls } from "leva";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

export default function Text() {
  const [matcapTexture] = useMatcapTexture("7877EE_D87FC5_75D9C7_1C78C0", 256);
  const tempArray = [...Array(100)];
  const donuts = useRef<THREE.Mesh[]>([]);
  const { camera } = useThree();
  const [font, setFont] = useState<any>(null);

  const { cameraX, cameraY, cameraZ } = useControls("Camera", {
    cameraX: { value: -1.4, min: -10, max: 10, step: 0.1 },
    cameraY: { value: -0.3, min: -10, max: 10, step: 0.1 },
    cameraZ: { value: 4.5, min: 1, max: 20, step: 0.1 },
  });

  useEffect(() => {
    const loader = new FontLoader();
    loader.load('/helvetiker_regular.typeface.json', (loadedFont) => {
      setFont(loadedFont);
    });
  }, []);

  useEffect(() => {
    camera.position.set(cameraX, cameraY, cameraZ);
  }, [cameraX, cameraY, cameraZ, camera]);

  useFrame((_, delta) => {
    for (const donut of donuts.current) {
        donut.rotation.y += delta * 0.2;
    }
  });

  return (
    <>
      <OrbitControls
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}
        minDistance={1}
        maxDistance={2}
        enableZoom={true}
      />
      <Center>
        <group>
          <Text3D
            font="/helvetiker_regular.typeface.json"
            size={0.75}
            height={0.2}
            curveSegments={12}
            position={[0.2, 0.4, 0]}
          >
            {`Justine`}
            <meshMatcapMaterial matcap={matcapTexture} />
          </Text3D>
          <Text3D
            font="/helvetiker_regular.typeface.json"
            size={0.75}
            height={0.2}
            curveSegments={12}
            position={[0, -0.4, 0]}
          >
            {`Portfolio`}
            <meshMatcapMaterial matcap={matcapTexture} />
          </Text3D>
        </group>
      </Center>

      {font && tempArray.map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 9,
            (Math.random() - 0.5) * 9,
            (Math.random() - 0.5) * 9,
          ]}
          scale={0.2 + Math.random() * 0.2}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
          ref={(element) => {
            if (element) donuts.current[i] = element;
          }}
        >
          <primitive object={new TextGeometry('J', { font, size: 2.5, depth: 0.5 })} />
          <meshMatcapMaterial matcap={matcapTexture} />
        </mesh>
      ))}

      <StatsGl />
    </>
  );
}
