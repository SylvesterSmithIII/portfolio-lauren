'use client'

import Card from "@/components/card";
import { Canvas } from '@react-three/fiber';
// import Model from '@/components/RotatingHead';
import Image from "next/image";

export default function Home() {
  return (
    <>
<div className="h-screen w-full relative overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
      >
        <source src="/vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 flex mt-44 items-center justify-center text-3xl lg:text-7xl">
        <Image src={"/head.png"} alt="head pic" width={500} height={500}></Image>
      </div>

      <h1 className="absolute top-0 left-0 right-0 flex justify-center items-start mt-4">
        <Image src="/logo.png" alt="head pic" width={500} height={500} />
      </h1>
    </div>
    <main className="flex gap-8 px-2 lg:px-12 pb-6 justify-center items-center flex-wrap bg-black">
      
      <Card link={"/pic-1.PNG"} alt="pic-1" title="TITLE" description="lorem ipsum shit bitch fuck" />
      <Card link={"/pic-2.jpeg"} alt="pic-1" title="TITLE" description="lorem ipsum shit bitch fuck" />
      <Card link={"/pic-3.PNG"} alt="pic-1" title="TITLE" description="lorem ipsum shit bitch fuck" />
      <Card link={"/pic-3.PNG"} alt="pic-1" title="TITLE" description="lorem ipsum shit bitch fuck" />
      <Card link={"/pic-1.PNG"} alt="pic-1" title="TITLE" description="lorem ipsum shit bitch fuck" />
      <Card link={"/pic-1.PNG"} alt="pic-1" title="TITLE" description="lorem ipsum shit bitch fuck" />
      <Card link={"/pic-1.PNG"} alt="pic-1" title="TITLE" description="lorem ipsum shit bitch fuck" />
      


    </main>
    
    </>
   
  );
}
