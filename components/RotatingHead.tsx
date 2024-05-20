'use client';

import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Group } from 'three';

const Model = () => {
  const ref = useRef<Group>(null);
  const [model, setModel] = useState<Group>();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('/scene.glb', (gltf) => {
      setModel(gltf.scene);
    });
  }, []);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002; 
    }
  });

  return model ? <primitive object={model} ref={ref} /> : null;
};

export default Model;
