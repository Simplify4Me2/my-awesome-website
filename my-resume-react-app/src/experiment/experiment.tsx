import React, { useRef, useLayoutEffect } from "react";
import { Header } from "../components/header";
import { Canvas, ThreeElements, useFrame } from "@react-three/fiber";

export const Experiment: React.FC = () => {
  return (
    <>
      <Header />
      <span>Experiment</span>
      <div id="canvas-container">
        <Canvas>
          <MyMesh />
        </Canvas>
      </div>
    </>
  );
};

const MyMesh: React.FC = () => {
  const ref = useRef<ThreeElements["mesh"]>(null);

  useFrame((state, delta) => {
    if (ref.current !== null) ref.current.rotation.x += 0.01;
  });

  // useLayoutEffect(() => {

  // });

  // useEffect(() => {

  // });

  return (
    <mesh ref={ref} rotation={[0.5, 0, 0]}>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial />
    </mesh>
  );
};
