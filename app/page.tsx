'use client'

import Card from "@/components/card";
import Picture1 from "@/public/pic-1.PNG"
import Picture2 from "@/public/pic-2.jpeg"
import Picture3 from "@/public/pic-3.PNG"
import RotatingHead from "@/components/RotatingHead";
import { Canvas } from '@react-three/fiber';
import Model from '../components/RotatingHead';

export default function Home() {
  return (
    <>

      <div className="h-[83.33vh] w-full relative">
        <h1 className="absolute inset-0 flex mt-24 lg:mt-12 justify-center text-3xl lg:text-7xl">I AM NOT AN ARTIST</h1>
        

          <Canvas style={{ height: '83.33vh', width: '100%',}}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[-5, 5, 0]} intensity={1000} />
            <Model />
          </Canvas>

          
        </div>

    <main className="flex gap-8 mx-2 lg:mx-12 mb-6 justify-center items-center flex-wrap">
      
      <Card link={Picture1} alt="pic-1" title="TITLE" description="lorem ipsum shit bitch fuck" />
      <Card link={Picture2} alt="pic-1" title="TITLE" description="lorem ipsum shit bitch fuck" />
      <Card link={Picture3} alt="pic-1" title="TITLE" description="lorem ipsum shit bitch fuck" />
      <Card link={Picture3} alt="pic-1" title="TITLE" description="lorem ipsum shit bitch fuck" /> 
      <Card link={Picture1} alt="pic-1" title="TITLE" description="lorem ipsum shit bitch fuck" />
      <Card link={Picture1} alt="pic-1" title="TITLE" description="lorem ipsum shit bitch fuck" />
      <Card link={Picture1} alt="pic-1" title="TITLE" description="lorem ipsum shit bitch fuck" />
      


    </main>
    
    </>
   
  );
}
