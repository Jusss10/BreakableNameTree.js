type ClosetProp = {
    height: number;
	width: number;
	depth: number;
	thickness: number;
}

export function AddCloset({height, width, depth, thickness}: ClosetProp) {
  return (
    <>
      <mesh position={[0, thickness/ 2, 0]} >
        <boxGeometry args={[width, thickness, depth]} />
        <meshStandardMaterial color="#c9a27c" />
      </mesh>
      <mesh position={[-((width/2) + thickness/2), height / 2, 0]}>
        <boxGeometry args={[thickness, height, depth]} />
        <meshStandardMaterial color="#7cc99d" />
      </mesh>
      <mesh position={[(width/2) + thickness/2, height / 2, 0]}>
        <boxGeometry args={[thickness, height, depth]} />
        <meshStandardMaterial color="#967cc9" />
      </mesh>
      <mesh position={[0, height -(thickness/2), 0]} >
        <boxGeometry args={[width, thickness, depth]} />
        <meshStandardMaterial color="#bd519d" />
      </mesh>
      <mesh position={[0, height / 2, -(depth/2) + thickness/2]} >
        <boxGeometry args={[width, height - 2 *thickness, thickness]} />
        <meshStandardMaterial color="#b6c97c" />
      </mesh>
    </>
  );
}
