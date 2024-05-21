import Link from "next/link"
import Image from "next/image"

export default function Page() {
    return (
        <>
            <div className="h-screen relative">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    playsInline
                >
                    <source src="/vid.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <h1 className="relative flex justify-center items-start pt-4 cursor-pointer z-50">
                    <Link href={"/"}><Image src="/logo.png" alt="logo pic" width={500} height={500} /></Link>
                    <div className="absolute right-0 top-4">
                    <div className="flex mt-12 mr-8 justify-end text-white gap-4 text-sm">
                        <Link href="/shop">SHOP</Link>
                        <Link href="/contact">GET IN TOUCH</Link>
                        <Link href="/about">ABOUT ME</Link>
                    </div>
                </div>
                </h1>

            </div>
        </>
    )
}