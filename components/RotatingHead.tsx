'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';

function HeadModel() {
  const { scene } = useGLTF('/antinous.glb');
  scene.rotateX(1)



  const modelRef = useRef();

  // useFrame(() => {
  //   if (modelRef.current) {
  //     modelRef.current.rotation.x += 0.001; // Rotate around the Z-axis
  //   }
  // });

  return <primitive ref={modelRef} object={scene} />;
}

export default function RotatingHead() {
  return (
    <div className='h-screen w-full justify-center items-center'>
      <Canvas style={{ height: '50vh', width: '100%' }} camera={{ fov: 75, position: [0, 0, 10] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <HeadModel />
    </Canvas>
    </div>
    
  );
}
