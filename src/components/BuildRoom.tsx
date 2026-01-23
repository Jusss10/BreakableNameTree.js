import { Environment, Grid } from "@react-three/drei";

export default function BuildRoom() {
  return (
    <>
      <Environment preset="city" />
      <Grid infiniteGrid fadeDistance={50} fadeStrength={3} />
    </>
  );
}
