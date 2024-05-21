'use client'

import Card from "@/components/card";
import { Canvas } from '@react-three/fiber';
// import Model from '@/components/RotatingHead';
import Image from "next/image";
import Link from "next/link";

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

        <div className="absolute inset-0 flex mt-44 items-center justify-center z-20">
          <Image src="/head.png" alt="head pic" width={500} height={500} />
        </div>

        <div className="absolute top-0 left-0 right-0 z-30 flex justify-center items-start pt-4">
          <Link href="/">
            <Image src="/logo.png" alt="logo pic" width={500} height={500} />
          </Link>
        </div>

        <div className="absolute top-4 left-0 right-0 z-30 flex justify-end mt-12 mr-8 text-white gap-4 text-sm">
          <Link href="/shop">SHOP</Link>
          <Link href="/contact">GET IN TOUCH</Link>
          <Link href="/about">ABOUT ME</Link>
        </div>
      </div>

      <main className="flex gap-8 px-2 lg:px-12 pb-6 justify-center items-center flex-wrap bg-black">
        <Card link="/pic-1.PNG" alt="pic-1" title="TITLE" description="This piece blends symbols of strength, nostalgia, and transformation, capturing the essence of modern femininity." />
        <Card link="/pic-2.jpeg" alt="pic-1" title="TITLE" description="This abstract piece explores themes of fragility, transformation, and emotional intensity, blending cool serenity with vibrant passion." />
        <Card link="/pic-3.PNG" alt="pic-1" title="TITLE" description="This abstract piece captures the chaotic yet beautiful essence of femininity, blending bold expression with intricate details." />
        <Card link="/bear-artist.png" alt="pic-1" title="TITLE" description="" />
        <Card link="/bear-balloon-sticker.png" alt="pic-1" title="TITLE" description="" />
        <Card link="/bear-balloon.png" alt="pic-1" title="TITLE" description="" />
        <Card link="/bear-square.png" alt="pic-1" title="TITLE" description="" />
        <Card link="/bear-stamp.png" alt="pic-1" title="TITLE" description="" />
        <Card link="/bear-sticker.png" alt="pic-1" title="TITLE" description="" />
        <Card link="/bear-t.png" alt="pic-1" title="TITLE" description="" />
        <Card link="/dog-shirt.png" alt="pic-1" title="TITLE" description="" />
      </main>
    </>
  );
}
