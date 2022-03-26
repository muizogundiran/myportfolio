import React, { FunctionComponent, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
interface LightProps {
  brightness: number;
  color: string;
}

const Light: FunctionComponent<LightProps> = ({ brightness, color }) => {
  return (
    <rectAreaLight
      width={3}
      height={3}
      color={color}
      intensity={brightness}
      position={[-2, 0, 5]}
      //   lookAt={[0, 0, 0]}
      //   penumbra={1}
      castShadow
    />
  );
};
function ItsSphere() {
  return (
    <mesh visible userData={{ test: "hello" }} position={[0, 0, 0]} castShadow>
      <sphereGeometry attach='geometry' args={[3, 62, 62]} />
      <meshStandardMaterial
        attach='material'
        color='white'
        transparent
        roughness={0.1}
        metalness={0.1}
      />
    </mesh>
  );
}

const Sphere = () => {
  return (
    <Canvas>
      <Light brightness={10} color={"white"} />
      <ItsSphere />
    </Canvas>
  );
};

export default Sphere;
