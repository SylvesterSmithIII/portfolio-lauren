'use client'

import Card from "@/components/card";
import Picture1 from "@/public/pic-1.PNG"
import Picture2 from "@/public/pic-2.jpeg"
import Picture3 from "@/public/pic-3.PNG"
import RotatingHead from "@/components/RotatingHead";

export default function Home() {
  return (
    <>

      <RotatingHead />

  <main className="flex gap-4 mx-12 justify-center items-center">
     
     <Card link={Picture1} alt="pic-1" title="TITLE" description="lorem ipsum shit bitch fuck" />
     <Card link={Picture2} alt="pic-1" title="TITLE" description="lorem ipsum shit bitch fuck" />
     <Card link={Picture3} alt="pic-1" title="TITLE" description="lorem ipsum shit bitch fuck" />


   </main>
    
    </>
   
  );
}
