import { StatsGl, OrbitControls, Text3D } from '@react-three/drei';

export default function Text(){
    return <>
        <OrbitControls makeDefault />
        <Text3D 
            font="/helvetiker_regular.typeface.json"
            size={0.75}
            height={0.2}
            curveSegments={12}
        >
            Jus10 Portfolio!
            <meshNormalMaterial />
        </Text3D>
        <StatsGl/>
    </>
}