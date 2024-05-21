import Image from "next/image"
import Link from "next/link"
import Card from "@/components/card"

export default function Page() {
    return (
        <>
            <div className="bg-black relative">
                <h1 className="flex justify-center items-start pt-4 z-20 relative">
                    <Link href={"/"}><Image src="/logo.png" alt="head pic" width={500} height={500} /></Link>
                    <div className="absolute right-0 z-50">
                    <div className="flex mt-12 mr-8 justify-end text-white gap-4 text-sm">
                        <Link href="/shop">SHOP</Link>
                        <Link href="/contact">GET IN TOUCH</Link>
                        <Link href="/about">ABOUT ME</Link>
                    </div>
                </div>
                </h1>

                
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
            </div>
            
        </>
    )
}