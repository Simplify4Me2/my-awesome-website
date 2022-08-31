import React, { useRef, useLayoutEffect } from "react";
import { Header } from "../components/header";
// import * as THREE from "three";
import { Canvas, ThreeElements, useFrame } from "@react-three/fiber";

export const Experiment: React.FC = () => {
  // const ref = useRef<ThreeElements["mesh"]>(null);
  // const fooRef = useRef();

  // useFrame((state, delta) => console.log("something useFrame"));

  // useLayoutEffect(() => {
  //   // const { current } = ref;
  //   // console.log(current);
  //   console.log("current");
  //   // useFrame((state, delta) => {
  //   //   ref.current.rotation.y += 0.02;

  //   // });
  // }, []);

  // useLayoutEffect(() => {

  // });

  // useEffect(() => {

  // });

  return (
    <>
      <Header />
      <span>Experiment</span>
      <div id="canvas-container">
        <Canvas>
          <mesh  rotation={[0.5, 0, 0]}>
            <ambientLight intensity={0.1} />
            <directionalLight color="red" position={[0, 0, 5]} />
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
      </div>
    </>
  );
};

