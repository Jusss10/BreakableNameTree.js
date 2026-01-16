import {
  StatsGl,
  OrbitControls,
  Text3D,
  Center,
  useMatcapTexture,
  Instances,
  Instance,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Text() {
  const [matcapTexture] = useMatcapTexture("7877EE_D87FC5_75D9C7_1C78C0", 256);
  const tempArray = [...Array(100)]
  const donuts = useRef<THREE.Group[]>([])

  useFrame((_, delta) => {
    for(const donut of donuts.current)
    {
        donut.rotation.y += delta * 0.2
    }
  })

  return (
    <>
      <OrbitControls
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}
        minDistance={1.7}
        maxDistance={3}
        enableZoom={true}
      />
      <Center>
        <Text3D
          font="/helvetiker_regular.typeface.json"
          size={0.75}
          height={0.2}
          curveSegments={12}
        >
          {`Jus10`}
          <meshMatcapMaterial matcap={matcapTexture} />
        </Text3D>
      </Center>

      <Instances limit={300}>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <meshMatcapMaterial matcap={matcapTexture} />
        {tempArray.map((_, i) => (
          <Instance
            key={i}
            position={[
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 12,
            ]}
            scale={0.2 + Math.random() * 0.2}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
            ref={ (element) => { donuts.current[i] = element as THREE.Group } }
          />
        ))}
        
      </Instances>

      <StatsGl />
    </>
  );
}
